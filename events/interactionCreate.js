const { MessageEmbed } = require('discord.js');
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
                    await interaction.reply({ ephemeral: true, content: "https://etro.gg/gearset/6b4b1ba5-a821-41a0-b070-b1f50e986f85" });
                } else if (interaction.customId.includes('dancer')) {
                    await interaction.reply({ ephemeral: true, content: "https://etro.gg/gearset/fd333e44-0f90-42a6-a070-044b332bb54e" });
                } else if (interaction.customId.includes('bard')) {
                    await interaction.reply({ ephemeral: true, content: "https://etro.gg/gearset/cec981af-25c7-4ffb-905e-3024411b797a" });
                } else if (interaction.customId.includes('dark-knight')) {
                    // All should look like dark knights
                    const drkEmbed = new MessageEmbed()
                    .setTitle("Best in slot(s)")
                    .setDescription("Dark Knight")
                    .setColor("#344494")
                    .setDescription("2.43: https://etro.gg/gearset/dda8aef5-41e4-40b6-813c-df306e1f1cee \n2.40: https://etro.gg/gearset/61e6c1e6-83a9-4d3b-9eb9-17f22be19bd9 \n2.45: https://etro.gg/gearset/038bd13b-f408-4cb2-acb0-00ac33ccfe64")
                    .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/9/5JT3hJnBNPZSLAijAF9u7zrueQ.png")
                    await interaction.reply({ ephemeral: true, embeds: [drkEmbed]});
                } else if (interaction.customId.includes('sage')) {
                    await interaction.reply({ ephemeral: true, content: "Crafted ring: https://etro.gg/gearset/32c72ae2-3c53-49cf-ac02-b989c693d8b5 \nTome ring: https://etro.gg/gearset/3c7d9741-0e74-41d7-9ec4-1b2e7c1673a5 \nHeavy Piety: https://etro.gg/gearset/b9611dfd-2ea4-4068-9deb-fef7f3d7ed01 \nBase speed: https://etro.gg/gearset/fac7475e-7580-4a93-9f19-8a76b7723857" });
                }

            }
        }
    }

}