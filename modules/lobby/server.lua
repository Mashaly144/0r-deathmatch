local Lobby = {}
local Lobbies = {}

local lastLobbyIndx = 0

local lobbyThread = nil

function Lobby.GetPlayerOwnLobby(source)
    for key, value in pairs(Lobbies) do
        if value and value.leader.source == source then
            return key, value
        end
    end
    return nil, nil
end

function Lobby.PlayerHaveOwnLobby(source)
    for key, value in pairs(Lobbies) do
        if value and value.leader.source == source then
            return true
        end
    end
    return false
end

function Lobby.GetLobbyById(lobbyId)
    return Lobbies[lobbyId]
end

function Lobby.IsPlayerInLobby(source, lobbyId)
    local lobby = Lobby.GetLobbyById(lobbyId)
    if not lobby then return false end
    for key, value in pairs(lobby.members) do
        if value and value.source == source then
            return true
        end
    end
    return false
end

---@param source number
---@return id lobbyId
function Lobby.IsPlayerInAnyLobby(source)
    for _, lobby in pairs(Lobbies) do
        if lobby then
            for _, value in pairs(lobby.members) do
                if value.source == source then
                    return lobby.id
                end
            end
        end
    end
    return false
end

function Lobby.GetPlayerTeam(source, lobbyId)
    local lobby = Lobby.GetLobbyById(lobbyId)
    if not lobby then return -1 end
    for key, value in pairs(lobby.members) do
        if value.source == source then
            return value.team
        end
    end
    return -1
end

function Lobby.UpdateLobbyData(lobbyId)
    local lobby = Lobby.GetLobbyById(lobbyId)
    if not lobby then return false end
    for _, member in pairs(lobby.members) do
        TriggerClientEvent(_e('client:updateCurrentLobby'), member.source, lobby)
    end
    return true
end

function Lobby.Delete(lobbyId)
    local lobby = Lobby.GetLobbyById(lobbyId)
    if not lobby then return false end

    for key, member in pairs(lobby.members) do
        TriggerClientEvent(_e('client:leaveLobbyByForce'), member.source, lobbyId)
    end

    Lobbies[lobbyId] = nil
    return true
end

function Lobby.Leave(source, lobbyId)
    if not Lobby.IsPlayerInLobby(source, lobbyId) then return false end
    local lobby = Lobby.GetLobbyById(lobbyId)
    local leavingPlayerTeam

    for key, member in pairs(lobby.members) do
        if member.source == source then
            leavingPlayerTeam = member.team
            table.remove(lobby.members, key)
            break
        end
    end

    if lobby.leader.source == source then
        if lobby.started then
            Lobby.FinishById(lobbyId)
        else
            Lobby.Delete(lobbyId)
        end
    else
        if lobby.started then
            local teamCounts = { [0] = 0, [1] = 0 }
            for _, member in pairs(lobby.members) do
                teamCounts[member.team] = teamCounts[member.team] + 1
            end
            if teamCounts[leavingPlayerTeam] == 0 then
                Lobby.FinishById(lobbyId)
            end
        end
        Lobby.UpdateLobbyData(lobbyId)
    end

    return true
end

function Lobby.ChangePlayerTeam(source, lobbyId, newTeam)
    if not Lobby.IsPlayerInLobby(source, lobbyId) then return false end
    local lobby = Lobby.GetLobbyById(lobbyId)

    local playersPerTeam = lobby.mode

    local teamCounts = { team1 = 0, team2 = 0 }

    for _, member in pairs(lobby.members) do
        if member.source == source then
            if member.team == newTeam then
                return false
            end
        end
        if member.team == 1 then
            teamCounts.team1 = teamCounts.team1 + 1
        else
            teamCounts.team2 = teamCounts.team2 + 1
        end
    end

    if (newTeam == 1 and teamCounts.team1 >= playersPerTeam) or
        (newTeam == 2 and teamCounts.team2 >= playersPerTeam) then
        return false
    end

    for key, member in pairs(lobby.members) do
        if member.source == source then
            member.team = newTeam
            break
        end
    end

    Lobby.UpdateLobbyData(lobbyId)
    return true
end

