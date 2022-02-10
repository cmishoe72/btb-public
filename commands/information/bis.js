const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bis')
		.setDescription('Choose the job type for the best in slot you want'),
	async execute(interaction, client) {
		const row = new MessageActionRow()
        .addComponents(
        new MessageButton()
            .setCustomId('dps-button')
            .setLabel('DPS')
            .setStyle("DANGER"),
        new MessageButton()
            .setCustomId("healer-button")
            .setLabel('HEALER')
            .setStyle("SUCCESS"),
        new MessageButton()
            .setCustomId("tank-button")
            .setLabel("TANK")
            .setStyle("PRIMARY"),

            
        );

        await interaction.reply({ ephemeral: true, content: 'Which Job Type?', components: [row]});
	},
};