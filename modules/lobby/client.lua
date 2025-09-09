local Lobby = {}

local Ambulance = require 'modules.ambulance.client'
local Utils = require 'modules.utils.client'

local function RevivePlayer()
    local timer = Config.Game.reviveCountdown * 1000
    while timer > 0 do
        Citizen.Wait(1000)
        if not client.inGame.id then
            return
        end
        Utils.Notify(locale('to_your_revive', tonumber(timer / 1000)), 'inform')
        timer = timer - 1000
    end
    Ambulance.RevivePlayer()
    Lobby.SetPlayerCoords()
    local playerPed = cache.ped
    local playerId = PlayerId()
    Citizen.Wait(1000)
    Lobby.GiveWeapon(client.gameWeapon)
    SetEntityAlpha(playerPed, 150, false)
    SetPlayerInvincible(playerId, true)
    Citizen.Wait(500)
    SetEntityAlpha(playerPed, 255, false)
    SetPlayerInvincible(playerId, false)
end

function Lobby.SetPlayerCoords(reset, onload)
    local ped = cache.ped
    local coords = nil
    if reset then
        if onload and client.inGame then return end
        coords = Config.DeathMatchMenuZone.coords
        TriggerServerEvent(_e('server:setPlayerMeta'), 'indeathmatch', false)
    else
        local inGame = client.inGame
        local playerTeam = inGame.self.team
        local mapKey = inGame.map.key --[[@type number]]

        local teamCoords = (playerTeam == 1) and Config.Game.maps[mapKey].redTeamCoords
            or
            Config.Game.maps[mapKey].blueTeamCoords
        coords = teamCoords[math.random(1, #teamCoords)] --[[@type vector4]]
    end

    if not coords then return end

    SetEntityCoords(ped, coords.x, coords.y, coords.z)
    SetEntityHeading(ped, coords.w or 0.0)
end

function Lobby.GiveWeapon(weaponName)
    local ped = cache.ped
    if not weaponName then
        weaponName = 'weapon_pistol'
    end
    local weaponHash = GetHashKey(weaponName)

    GiveWeaponToPed(ped, weaponHash, 999, false, true)
    SetCurrentPedWeapon(ped, weaponHash, true)
    --[[ ? double time ? :/ ]]
    Citizen.Wait(1000)
    GiveWeaponToPed(ped, weaponHash, 999, false, true)
    SetCurrentPedWeapon(ped, weaponHash, true)
end

function Lobby.DeleteWeapon()
    local ped = cache.ped
    if client.gameWeapon then
        RemoveWeaponFromPed(ped, client.gameWeapon)
    else
        RemoveAllPedWeapons(ped, true)
    end
end

function Lobby.FinishGameWithCommand()
    if not client.inGame.id then return false end
    lib.callback.await(_e('server:finishGameWithCommand'), false, client.inGame.id)
    return true
end

function Lobby.GameThread()
    if client.inGame?.thread then return end

    client.inGame.thread = true
    CreateThread(function()
        while client.inGame.id do
            Citizen.Wait(1)
            local playerPed = cache.ped

            if IsEntityDead(playerPed) then
                Citizen.Wait(300)

                local pedKiller = GetPedSourceOfDeath(playerPed)
                local killerId = nil

                if IsEntityAPed(pedKiller) and IsPedAPlayer(pedKiller) then
                    killerId = NetworkGetPlayerIndexFromPed(pedKiller)
                end

                if killerId then
                    if killerId == PlayerId() then
                        TriggerServerEvent(_e('server:player_suicide'), client.inGame.id)
                    else
                        TriggerServerEvent(_e('server:player_killed'), client.inGame.id, GetPlayerServerId(killerId))
                    end
                end

                RevivePlayer()
            end

            while IsEntityDead(playerPed) do
                Citizen.Wait(1)
            end
        end

        client.inGame.thread = false
    end)
end

lib.callback.register(_e('client:IsPlayerInGame'), function()
    return client.inGame.id
end)

return Lobby