function Lobby.Create(source)
    if Lobby.PlayerHaveOwnLobby(source) then
        return { state = false }
    end
    local playerProfile = server.GetPlayerProfile(source)
    local mapKey = 1
    local gameMap = Config.Game.maps[mapKey]
    --[[new unique lobby id]]
    lastLobbyIndx = lastLobbyIndx + 1
    local newIdx = lastLobbyIndx
    local newLobby = {
        id = newIdx,
        leader = {
            source = source,
            name = playerProfile.name,
            photo = playerProfile.photo
        },
        game_time = Config.Game.gameTimes[1],
        map = {
            key = mapKey,
            image = gameMap.image,
            name = gameMap.name,
        },
        members = {
            {
                source = source,
                name = playerProfile.name,
                photo = playerProfile.photo,
                kd_rate = playerProfile.kd_rate,
                team = 1,
                kill = 0,
                death = 0,
            },
        },
        mode = 5,
        name = string.format('Lobby #%s', newIdx),
        score = { [0] = 0, [1] = 0 },
        weapon = Config.Game.weapons[1],
    }
    Lobbies[newIdx] = newLobby
    return {
        state = true,
        lobby = newLobby
    }
end

function Lobby.ChangeGameMode(source, newMode)
    if not Lobby.PlayerHaveOwnLobby(source) then return false end
    local lobbyId, lobby = Lobby.GetPlayerOwnLobby(source)

    local totalPlayers = #lobby.members
    local requiredPlayers = newMode * 2
    if totalPlayers > requiredPlayers then
        return false
    end

    lobby.mode = newMode

    local teamAssignment = {}
    for i, member in pairs(lobby.members) do
        teamAssignment[i] = (i % 2)
    end

    for i, member in pairs(lobby.members) do
        member.team = teamAssignment[i]
    end

    Lobby.UpdateLobbyData(lobbyId)
    return true
end

function Lobby.ChangeGameWeapon(source, newWeapon)
    if not Lobby.PlayerHaveOwnLobby(source) then return false end
    local lobbyId, lobby = Lobby.GetPlayerOwnLobby(source)

    lobby.weapon = newWeapon

    Lobbies[lobbyId].weapon = newWeapon

    Lobby.UpdateLobbyData(lobbyId)
    return true
end

function Lobby.ChangeGameTime(source, type)
    if not Lobby.PlayerHaveOwnLobby(source) then return false end
    local lobbyId, lobby = Lobby.GetPlayerOwnLobby(source)

    local gameTimes = Config.Game.gameTimes

    local currentGameTime = lobby.game_time or gameTimes[1]

    local currentIndex = 1
    for i, time in pairs(gameTimes) do
        if time == currentGameTime then
            currentIndex = i
            break
        end
    end

    if type == 'up' then
        currentIndex = currentIndex + 1
        if currentIndex > #gameTimes then
            currentIndex = 1
        end
    elseif type == 'down' then
        currentIndex = currentIndex - 1
        if currentIndex < 1 then
            currentIndex = #gameTimes
        end
    end

    Lobbies[lobbyId].game_time = gameTimes[currentIndex]
    Lobby.UpdateLobbyData(lobbyId)
    return true
end

function Lobby.ChangeGameMap(source, type)
    if not Lobby.PlayerHaveOwnLobby(source) then return false end
    local lobbyId, lobby = Lobby.GetPlayerOwnLobby(source)

    local gameMaps = Config.Game.maps

    local currentGameMapKey = lobby.map.key or 1

    local newMapKey = 1
    for i, _ in ipairs(gameMaps) do
        if i == currentGameMapKey then
            newMapKey = i
            break
        end
    end

    if type == 'next' then
        newMapKey = newMapKey + 1
        if newMapKey > #gameMaps then
            newMapKey = 1
        end
    elseif type == 'prev' then
        newMapKey = newMapKey - 1
        if newMapKey < 1 then
            newMapKey = #gameMaps
        end
    end

    Lobbies[lobbyId].map = {
        key = newMapKey,
        image = gameMaps[newMapKey].image,
        name = gameMaps[newMapKey].name,
    }
    Lobby.UpdateLobbyData(lobbyId)
    return true
end

function Lobby.GetLobbies()
    return Lobbies
end

function Lobby.Join(source, lobbyId)
    if Lobby.IsPlayerInAnyLobby(source) then
        return false
    end

    local playerProfile = server.GetPlayerProfile(source)
    local lobby = Lobby.GetLobbyById(lobbyId)

    if lobby.started then
        return false
    end

    local maxTeamSize = lobby.mode
    local teamCounts = { [0] = 0, [1] = 0 }

    for _, member in pairs(lobby.members) do
        teamCounts[member.team] = teamCounts[member.team] + 1
    end

    if teamCounts[0] >= maxTeamSize and teamCounts[1] >= maxTeamSize then
        return false
    end

    local assignedTeam = 0
    if teamCounts[1] < teamCounts[0] then
        assignedTeam = 1
    end

    lobby.members[#lobby.members + 1] = {
        source = source,
        name = playerProfile.name,
        photo = playerProfile.photo,
        kd_rate = playerProfile.kd_rate,
        team = assignedTeam,
        kill = 0,
        death = 0,
    }

    Lobby.UpdateLobbyData(lobbyId)
    return true
