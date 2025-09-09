local Ambulance = {}

function Ambulance.RevivePlayer()
    if shared.framework == 'esx' then
        TriggerEvent('esx_ambulancejob:revive')
    elseif shared.framework == 'qb' then
        TriggerEvent('hospital:client:Revive')
    elseif shared.framework == 'qbx' then
        TriggerEvent('qbx_medical:client:playerRevived')
    else
        TriggerEvent('hospital:client:Revive')
    end
end

return Ambulance
