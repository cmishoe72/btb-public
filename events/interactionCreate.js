module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (interaction.isCommand()) {

            const command = client.commands.get(interaction.commandName);

            if (!command) return;

            try {
                await command.execute(interaction, client);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        } else if (interaction.isButton()) {
            if (interaction.customId.includes('-button')) {
                if (interaction.customId.includes('machinist')) {
                    await interaction.reply({ ephemeral: true, content: "https://etro.gg/gearset/6b4b1ba5-a821-41a0-b070-b1f50e986f85"});
                } else if (interaction.customId.includes('dancer')) {
                    await interaction.reply({ ephemeral: true, content: "https://etro.gg/gearset/fd333e44-0f90-42a6-a070-044b332bb54e"});
                } else if (interaction.customId.includes('bard')) {
                    await interaction.reply({ ephemeral: true, content: "https://etro.gg/gearset/cec981af-25c7-4ffb-905e-3024411b797a"});
                }
            }
        }
    }

}