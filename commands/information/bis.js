const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, CommandInteraction } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bis')
		.setDescription('Choose the job type for the best in slot you want')
		.addSubcommand(subcommand =>
			subcommand
				.setName("ranged")
				.setDescription("gets the buttons for ranged classes")
		)
		.addSubcommand(subcommand =>
			subcommand
				.setName("melee")
				.setDescription("gets the buttons for melee classes")
		)
		.addSubcommand(subcommand =>
			subcommand
				.setName("magical")
				.setDescription("gets the buttons for magical classes")
		)
		.addSubcommand(subcommand =>
			subcommand
				.setName("healer")
				.setDescription("gets the buttons for healer classes")
		)
		.addSubcommand(subcommand =>
			subcommand
				.setName("tank")
				.setDescription("gets the buttons for tank classes")
		),

	async execute(interaction) {
		if (interaction.options.getSubcommand() === "ranged") {
			const row = new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setCustomId('machinist-button')
						.setLabel('MCH')
						.setStyle("DANGER"),
					new MessageButton()
						.setCustomId("dancer-button")
						.setLabel('DNC')
						.setStyle("DANGER"),
					new MessageButton()
						.setCustomId("bard-button")
						.setLabel("BRD")
						.setStyle("DANGER"),
				)
			await interaction.reply({ ephemeral: true, content: 'Which job?', components: [row] });
		}
		if (interaction.options.getSubcommand() === "melee") {
			const row = new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setCustomId('samurai-button')
						.setLabel('SAM')
						.setStyle("DANGER"),
					new MessageButton()
						.setCustomId("dragoon-button")
						.setLabel('DRG')
						.setStyle("DANGER"),
					new MessageButton()
						.setCustomId("monk-button")
						.setLabel("MNK")
						.setStyle("DANGER"),
					new MessageButton()
						.setCustomId("ninja-button")
						.setLabel("NIN")
						.setStyle("DANGER"),
					new MessageButton()
						.setCustomId("reaper-button")
						.setLabel("RPR")
						.setStyle("DANGER"),
				)

			await interaction.reply({ ephemeral: true, content: 'Which job?', components: [row] });
		}
		if (interaction.options.getSubcommand() === "magical") {
			const row = new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setCustomId('summoner-button')
						.setLabel('MCH')
						.setStyle("DANGER"),
					new MessageButton()
						.setCustomId("black-mage-button")
						.setLabel('BLM')
						.setStyle("DANGER"),
					new MessageButton()
						.setCustomId("red-mage-button")
						.setLabel("RDM")
						.setStyle("DANGER"),
				)
			await interaction.reply({ ephemeral: true, content: 'Which job?', components: [row] });
		}
		if (interaction.options.getSubcommand() === "healer") {
			const row = new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setCustomId('sage-button')
						.setLabel('SGE')
						.setStyle('SUCCESS'),
					new MessageButton()
						.setCustomId("astrologian-button")
						.setLabel('AST')
						.setStyle("SUCCESS"),
					new MessageButton()
						.setCustomId("white-mage-button")
						.setLabel("WHM")
						.setStyle("SUCCESS"),
					new MessageButton()
						.setCustomId("scholar-button")
						.setLabel("SCH")
						.setStyle("SUCCESS"),
				)
			await interaction.reply({ ephemeral: true, content: 'Which job?', components: [row] });
		}
		if (interaction.options.getSubcommand() === "tank") {
			const row = new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setCustomId('paladin-button')
						.setLabel('PLD')
						.setStyle("PRIMARY"),
					new MessageButton()
						.setCustomId("warrior-button")
						.setLabel('WAR')
						.setStyle("PRIMARY"),
					new MessageButton()
						.setCustomId("dark-knight-button")
						.setLabel("DRK")
						.setStyle("PRIMARY"),
					new MessageButton()
						.setCustomId("gunbreaker-button")
						.setLabel("GNB")
						.setStyle("PRIMARY"),
				)
			await interaction.reply({ ephemeral: true, content: 'Which job?', components: [row] });
		}

	},
};