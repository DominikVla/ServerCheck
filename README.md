# ServerCheck
 Checks the status of a Minecraft (Java) server. This Bot is still being developed, more features to come.
# Required Install Commands
**[Node.JS Version that's recommended for most users](https://nodejs.org/en)**

[Discord.JS](https://discord.js.org/)
```
npm install discord.js
```
[MCServerUtil](https://passthemayo.gitbook.io/minecraft-server-util/)
```
npm install minecraft-server-util
```
[Decimal.JS](https://www.npmjs.com/package/decimal.js?activeTab=readme)
```
npm install decimals.js
```
[Discord.JS/Voice](https://www.npmjs.com/package/@discordjs/voice)
```
npm i @discordjs/voice
```
[YTDL-Core](https://www.npmjs.com/package/ytdl-core)
```
npm i ytdl-core
```
# Commands
- /ping  - checks the clients ping and API latency
- /stats - checks the status of a minecraft server (Defaulted to Hypixel.net in commands/community/servcheck.js line 12)
- /hello - Bot says hi back, simply to check if the bot is functioning
- /calculate [score:][maxscore][misses:][accuracy:][maxpoints:]
- /play [url]
- /stop
# Important
For the bot to function you need to be able to obtain your application Token, Client ID and Guild Id (Server ID)
- Application Token goes into the .env file || Guide to get application token: https://www.writebots.com/discord-bot-token/
- Client and Guild ID go into functions/handelCommands.js on lines 5 & 6 ||
To get the IDs do the following:
1. Make sure Developer mode is on (User Settings > Advanced)
2. Go onto a server with the Bot, right click the bot and press copy ID. This gives the Client ID.
3. Right click the server you're currently in and press copy ID. This is the Guild ID.

- Reggarding hosting please keep in mind that the BOT need at a minimum 100MB of RAM. Passively the bot should only be using ~25% but  usage goes to 70%-95% when using the music command. Also note that the play command is still under development and may not function correctly.
# Useful links
- https://discord.com/developers/docs/intro (Discord's documentation)
- https://passthemayo.gitbook.io/minecraft-server-util/ (Minecraft server library documentaion)
- https://www.youtube.com/@MrJAwesomeYT (Very good tutorials, credits to him for the Slash Command Package)
- https://mikemcl.github.io/decimal.js/ (Decimal.JS documentation)
