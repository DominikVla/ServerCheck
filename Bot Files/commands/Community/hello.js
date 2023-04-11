const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('hello')
    .setDescription('Say hi to the bot.'),
    async execute(interaction, client) {
        await interaction.reply({content: 'Ello :wave:'});
    }
}
