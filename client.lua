--[[ Main Client File]]

client = {
    framework = shared.GetFrameworkObject(),
    load = false,
    uiLoad = false,
}

require 'modules.bridge.client'
require 'modules.exports.client'

local Utils = require 'modules.utils.client'
local Inventory = require 'modules.inventory.client'
local Lobby = require 'modules.lobby.client'
local Ambulance = require 'modules.ambulance.client'

local inLobbyId = nil

client.inGame = {}
client.gameWeapon = nil

---Sends message to the ReactUI.
---@param action string
---@param data any
function client.SendReactMessage(action, data)
    SendNUIMessage({ action = action, data = data })
end

--- Prepare the frontend and send the data
function client.SetupUI()
    if client.uiLoad then return end
    local defaultLocale = GetConvar('ox:locale', 'en')
    client.SendReactMessage('ui:setupUI', {
        setLocale = lib.loadJson(('locales.%s'):format(defaultLocale)).ui,
        setPlayableWeapons = Config.Game.weapons,
    })
end

function client.onPlayerLoad(isLoggedIn)
    client.load = isLoggedIn
    if isLoggedIn then
        local state = lib.callback.await(_e('server:getPlayerMeta'), false, 'indeathmatch')
        if state == true then
            Lobby.SetPlayerCoords(true, true)
        end
    else
        if client.inGame.id then
            Inventory.Disabled(false)
            Inventory.SetWeaponWheelState(false)
            Lobby.DeleteWeapon()
            client.SendReactMessage('ui:setPage', 'profile')
        end
        TriggerServerEvent(_e('server:onPlayerLogout'))
        inLobbyId = nil
        client.inGame = {}
        client.SendReactMessage('ui:setVisible', false)
    end
end

--- Starts the client resource.
function client.StartResource()
    if client.IsPlayerLoaded() then
        client.onPlayerLoad(true)
    end
end

-- Open menu.
local function openMenu()
    if IsNuiFocused() or not client.uiLoad then return end
    client.SetupUI()
    local userProfile = lib.callback.await(_e('server:getPlayerProfile'), false)
    SetNuiFocus(true, true)
    client.SendReactMessage('ui:setUserProfile', userProfile)
    client.SendReactMessage('ui:setVisible', true)
end

if Config.Commands.OpenMenu.active then
    RegisterCommand(Config.Commands.OpenMenu.command, function()
        openMenu()
    end, false)
end

if Config.Commands.EndMatch.active then
    RegisterCommand(Config.Commands.EndMatch.command, function()
        Lobby.FinishGameWithCommand()
    end, false)
end

RegisterNUICallback('nui:loadUI', function(_, resultCallback)
    resultCallback(true)
    client.SetupUI()
end)

RegisterNUICallback('nui:onLoadUI', function(_, resultCallback)
    resultCallback(true)
    client.uiLoad = true
end)

RegisterNUICallback('nui:hideFrame', function(_, resultCallback)
    client.SendReactMessage('ui:setVisible', false)
    SetNuiFocus(false, false)
    resultCallback(true)
end)

RegisterNUICallback('nui:createLobby', function(_, resultCallback)
    local result = lib.callback.await(_e('server:createLobby'), false)
    if (result.state) then
        inLobbyId = result.lobby.id
    end
    resultCallback(result)
end)

RegisterNUICallback('nui:leaveCurrentLobby', function(lobbyId, resultCallback)
    if not inLobbyId then
        return resultCallback(false)
    end
    lib.callback.await(_e('server:leaveCurrentLobby'), false, lobbyId)
    inLobbyId = nil
    resultCallback(true)
end)

RegisterNUICallback('nui:changeTeamInLobby', function(teamIndex, resultCallback)
    if not inLobbyId then
        return resultCallback(false)
    end
    local result = lib.callback.await(_e('server:changeTeamCurrentLobby'), false, inLobbyId, teamIndex)
    resultCallback(true)
end)

RegisterNUICallback('nui:changeGameMode', function(newMode, resultCallback)
    if not inLobbyId then
        return resultCallback(false)
    end
    local result = lib.callback.await(_e('server:changeLobbyGameMode'), false, newMode)
    resultCallback(result)
end)

RegisterNUICallback('nui:changeGameWeapon', function(newWeapon, resultCallback)
    if not inLobbyId then
        return resultCallback(false)
    end
    local result = lib.callback.await(_e('server:changeLobbyGameWeapon'), false, string.lower(newWeapon))
    resultCallback(result)
end)

RegisterNUICallback('nui:changeGameTime', function(type, resultCallback)
    if not inLobbyId then
        return resultCallback(false)
    end
    local result = lib.callback.await(_e('server:changeGameTime'), false, type)
    resultCallback(result)
end)

RegisterNUICallback('nui:changeGameMap', function(type, resultCallback)
    if not inLobbyId then
        return resultCallback(false)
    end
    local result = lib.callback.await(_e('server:changeGameMap'), false, type)
    resultCallback(result)
end)

RegisterNUICallback('nui:getActiveLobbies', function(_, resultCallback)
    local result = lib.callback.await(_e('server:getActiveLobbies'), false)
    resultCallback(result)
end)

RegisterNUICallback('nui:joinLobby', function(lobbyId, resultCallback)
    if inLobbyId then
        return resultCallback(false)
    end
    local result = lib.callback.await(_e('server:joinLobby'), false, lobbyId)
    if result then
        inLobbyId = lobbyId
    end
    resultCallback(result)
end)

