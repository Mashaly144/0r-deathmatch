-- Is Player in the game
exports('inGame', function(source)
    local state = lib.callback.await(_e('client:IsPlayerInGame'), source)
    return state
end)
