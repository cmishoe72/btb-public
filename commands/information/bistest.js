const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bis')
		.setDescription('Choose the job type for the best in slot you want')
        .addSubcommand(subcommand => 
            subcommand),
		
async execute(interaction) {
        await interaction.reply({ ephemeral: true, content: 'Which Job Type?', components: [row]});

	},
};