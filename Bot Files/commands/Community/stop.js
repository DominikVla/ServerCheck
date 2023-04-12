const { SlashCommandBuilder } = require('@discordjs/builders');
const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus, VoiceConnectionStatus } = require('@discordjs/voice');
const ytdl = require('ytdl-core');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('stop')
    .setDescription('Disconnect the Bot from the call.'),
    async execute(interaction, client) {
        const voiceChannel = interaction.member.voice.channel;

        const connection = joinVoiceChannel({
            channelId: voiceChannel.id,
            guildId: interaction.guildId,
            adapterCreator: interaction.guild.voiceAdapterCreator
          });

        connection.destroy();

        await interaction.reply({content: 'Left the VC'});
    }
}