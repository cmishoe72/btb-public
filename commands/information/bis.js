const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed, MessageAttachment } = require('discord.js');

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
			const rangedEmbed = new MessageEmbed()
			.setTitle("Best in slots for ranged jobs")
			.setDescription("Please chose a job")
			.setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/R/laSrEkvlK_7NNbNZ3JErTqzaR8.png")

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
			await interaction.reply({ ephemeral: true, embeds: [rangedEmbed], content: 'Which job?', components: [row] });
		}
		if (interaction.options.getSubcommand() === "melee") {
			const meleeEmbed = new MessageEmbed()
			.setTitle("Best in slots for melee jobs")
			.setDescription("Please chose a job")
			.setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/R/laSrEkvlK_7NNbNZ3JErTqzaR8.png");
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

			await interaction.reply({ ephemeral: true, embeds: [meleeEmbed], content: 'Which job?', components: [row] });
		}
		if (interaction.options.getSubcommand() === "magical") {
			const magicalEmbed = new MessageEmbed()
			.setTitle("Best in slots for magical jobs")
			.setDescription("Please chose a job")
			.setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/R/laSrEkvlK_7NNbNZ3JErTqzaR8.png")
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
			await interaction.reply({ ephemeral: true, embeds: [magicalEmbed], content: 'Which job?', components: [row] });
		}
		if (interaction.options.getSubcommand() === "healer") {
			const healerEmbed = new MessageEmbed()
			.setTitle("Best in slots for healer jobs")
			.setDescription("Please chose a job")
			.setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/e/V5xx3kfnREBO-2xWbTUW2Csy_Q.png")
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
			await interaction.reply({ ephemeral: true, embeds: [healerEmbed], content: 'Which job?', components: [row] });
		}
		if (interaction.options.getSubcommand() === "tank") {
			const tankEmbed = new MessageEmbed()
			.setTitle("Best in slots for tank jobs")
			.setDescription("Please chose a job")
			.setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/d/rFrCBcRe9YrmPvb4fZkuFksSLw.png")
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
			await interaction.reply({ ephemeral: true, embeds: [tankEmbed], content: 'Which job?', components: [row] });
		}

	},
};