RegisterNUICallback('nui:startOwnLobby', function(_, resultCallback)
    if not inLobbyId then
        return resultCallback(false)
    end
    local result = lib.callback.await(_e('server:startOwnLobby'), false, inLobbyId)
    resultCallback(result)
end)

RegisterNUICallback('nui:updateProfilePhoto', function(newUrl, resultCallback)
    local result = lib.callback.await(_e('server:updateProfilePhoto'), false, newUrl)
    client.SendReactMessage('ui:setUserProfile', result)
    resultCallback(true)
end)

RegisterNetEvent(_e('client:leaveLobbyByForce'), function(lobbyId)
    if not inLobbyId then return end
    if inLobbyId == lobbyId then
        inLobbyId = nil
        client.SendReactMessage('ui:setVisible', false)
        client.SendReactMessage('ui:leaveCurrentLobby')
        Citizen.Wait(1)
        Utils.Notify(locale('u_forced_leave_lobby'), 'error')
        SetNuiFocus(false, false)
    end
end)

RegisterNetEvent(_e('client:updateCurrentLobby'), function(newData)
    client.SendReactMessage('ui:setCurrentLobby', newData)
    if newData.weapon then
        client.gameWeapon = newData.weapon
    end
end)

RegisterNetEvent(_e('client:startCurrentLobby'), function(lobby, team)
    local ped = cache.ped
    client.inGame = lobby
    client.inGame.self = { team = team }
    SetNuiFocus(false, false)
    FreezeEntityPosition(ped, true)
    Inventory.Disabled(true)
    client.SendReactMessage('ui:setCurrentLobby', lobby)
    client.SendReactMessage('ui:setPage', 'in-game')
    DoScreenFadeOut(500)
    while not IsScreenFadedOut() do Wait(250) end
    Lobby.SetPlayerCoords()
    Inventory.SetWeaponWheelState(true)
    DoScreenFadeIn(250)
    while not IsScreenFadedIn() do Wait(125) end
    Lobby.GameThread()
    local timer = Config.Game.startCountDown * 1000
    while timer > 0 do
        if not client.inGame.id then
            FreezeEntityPosition(ped, false)
            return
        end
        TriggerServerEvent('InteractSound_SV:PlayOnSource', 'pager', 0.10)
        Utils.Notify(locale('to_start_match', tonumber(timer / 1000)), 'inform', 2000)
        Citizen.Wait(1000)
        timer = timer - 1000
    end
    Utils.Notify(locale('match_started'), 'success', 2000)
    FreezeEntityPosition(ped, false)
    Lobby.GiveWeapon(client.gameWeapon)
end)

RegisterNetEvent(_e('client:finishCurrentLobby'), function(newData)
    Inventory.SetWeaponWheelState(false)
    Inventory.Disabled(false)
    client.SendReactMessage('ui:setVisible', false)
    client.SendReactMessage('ui:setCurrentLobby', {})
    client.SendReactMessage('ui:setPage', 'profile')
    Inventory.SetWeaponWheelState(false)
    Lobby.DeleteWeapon()
    Lobby.SetPlayerCoords(true)
    Utils.Notify(locale('match_ended'), 'success', 2000)
    inLobbyId = nil
    client.inGame = {}
    Citizen.Wait(1000)
    Ambulance.RevivePlayer()
end)

AddEventHandler('onResourceStart', function(resource)
    if resource == shared.resource then
        Citizen.Wait(2000)
        client.StartResource()
    end
end)

AddEventHandler('onResourceStop', function(resource)
    if resource == shared.resource then
        client.onPlayerLoad(false)
        Utils.HideTextUI()
    end
end)

--[[ DeathMatch Lobby]]
if Config.DeathMatchMenuZone.active then
    CreateThread(function()
        local coords = Config.DeathMatchMenuZone.coords
        local lobbyBlip = Config.DeathMatchMenuZone.blip
        if lobbyBlip.active then
            local _blip = AddBlipForCoord(coords.x, coords.y, coords.z)
            SetBlipSprite(_blip, lobbyBlip.sprite)
            SetBlipDisplay(_blip, 4)
            SetBlipScale(_blip, lobbyBlip.scale)
            SetBlipColour(_blip, lobbyBlip.colour)
            SetBlipAsShortRange(_blip, true)

            BeginTextCommandSetBlipName('STRING')
            AddTextComponentSubstringPlayerName(lobbyBlip.name)
            EndTextCommandSetBlipName(_blip)
        end

        local isDrawTextUIOpen = false
        while true do
            local wait = 2000
            local playerCoords = GetEntityCoords(cache.ped)
            local distance = #(playerCoords - coords)
            if distance < 5.0 then
                wait = 5
                Utils.DrawMarker(20, coords, 3)
                if distance < 1.5 then
                    if not isDrawTextUIOpen then
                        isDrawTextUIOpen = true
                        Utils.ShowTextUI(locale('open_menu'))
                    end
                    if IsControlJustPressed(0, 38) then -- E
                        openMenu()
                        Citizen.Wait(1000)
                    end
                elseif isDrawTextUIOpen then
                    isDrawTextUIOpen = false
                    Utils.HideTextUI()
                end
            elseif isDrawTextUIOpen then
                isDrawTextUIOpen = false
                Utils.HideTextUI()
            end
            Citizen.Wait(wait)
        end
    end)
end
