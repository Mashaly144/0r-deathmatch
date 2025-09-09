local Inventory = {}

function Inventory.Disabled(state)
    if shared.IsResourceStart('qb-inventory') then
        LocalPlayer.state:set('inv_busy', state, true)
    elseif shared.IsResourceStart('ox_inventory') then
        -- LocalPlayer.state.invBusy = state
    elseif shared.IsResourceStart('qs-inventory') then
        exports['qs-inventory']:setInventoryDisabled(state)
    else
        -- # Other resources
    end
    return true
end

function Inventory.SetWeaponWheelState(state)
    if shared.IsResourceStart('ox_inventory') then
        exports.ox_inventory:weaponWheel(state)
    else
        -- # Other resources
    end
    return true
end

return Inventory
