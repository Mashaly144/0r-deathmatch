--[[ Main Server File]]

server = {
    framework = shared.GetFrameworkObject(),
    load = false,
}

playerProfilesCache = {}

-- Loads module.bridge manage server-side functionality.
require 'modules.bridge.server'

require 'modules.exports.server'

local Lobby = require 'modules.lobby.server'

function server.updatePlayerProfile(identifier, clear)
    local playerProfile = playerProfilesCache[identifier]
    if playerProfile then
        -- Save the cached profile to the database
        MySQL.update(
            'UPDATE deathmatch_profiles SET played_matches = ?, kills = ?, wins = ?, deaths = ?, loses = ?, photo = ? WHERE player_id = ?',
            { playerProfile.played_matches, playerProfile.kills, playerProfile.wins,
                playerProfile.deaths, playerProfile.loses, playerProfile.photo, identifier })

        playerProfile.kd_rate = playerProfile.kills / (playerProfile.deaths > 0 and playerProfile.deaths or 1)

        -- Remove profile from cache
        if clear then
            playerProfilesCache[identifier] = nil
        end
    end
end

local function getPlayerProfile(source)
    local identifier = server.GetPlayerIdentifier(source)
    -- Check if the profile is already in the cache
    local cachedProfile = playerProfilesCache[identifier]
    if cachedProfile then
        return cachedProfile
    end

    -- Fetch from the database if not cached
    local playerProfile = MySQL.single.await('SELECT * FROM deathmatch_profiles WHERE player_id = ?', { identifier })
    if playerProfile then
        playerProfile.kd_rate = playerProfile.kills / (playerProfile.deaths > 0 and playerProfile.deaths or 1)
        playerProfile.name = server.GetPlayerCharacterName(source)
        playerProfilesCache[identifier] = playerProfile
        return playerProfilesCache[identifier]
    end

    -- Create a new profile if not found in the database
    local newProfile = {
        played_matches = 0,
        wins = 0,
        loses = 0,
        kills = 0,
        deaths = 0,
        kd_rate = 0.0,
        name = server.GetPlayerCharacterName(source),
        photo = nil,
    }

    -- Insert new profile into the database
    MySQL.insert.await('INSERT INTO deathmatch_profiles (player_id) VALUES (?)', { identifier })
    playerProfilesCache[identifier] = newProfile
    return playerProfilesCache[identifier]
end
server.GetPlayerProfile = getPlayerProfile

-- Event handler triggered when a player dropped.
AddEventHandler('playerDropped', function()
    local src = source
    local identifier = server.GetPlayerIdentifier(src)
    server.updatePlayerProfile(identifier, true)
    local inLobby = Lobby.IsPlayerInAnyLobby(src)
    if inLobby then
        Lobby.Leave(src, inLobby)
    end
end)

-- Event handler triggered when a player logout.
RegisterNetEvent(_e('server:onPlayerLogout'), function()
    local src = source
    local identifier = server.GetPlayerIdentifier(src)
    server.updatePlayerProfile(identifier, true)
    local lobbyId = Lobby.IsPlayerInAnyLobby(src)
    if lobbyId then
        Lobby.Leave(src, lobbyId)
    end
end)

RegisterNetEvent(_e('server:player_suicide'), function(lobbyId)
    local src = source
    Lobby.AddDeath(src, lobbyId)
    local playerTeam = Lobby.GetPlayerTeam(src, lobbyId)
    local opposingTeam = 1
    if playerTeam == 1 then
        opposingTeam = 0
    end
    Lobby.AddScore(lobbyId, opposingTeam)
    Lobby.UpdateLobbyData(lobbyId)
end)

RegisterNetEvent(_e('server:player_killed'), function(lobbyId, killer)
    local src = source
    local playerTeam = Lobby.GetPlayerTeam(src, lobbyId)
    local killerTeam = Lobby.GetPlayerTeam(tonumber(killer), lobbyId)
    if playerTeam == killerTeam then
        Lobby.AddKill(tonumber(killer), lobbyId, -1)
        return
    end
    Lobby.AddDeath(src, lobbyId)
    Lobby.AddKill(tonumber(killer), lobbyId)
    local opposingTeam = 1
    if playerTeam == 1 then
        opposingTeam = 0
    end
    Lobby.AddScore(lobbyId, opposingTeam)
    Lobby.UpdateLobbyData(lobbyId)
end)

RegisterNetEvent(_e('server:setPlayerMeta'), function(key, value)
    local src = source
    server.SetPlayerMeta(src, key, value)
    if value == false then
        SetPlayerRoutingBucket(src, 0)
    end
end)

lib.callback.register(_e('server:getPlayerMeta'), function(source, key)
    return server.GetPlayerMeta(source, key)
end)

lib.callback.register(_e('server:getPlayerProfile'), function(source)
    local playerProfile = getPlayerProfile(source)
    playerProfile.source = source
    return playerProfile
end)

lib.callback.register(_e('server:createLobby'), function(source)
    return Lobby.Create(source)
end)

lib.callback.register(_e('server:leaveCurrentLobby'), function(source, lobbyId)
    return Lobby.Leave(source, lobbyId)
end)

lib.callback.register(_e('server:changeTeamCurrentLobby'), function(source, lobbyId, newTeam)
    return Lobby.ChangePlayerTeam(source, lobbyId, newTeam)
end)

lib.callback.register(_e('server:changeLobbyGameMode'), function(source, newMode)
    return Lobby.ChangeGameMode(source, newMode)
end)

lib.callback.register(_e('server:changeLobbyGameWeapon'), function(source, newWeapon)
    return Lobby.ChangeGameWeapon(source, newWeapon)
end)

lib.callback.register(_e('server:changeGameTime'), function(source, type)
    return Lobby.ChangeGameTime(source, type)
end)

lib.callback.register(_e('server:changeGameMap'), function(source, type)
    return Lobby.ChangeGameMap(source, type)
end)

lib.callback.register(_e('server:getActiveLobbies'), function()
    return Lobby.GetLobbies()
end)

lib.callback.register(_e('server:joinLobby'), function(source, lobbyId)
    return Lobby.Join(source, lobbyId)
end)

lib.callback.register(_e('server:startOwnLobby'), function(source, lobbyId)
    return Lobby.StartOwnLobby(source, lobbyId)
end)

lib.callback.register(_e('server:finishGameWithCommand'), function(source, lobbyId)
    local lobby = Lobby.GetLobbyById(lobbyId)
    if not lobby.started then return false end
    if lobby.leader.source ~= source then
        return false
    end
    Lobby.FinishById(lobbyId)
    return true
end)

lib.callback.register(_e('server:updateProfilePhoto'), function(source, newUrl)
    getPlayerProfile(source)
    local identifier = server.GetPlayerIdentifier(source)
    playerProfilesCache[identifier].photo = newUrl
    server.updatePlayerProfile(identifier)
    return getPlayerProfile(source)
end)

--[[ Thread | Update Player Profiles ]]
Citizen.CreateThread(function()
    while true do
        Citizen.Wait(10 * 1000 * 60) -- 10 minutes

        for identifier, profile in pairs(playerProfilesCache) do
            MySQL.update(
                'UPDATE deathmatch_profiles SET played_matches = ?, kills = ?, wins = ?, deaths = ?, loses = ? WHERE player_id = ?',
                { profile.played_matches, profile.kills, profile.wins, profile.deaths, profile.loses,
                    identifier })
        end
    end
end)
