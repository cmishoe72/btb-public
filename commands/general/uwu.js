const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('uwu')
		.setDescription('makes things uwu'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};