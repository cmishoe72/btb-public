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
            // RANGED
            if (interaction.customId.includes('-button')) {
                if (interaction.customId.includes('machinist')) {
                    const mchEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Machinist")
                        .setColor("#813b3c")
                        .setDescription("2.50: https://etro.gg/gearset/6b4b1ba5-a821-41a0-b070-b1f50e986f85")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/2/oHLJxTt_OLDK_eQkRTBVNwwxeE.png")
                    await interaction.reply({ ephemeral: true, embeds: [mchEmbed] });
                } else if (interaction.customId.includes('dancer')) {
                    const dncEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Dancer")
                        .setColor("#813b3c")
                        .setDescription("2.47: https://etro.gg/gearset/fd333e44-0f90-42a6-a070-044b332bb54e \n2.50: https://etro.gg/gearset/ae461afa-fc40-46a1-b713-e17fb9eee292 \n2.49: https://etro.gg/gearset/eb9c642d-fbaf-4381-95ce-988f8b9ff621 \n2.48: https://etro.gg/gearset/fc9341ef-6acf-4389-a0b7-1015c9f46ffa")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/0/ZzzbixB1HHW9FaxNXdfY7Y7lvw.png")
                    await interaction.reply({ ephemeral: true, embeds: [dncEmbed] });
                } else if (interaction.customId.includes('bard')) {
                    const brdEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Bard")
                        .setColor("#813b3c")
                        .setDescription("2.48: https://etro.gg/gearset/cec981af-25c7-4ffb-905e-3024411b797a")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/b/d7BM1x8OZRZU-9fTk-D7g1t2oc.png")
                    await interaction.reply({ ephemeral: true, embeds: [brdEmbed] });
                }
                //MELEE
                else if (interaction.customId.includes('samurai')) {
                    const brdEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Samurai")
                        .setColor("#813b3c")
                        .setDescription("2.14: https://etro.gg/gearset/3a7c7f45-b715-465d-a377-db458045506a \n2.07: https://etro.gg/gearset/17d99be3-021c-4d6c-a9e3-0504e62c8c1f \n2.00: https://etro.gg/gearset/84c1f493-7f65-4d9e-bd3c-34965c75cf41")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/J/Ra2GV79gVQhy6SwCrU19boTghc.png")
                    await interaction.reply({ ephemeral: true, embeds: [brdEmbed] });
                }
                else if (interaction.customId.includes('dragoon')) {
                    const brdEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Dragoon")
                        .setColor("#813b3c")
                        .setDescription("2.5: https://etro.gg/gearset/8bdd42db-a318-41a0-8903-14efa5e0774b")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/1/zWRkXGJIJhN7WHGGv1gVscRxmA.png")
                    await interaction.reply({ ephemeral: true, embeds: [brdEmbed] });
                }
                else if (interaction.customId.includes('monk')) {
                    const brdEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Monk")
                        .setColor("#813b3c")
                        .setDescription("1.94: https://i.imgur.com/LEOTYOw.png \n1.93: https://i.imgur.com/aqhWbOc.png")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png")
                    await interaction.reply({ ephemeral: true, embeds: [brdEmbed] });
                }
                else if (interaction.customId.includes('ninja')) {
                    const brdEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Ninja")
                        .setColor("#813b3c")
                        .setDescription("2.12: https://etro.gg/gearset/b9876a4d-aba9-48f0-9c03-cb542af46a29")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/N/EXvdQYvr1Rn4En8AKssbVwwcac.png")
                    await interaction.reply({ ephemeral: true, embeds: [brdEmbed] });
                }
                else if (interaction.customId.includes('reaper')) {
                    const brdEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Reaper")
                        .setColor("#813b3c")
                        .setDescription("2.5: https://etro.gg/gearset/7b72fc2a-f07e-4df9-9a23-05dfa2c46619 \n2.49: https://etro.gg/gearset/b301e789-96da-42f2-9628-95f68345e35b \n2.48: https://etro.gg/gearset/806fb1a8-ce8f-4a09-963f-8f7ccd1cb485")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/p/y8GHAXX4qhY7D-yqnCqtEPkjoo.png")
                    await interaction.reply({ ephemeral: true, embeds: [brdEmbed] });
                }

                //MAGICAL

                else if (interaction.customId.includes('summoner')) {
                    const brdEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Summoner")
                        .setColor("#813b3c")
                        .setDescription("2.48: https://etro.gg/gearset/cec981af-25c7-4ffb-905e-3024411b797a")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png")
                    await interaction.reply({ ephemeral: true, embeds: [brdEmbed] });
                }
                else if (interaction.customId.includes('black-mage')) {
                    const brdEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Black Mage")
                        .setColor("#813b3c")
                        .setDescription("2.48: https://etro.gg/gearset/cec981af-25c7-4ffb-905e-3024411b797a")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/A/7JuT00VSwaFqTfcTYUCUnGPFQE.png")
                    await interaction.reply({ ephemeral: true, embeds: [brdEmbed] });
                }
                else if (interaction.customId.includes('red-mage')) {
                    const brdEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Red Mage")
                        .setColor("#813b3c")
                        .setDescription("2.48: https://etro.gg/gearset/cec981af-25c7-4ffb-905e-3024411b797a")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/C/NRnqJxzRtbDKR1ZHzxazWBBR2Y.png")
                    await interaction.reply({ ephemeral: true, embeds: [brdEmbed] });
                }


                // HEALERS

                else if (interaction.customId.includes('sage')) {
                    const brdEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Sage")
                        .setColor("#467737")
                        .setDescription("2.48: https://etro.gg/gearset/cec981af-25c7-4ffb-905e-3024411b797a")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png")
                    await interaction.reply({ ephemeral: true, embeds: [brdEmbed] });
                }
                else if (interaction.customId.includes('astrologian')) {
                    const brdEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Astrologian")
                        .setColor("#467737")
                        .setDescription("2.48: https://etro.gg/gearset/cec981af-25c7-4ffb-905e-3024411b797a")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/E/g7JY4S1D-9S26VarEuIkPGIrFM.png")
                    await interaction.reply({ ephemeral: true, embeds: [brdEmbed] });
                }
                else if (interaction.customId.includes('white-mage')) {
                    const brdEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("White Mage")
                        .setColor("#467737")
                        .setDescription("2.48: https://etro.gg/gearset/cec981af-25c7-4ffb-905e-3024411b797a")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/G/Na619RGtVtbEvNn1vyFoSlvZ84.png")
                    await interaction.reply({ ephemeral: true, embeds: [brdEmbed] });
                }
                else if (interaction.customId.includes('scholar')) {
                    const brdEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Scholar")
                        .setColor("#467737")
                        .setDescription("2.48: https://etro.gg/gearset/cec981af-25c7-4ffb-905e-3024411b797a")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/s/2r8fm3U0Io7Pw1XT1tvnjPthp4.png")
                    await interaction.reply({ ephemeral: true, embeds: [brdEmbed] });
                }

                // TANKS
                else if (interaction.customId.includes('paladin')) {

                    const drkEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Paladin")
                        .setColor("#485ecf")
                        .setDescription("2.43: https://etro.gg/gearset/dda8aef5-41e4-40b6-813c-df306e1f1cee \n2.40: https://etro.gg/gearset/61e6c1e6-83a9-4d3b-9eb9-17f22be19bd9 \n2.45: https://etro.gg/gearset/038bd13b-f408-4cb2-acb0-00ac33ccfe64")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/V/NUXU4h6iXzF8HS4BxHKYf7vOa0.png")
                    await interaction.reply({ ephemeral: true, embeds: [drkEmbed] });
                }
                else if (interaction.customId.includes('warrior')) {

                    const drkEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Warrior")
                        .setColor("#485ecf")
                        .setDescription("2.43: https://etro.gg/gearset/dda8aef5-41e4-40b6-813c-df306e1f1cee \n2.40: https://etro.gg/gearset/61e6c1e6-83a9-4d3b-9eb9-17f22be19bd9 \n2.45: https://etro.gg/gearset/038bd13b-f408-4cb2-acb0-00ac33ccfe64")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/0/U3f8Q98TbAeGvg_vXiHGOaa2d4.png")
                    await interaction.reply({ ephemeral: true, embeds: [drkEmbed] });
                }
                else if (interaction.customId.includes('dark-knight')) {

                    const drkEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Dark Knight")
                        .setColor("#485ecf")
                        .setDescription("2.43: https://etro.gg/gearset/dda8aef5-41e4-40b6-813c-df306e1f1cee \n2.40: https://etro.gg/gearset/61e6c1e6-83a9-4d3b-9eb9-17f22be19bd9 \n2.45: https://etro.gg/gearset/038bd13b-f408-4cb2-acb0-00ac33ccfe64")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/9/5JT3hJnBNPZSLAijAF9u7zrueQ.png")
                    await interaction.reply({ ephemeral: true, embeds: [drkEmbed] });
                }
                else if (interaction.customId.includes('gunbreaker')) {

                    const drkEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Gunbreaker")
                        .setColor("#485ecf")
                        .setDescription("2.43: https://etro.gg/gearset/dda8aef5-41e4-40b6-813c-df306e1f1cee \n2.40: https://etro.gg/gearset/61e6c1e6-83a9-4d3b-9eb9-17f22be19bd9 \n2.45: https://etro.gg/gearset/038bd13b-f408-4cb2-acb0-00ac33ccfe64")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/8/fc5PYpEFGrg4qPYDq_YBbCy1X0.png")
                    await interaction.reply({ ephemeral: true, embeds: [drkEmbed] });
                }
            }
        }
    }
}