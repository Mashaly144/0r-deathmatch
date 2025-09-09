--[[ All settings of the script are found and edited in this file. ]]

Config = {}

--[[ Commands and Settings ]]
Config.Commands = {
    --[[ You can trigger the menu with a command. ]]
    OpenMenu = {
        active = true,
        command = 'deathmatch',
    },
    --[[ Command the lobby leader can use to end the match ]]
    EndMatch = {
        active = true,
        command = 'endmatch',
    },
}

Config.Game = {
    --[[ Playable Weapons ]]
    weapons = {
        'weapon_assaultrifle',
        'weapon_pistol',
        'weapon_sniperrifle',
        'weapon_pumpshotgun',
        'weapon_revolver',
        'weapon_machete',
    },
    --[[ After how many seconds should the dead player be resurrected ]]
    reviveCountdown = 9,
    --[[ Game Times ]]
    gameTimes = { 5, 10, 15 },
    --[[ Start Match Count Down ]]
    startCountDown = 10, -- seconds
    --[[ Maps ]]
    maps = {
        [1] = {
            image = 'area_1.png', -- [[ Folder: ui/build/images/maps ]]
            name = 'Area #1 [3v3]',
            redTeamCoords = {
                vector4(-2013.8862, 7724.6826, 466.3168, 77.8235),
                vector4(-2013.5099, 7729.0649, 466.3168, 95.9858),
                vector4(-2013.0022, 7735.7944, 466.3168, 109.0460),
            },
            blueTeamCoords = {
                vector4(-2034.5636, 7722.5654, 466.3174, 278.4257),
                vector4(-2033.9330, 7728.5327, 466.3174, 273.6804),
                vector4(-2033.1736, 7732.6724, 466.3174, 267.6096),
            },
        },
        [2] = {
            image = 'area_2.png', -- [[ Folder: ui/build/images/maps ]]
            name = 'Area #2 [MED]',
            redTeamCoords = {
                vector4(-2504.7585, 7682.7207, 465.7741, 4.5714),
                vector4(-2515.1670, 7683.2627, 465.7741, 24.9372),
                vector4(-2525.2581, 7683.3945, 465.7741, 43.4887),
                vector4(-2534.0037, 7682.2603, 465.7742, 1.8364),
                vector4(-2538.2581, 7682.7876, 465.7742, 1.0118),
                vector4(-2544.6470, 7683.2617, 465.7742, 6.0758),
                vector4(-2553.2896, 7682.3774, 465.7742, 350.1707),
            },
            blueTeamCoords = {
                vector4(-2553.0554, 7742.2593, 465.7678, 183.5590),
                vector4(-2542.3618, 7742.0503, 465.7741, 182.4290),
                vector4(-2532.3110, 7741.6021, 465.7741, 180.6794),
                vector4(-2523.3162, 7742.0576, 465.7741, 199.9261),
                vector4(-2520.1665, 7742.4707, 465.7741, 180.1655),
                vector4(-2513.4258, 7742.0024, 465.7742, 181.4646),
                vector4(-2503.8989, 7742.5137, 465.7742, 169.3104),
            },
        },
        [3] = {
            image = 'area_3.png', -- [[ Folder: ui/build/images/maps ]]
            name = 'Area #3 [BIG]',
            redTeamCoords = {
                vector4(-3527.8542, 7672.7749, 472.2750, 118.6315),
                vector4(-3527.4009, 7665.6953, 472.2750, 91.5385),
                vector4(-3532.4829, 7652.5532, 472.2748, 65.8789),
                vector4(-3545.4080, 7645.2412, 472.2748, 58.1302),
                vector4(-3541.6636, 7689.4111, 472.2743, 116.2163),
                vector4(-3547.7507, 7671.8716, 468.9019, 120.3500),
            },
            blueTeamCoords = {
                vector4(-3619.0618, 7665.0513, 472.2743, 267.7292),
                vector4(-3613.4092, 7682.6978, 472.2743, 261.9941),
                vector4(-3604.0398, 7689.1333, 472.2744, 253.8429),
                vector4(-3603.7134, 7646.5542, 472.2743, 319.6092),
                vector4(-3599.0256, 7663.5469, 468.9039, 279.9900),
            },
        },
    },
}

--[[ You can also define a Zone where the menu can be accessed. This way they have to go there to access it. ]]
Config.DeathMatchMenuZone = {
    active = true,
    coords = vec3(135.0139, 6382.8179, 31.3794),
    blip = {
        active = true,
        sprite = 160,
        scale = 0.7,
        colour = 5,
        name = 'DeathMatch Arena',
    },
}

--[[ DEBUG ]]
Config.debug = true
