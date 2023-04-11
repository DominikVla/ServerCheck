const { SlashCommandBuilder } = require('@discordjs/builders');
const { default: Decimal } = require('decimal.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('calculate')
        .setDescription('Calculates the amount of PP a play will give. (Taken from my Intralism PP BOT)')
        .addStringOption(option =>
            option.setName('score')
                .setDescription("Score of the play done (DO NOT INCLUDE COMMAS)")
                .setRequired(true))
        .addStringOption(option =>
            option.setName('maxscore')
                .setDescription("Highest Score the map can give (DO NOT INCLUDE COMMAS)")
                .setRequired(true))
        .addStringOption(option =>
            option.setName('misses')
                .setDescription("Number of misses")
                .setRequired(true))
        .addStringOption(option =>
            option.setName('accuracy')
                .setDescription("Accuracy of the play (DO NOT INCLUDE PERCENT SYMBOL)")
                .setRequired(true))
        .addStringOption(option =>
            option.setName('maxpoints')
                .setDescription("The highest achievable points")
                .setRequired(true)),

    async execute(interaction, client) {
        const score = interaction.options.getString('score');
        const maxScore = interaction.options.getString('maxscore');
        const miss = interaction.options.getString('misses');
        const accuracy = interaction.options.getString('accuracy');
        const maxPoints = interaction.options.getString('maxpoints');

        const a = Decimal.pow(0.95, miss);

        const scoreTotal = score / maxScore;
        const scoreMiss = scoreTotal * a;
        const scoreMissAcc = scoreMiss * accuracy;
        const calcPt = scoreMissAcc * maxPoints;
        const lowPP = calcPt * 0.08;
        const basePP = lowPP * 2;
        const ppOut = basePP.toFixed(2);

        await interaction.reply({ content: 'PP Value of this play: ' + ppOut });
    }
}
