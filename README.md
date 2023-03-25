# ServerCheck
 Checks the status of a Minecraft (Java) server. This Bot is still being developed, more features to come.
# Required Install Commands
- npm install discord.js   |    https://discord.js.org/#/ (Should install the latest version (V14 25/03/23))
- npm install minecraft-server-util    |    https://passthemayo.gitbook.io/minecraft-server-util/
- https://nodejs.org/en Node.JS Version that's recommended for most users
# Commands
- /ping  - checks the clients ping and API latency
- /stats - checks the status of a minecraft server (Defaulted to Hypixel.net in commands/community/servcheck.js line 12)
- /hello - Bot says hi back, simply to check if the bot is functioning
# Important
For the bot to function you need to be able to obtain your application Token, Client ID and Guild Id (Server ID)
- Application Token goes into the .env file || Guide to get application token: https://www.writebots.com/discord-bot-token/
- Client and Guild ID go into functions/handelCommands.js on lines 5 & 6 ||
To get the IDs do the following:
1. Make sure Developer mode is on (User Settings > Advanced)
2. Go onto a server with the Bot, right click the bot and press copy ID. This gives the Client ID.
3. Right click the server you're currently in and press copy ID. This is the Guild ID.

# Useful links
- https://discord.com/developers/docs/intro (Discord's documentation)
- https://passthemayo.gitbook.io/minecraft-server-util/ (Minecraft server library documentaion)
- https://www.youtube.com/@MrJAwesomeYT (Very good tutorials, credits to him for the Slash Command Package)
