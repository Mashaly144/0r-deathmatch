-- Get player by source
---@return number PlayerIdentifier
function server.GetPlayer(source)
    return exports.qbx_core:GetPlayer(source)
end

-- Retrieves the player's identifier
---@return number PlayerIdentifier
function server.GetPlayerIdentifier(source)
    local xPlayer = server.framework.Functions.GetPlayer(source)
    if xPlayer then
        return xPlayer.PlayerData.citizenid
    end
    return nil
end

-- Retrieves the player's name
---@return string|nil
function server.GetPlayerCharacterName(source)
    local xPlayer = server.GetPlayer(source)
    if xPlayer then
        return (xPlayer.PlayerData.charinfo.firstname or '')
            .. ' ' ..
            (xPlayer.PlayerData.charinfo.lastname or '')
    end
    return nil
end

function server.SetPlayerMeta(source, key, value)
    local xPlayer = server.GetPlayer(source)
    if not xPlayer then return false end
    return xPlayer.Functions.SetMetaData(key, value)
end

function server.GetPlayerMeta(source, key)
    local xPlayer = server.GetPlayer(source)
    if not xPlayer then return false end
    return xPlayer?.PlayerData?.metadata[key]
end
