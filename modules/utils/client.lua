---
--[[ Contains client-side helper functions. ]]
---

local Utils = {}

--- Custom notifications with options.
---@param title string
---@param type 'inform'|'error'|'success'|'warning'
---@param duration number
---@param description string
function Utils.Notify(title, type, duration, description)
    lib.notify({
        title = title,
        description = description,
        duration = duration,
        position = 'center-right',
        type = type,
    })
end

function Utils.DrawMarker(type, coords, sizeType)
    local size = vec3(0.15, 0.1, 0.08)
    if sizeType == 2 then
        size = vec3(0.25, 0.2, 0.15)
    elseif sizeType == 3 then
        size = vec3(0.5, 0.4, 0.25)
    end

    DrawMarker(type,
        coords.x, coords.y, coords.z - 0.5,
        0.0, 0.0, 0.0,
        0.0, 0.0, 0.0,
        size,
        255, 255, 255, 255,
        false, false, false, true, false, false, false)
end

--[[ Show the TextUI window ]]
function Utils.ShowTextUI(text, options)
    lib.showTextUI(text, options)
end

--[[ Hide the TextUI window ]]
function Utils.HideTextUI()
    lib.hideTextUI()
end

return Utils
