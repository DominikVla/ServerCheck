const { SlashCommandBuilder } = require('@discordjs/builders');
const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus, VoiceConnectionStatus } = require('@discordjs/voice');
const ytdl = require('ytdl-core');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('play')
    .setDescription('Play audio from YouTube in your voice channel')
    .addStringOption(option =>
      option.setName('url')
        .setDescription('YouTube URL. VIDEO MUST BE FROM 1 HOUR - 9 MONTHS(?) AGO')
        .setRequired(true)),

  async execute(interaction, client) {
    const voiceChannel = interaction.member.voice.channel;
    if (!voiceChannel) {
      await interaction.reply('You need to be in a voice channel to use this command.');
      return;
    }

    const connection = joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: interaction.guildId,
      adapterCreator: interaction.guild.voiceAdapterCreator
    });

    const audioPlayer = createAudioPlayer();

    connection.subscribe(audioPlayer);

    const url = interaction.options.getString('url');
    const audioResource = createAudioResource(ytdl(url));

    audioPlayer.play(audioResource);

    audioPlayer.on(AudioPlayerStatus.Idle, () => {
      connection.destroy();
    });

    await interaction.reply('Currently Playing:' + url);
  }
};