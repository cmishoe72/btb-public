module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (interaction.isCommand()) {

            const command = client.commands.get(interaction.commandName);

            if (!command) return;

            try {
                await command.execute(interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        } else if (interaction.isButton()) {
            if (interaction.customId.includes('-button')) {
                if (interaction.customId.includes('dps')) {
                    await interaction.reply({ content: "Warrior"});
                } else if (interaction.customId.includes('healer')) {
                    await interaction.reply({ content: "Warrior"});
                } else if (interaction.customId.includes('tank')) {
                    await interaction.reply({ content: "Warrior"});
                }
            }
        }
    }

}