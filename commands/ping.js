
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu, Message } = require('discord.js');
const {Client, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(message, client, args) {
		const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions([
						{
							label: 'Select me',
							description: 'This is a description',
							value: 'first_option',
						},
						{
							label: 'You can select me too',
							description: 'This is also a description',
							value: 'second_option',
						},
					]),
			);
		
		const embed = new MessageEmbed().setTitle("Choose an option!");
		const filter = (interaction) => interaction.isSelectMenu() && interaction.user.id === message.channel.id;
		const collector = message.channel.createMessageComponentCollector({
			filter,
			max: "2",
		});
		
		collector.on("collect:", async (collected) => {
			const value = collected.values[0];
			console.log(value);
			collected.deferUpdate();
			collected.channel.send({ content: value });
		})
		message.channel.send({ embeds: [embed], components: [row] });
	},
};
