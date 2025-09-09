-- Get player by source
---@return number PlayerIdentifier
function server.GetPlayer(source)
    return server.framework.GetPlayerFromId(source)
end

-- Retrieves the player's identifier
---@return number PlayerIdentifier
function server.GetPlayerIdentifier(source)
    local xPlayer = server.GetPlayer(source)
    if xPlayer then
        return xPlayer.getIdentifier()
    end
    return nil
end

-- Retrieves the player's name
---@return string|nil
function server.GetPlayerCharacterName(source)
    local xPlayer = server.GetPlayer(source)
    if xPlayer then
        return xPlayer.getName()
    end
    return nil
end

function server.SetPlayerMeta(source, key, value)
    local xPlayer = server.GetPlayer(source)
    if not xPlayer then return false end
    if not xPlayer?.getMeta or not xPlayer?.setMeta then return false end
    if value == nil then
        return xPlayer.clearMeta(key)
    end
    if value == true then
        value = 1
    else
        value = 0
    end
    return xPlayer.setMeta(key, value)
end

function server.GetPlayerMeta(source, key)
    local xPlayer = server.GetPlayer(source)
    if not xPlayer then return false end
    if not xPlayer.getMeta then return false end
    local value = xPlayer.getMeta(key)
    if value == 1 then
        value = true
    else
        value = false
    end
    return value
end