end

function Lobby.StartOwnLobby(source, ownLobbyId)
    local lobby = Lobby.GetLobbyById(ownLobbyId)
    if not lobby then return { state = false } end
    if source ~= lobby.leader.source then
        return { state = false }
    end
    if #lobby.members == 1 then
        return { state = false, message = locale('cant_start_it_alone') }
    end
    local teamCounts = { [0] = 0, [1] = 0 }
    for _, member in pairs(lobby.members) do
        teamCounts[member.team] = teamCounts[member.team] + 1
    end

    if teamCounts[0] == 0 or teamCounts[1] == 0 then
        return { state = false, message = locale('cant_start_without_opponents') }
    end

    lobby.started = true
    lobby.finish_time = os.time() + (lobby.game_time * 60)
    for _, member in pairs(lobby.members) do
        local newBucketId = 111 + lobby.id
        SetPlayerRoutingBucket(member.source, newBucketId)
        server.SetPlayerMeta(member.source, 'indeathmatch', true)
        TriggerClientEvent(_e('client:startCurrentLobby'), member.source, lobby,
            Lobby.GetPlayerTeam(member.source, lobby.id)
        )
    end
    Lobby.StartLobbyThreadIfNotExist()
    return { state = true }
end

function Lobby.FinishById(lobbyId)
    local lobby = Lobby.GetLobbyById(lobbyId)
    if not lobby then return false end

    local winnerTeam = -1
    if lobby.score[0] > lobby.score[1] then
        winnerTeam = 0
    elseif lobby.score[1] > lobby.score[0] then
        winnerTeam = 1
    end

    for _, member in pairs(lobby.members) do
        SetPlayerRoutingBucket(member.source, 0)
        TriggerClientEvent(_e('client:finishCurrentLobby'), member.source)
        if lobby.started then
            Lobby.AddMatch(member.source, lobbyId)
            if member.team == winnerTeam then
                Lobby.AddWin(member.source, lobbyId)
            else
                Lobby.AddLose(member.source, lobbyId)
            end
            server.updatePlayerProfile(server.GetPlayerIdentifier(member.source), false)
        end
    end

    Citizen.Wait(500)

    Lobby.Delete(lobbyId)

    return true
end

function Lobby.StartLobbyThreadIfNotExist()
    if not lobbyThread then
        Citizen.CreateThread(function()
            local checked = false
            while true do
                Citizen.Wait(1000 * 30) -- per 30 sec
                checked = false
                for key, lobby in pairs(Lobbies) do
                    if lobby and lobby.started then
                        local time = os.time()
                        local gameFinishTime = lobby.finish_time
                        if time >= gameFinishTime then
                            CreateThread(function()
                                Lobby.FinishById(lobby.id)
                            end)
                        end
                        checked = true
                    end
                end
                if not checked then
                    break
                end
            end
            lobbyThread = nil
        end)
    end
end

function Lobby.AddDeath(source, lobbyId)
    if not Lobby.IsPlayerInLobby(source, lobbyId) then return false end
    local identifier = server.GetPlayerIdentifier(source)
    if playerProfilesCache[identifier] then
        playerProfilesCache[identifier].deaths += 1
    end
end

function Lobby.AddKill(source, lobbyId, value)
    if not Lobby.IsPlayerInLobby(source, lobbyId) then return false end
    local identifier = server.GetPlayerIdentifier(source)
    if playerProfilesCache[identifier] then
        playerProfilesCache[identifier].kills += value or 1
    end
end

function Lobby.AddScore(lobbyId, teamId)
    local lobby = Lobby.GetLobbyById(lobbyId)
    lobby.score[teamId] += 1
end

function Lobby.AddMatch(source, lobbyId)
    if not Lobby.IsPlayerInLobby(source, lobbyId) then return false end
    local identifier = server.GetPlayerIdentifier(source)
    if playerProfilesCache[identifier] then
        playerProfilesCache[identifier].played_matches += 1
    end
end

function Lobby.AddWin(source, lobbyId)
    if not Lobby.IsPlayerInLobby(source, lobbyId) then return false end
    local identifier = server.GetPlayerIdentifier(source)
    if playerProfilesCache[identifier] then
        playerProfilesCache[identifier].wins += 1
    end
end

function Lobby.AddLose(source, lobbyId)
    if not Lobby.IsPlayerInLobby(source, lobbyId) then return false end
    local identifier = server.GetPlayerIdentifier(source)
    if playerProfilesCache[identifier] then
        playerProfilesCache[identifier].loses += 1
    end
end

return Lobby
