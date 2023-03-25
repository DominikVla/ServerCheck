const {SlashCommandBuilder} = require('@discordjs/builders');
const util = require('minecraft-server-util');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('status')
    .setDescription('Check server stat.'),
    async execute(interaction, client) {
        const util = require('minecraft-server-util');
            // Make sure this is within an async context
            try {
                const result = await util.status('Hypixel.net');
                // Server is online
                await interaction.reply({content: 'Server Good :thumbsup:'});
            } catch (e) {
                // Server is offline
                await interaction.reply({content: 'Server dead :x:'});
            }
    }
}
