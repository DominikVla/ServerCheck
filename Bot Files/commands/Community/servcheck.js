const { SlashCommandBuilder } = require('@discordjs/builders');
const util = require('minecraft-server-util');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('status')
        .setDescription('Check server status.'),

    async execute(interaction, client) {
        try {
            const result = await util.status('Hypixel.net');
            // Server is online
            await interaction.reply({ content: 'Server Good :thumbsup:' });
        } catch (e) {
            // Server is offline
            await interaction.reply({ content: 'Server dead :x:' });
        }
    }
}
