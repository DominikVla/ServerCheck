const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions, MessageManager, Embed, Collection } = require(`discord.js`);
const fs = require('fs');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] }); 

client.commands = new Collection();

client.on("ready", () => {
    const activities = [
        //'Development in progress, some features may malfunction'
        'Playing on LegacyRock',
        'I see you O.O'
    ];
    setInterval(() => {
        const status = activities[Math.floor(Math.random() * activities.length)];
        client.user.setPresence({activities: [{name: `${status}`}]});
    }, 5000);
    client.user.setPresence({
        status: 'online'
    });
})

require('dotenv').config();

const functions = fs.readdirSync("./functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./commands");

(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./events");
    client.handleCommands(commandFolders, "./commands");
    client.login(process.env.token)
})();

