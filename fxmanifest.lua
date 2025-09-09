fx_version 'cerulean'
lua54 'yes'
game 'gta5'
name '0r-deathmatch'
author '0Resmon | aliko.'
version '1.0.1'
description '0Resmon DeathMatch Arena Script'

work_with 'ESX/QB/QBX latest version'

shared_scripts {
	'@ox_lib/init.lua',
	'config.lua',
	'shared/init.lua',
}

files {
	'locales/*.json',
	'modules/**/client.lua',
	'modules/bridge/**/client.lua',
	'ui/build/index.html',
	'ui/build/**/*',
}

client_script 'client.lua'

server_scripts {
	'@oxmysql/lib/MySQL.lua',
	'server.lua'
}

ui_page 'ui/build/index.html'

dependencies { 'ox_lib' }

escrow_ignore {
	'config.lua',
	'shared/init.lua',
	'modules/**/*.lua',
	'client.lua',
	'server.lua'
}

dependency '/assetpacks'