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
                    const samEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Samurai")
                        .setColor("#813b3c")
                        .setDescription("2.14: https://etro.gg/gearset/3a7c7f45-b715-465d-a377-db458045506a \n2.07: https://etro.gg/gearset/17d99be3-021c-4d6c-a9e3-0504e62c8c1f \n2.00: https://etro.gg/gearset/84c1f493-7f65-4d9e-bd3c-34965c75cf41")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/J/Ra2GV79gVQhy6SwCrU19boTghc.png")
                    await interaction.reply({ ephemeral: true, embeds: [samEmbed] });
                }
                else if (interaction.customId.includes('dragoon')) {
                    const drgEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Dragoon")
                        .setColor("#813b3c")
                        .setDescription("2.50: https://etro.gg/gearset/8bdd42db-a318-41a0-8903-14efa5e0774b")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/1/zWRkXGJIJhN7WHGGv1gVscRxmA.png")
                    await interaction.reply({ ephemeral: true, embeds: [drgEmbed] });
                }
                else if (interaction.customId.includes('monk')) {
                    const mnkEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Monk")
                        .setColor("#813b3c")
                        .setDescription("1.94: https://i.imgur.com/LEOTYOw.png \n1.93: https://i.imgur.com/aqhWbOc.png")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png")
                    await interaction.reply({ ephemeral: true, embeds: [mnkEmbed] });
                }
                else if (interaction.customId.includes('ninja')) {
                    const ninEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Ninja")
                        .setColor("#813b3c")
                        .setDescription("2.12: https://etro.gg/gearset/b9876a4d-aba9-48f0-9c03-cb542af46a29")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/N/EXvdQYvr1Rn4En8AKssbVwwcac.png")
                    await interaction.reply({ ephemeral: true, embeds: [ninEmbed] });
                }
                else if (interaction.customId.includes('reaper')) {
                    const rprEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Reaper")
                        .setColor("#813b3c")
                        .setDescription("2.50: https://etro.gg/gearset/7b72fc2a-f07e-4df9-9a23-05dfa2c46619 \n2.49: https://etro.gg/gearset/b301e789-96da-42f2-9628-95f68345e35b \n2.48: https://etro.gg/gearset/806fb1a8-ce8f-4a09-963f-8f7ccd1cb485")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/p/y8GHAXX4qhY7D-yqnCqtEPkjoo.png")
                    await interaction.reply({ ephemeral: true, embeds: [rprEmbed] });
                }

                //MAGICAL

                else if (interaction.customId.includes('summoner')) {
                    const smnEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Summoner")
                        .setColor("#813b3c")
                        .setDescription("2.46: https://etro.gg/gearset/840a5088-23fa-49c5-a12a-3731ca55b4a6  \n2.48:  https://etro.gg/gearset/79f43ffa-6b37-417c-bc24-8b36ea303ee8 \n2.20:  https://etro.gg/gearset/0dc3c04b-07bd-43c5-b07d-e196e93aa29f \n2.25: https://etro.gg/gearset/dd37ae1d-6341-4fd0-bc46-d406db34562d")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png")
                    await interaction.reply({ ephemeral: true, embeds: [smnEmbed] });
                }
                else if (interaction.customId.includes('black-mage')) {
                    const blmEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Black Mage")
                        .setColor("#813b3c")
                        .setDescription("2.19: https://etro.gg/gearset/327d090b-2d5a-4c3c-9eb9-8fd42342cce3 \n2.33: https://etro.gg/gearset/3be02273-b36d-4297-9f28-69d40641a64b")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/A/7JuT00VSwaFqTfcTYUCUnGPFQE.png")
                    await interaction.reply({ ephemeral: true, embeds: [blmEmbed] });
                }
                else if (interaction.customId.includes('red-mage')) {
                    const rdmEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Red Mage")
                        .setColor("#813b3c")
                        .setDescription("2.48: https://etro.gg/gearset/80fdec19-1109-4ca2-8172-53d4dda44144 \n2.50: https://etro.gg/gearset/8c456a46-f3cb-4a23-9771-9f267892bcc0")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/C/NRnqJxzRtbDKR1ZHzxazWBBR2Y.png")
                    await interaction.reply({ ephemeral: true, embeds: [rdmEmbed] });
                }


                // HEALERS

                else if (interaction.customId.includes('sage')) {
                    const sgeEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Sage")
                        .setColor("#467737")
                        .setDescription("2.48: https://etro.gg/gearset/b9611dfd-2ea4-4068-9deb-fef7f3d7ed01 \n2.50: https://etro.gg/gearset/fac7475e-7580-4a93-9f19-8a76b7723857 \n2.45 Tome ring: https://etro.gg/gearset/3c7d9741-0e74-41d7-9ec4-1b2e7c1673a5 \n2.45 Crafted ring: https://etro.gg/gearset/32c72ae2-3c53-49cf-ac02-b989c693d8b5")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png")
                    await interaction.reply({ ephemeral: true, embeds: [sgeEmbed] });
                }
                else if (interaction.customId.includes('astrologian')) {
                    const astEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Astrologian")
                        .setColor("#467737")
                        .setDescription("2.32: https://etro.gg/gearset/88647808-8a28-477b-b285-687bdcbff2d4 \n2.36: https://etro.gg/gearset/90d1ba33-8293-4474-ae98-c03c20e1d594 \n2.44: https://etro.gg/gearset/f7f17b16-822d-461a-a275-e50a727810fd ")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/E/g7JY4S1D-9S26VarEuIkPGIrFM.png")
                    await interaction.reply({ ephemeral: true, embeds: [astEmbed] });
                }
                else if (interaction.customId.includes('white-mage')) {
                    const whmEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("White Mage")
                        .setColor("#467737")
                        .setDescription("2.50: https://etro.gg/gearset/d40ebdcf-49df-4518-a91d-9ccad5718a0b \n2.48: https://etro.gg/gearset/e78a29e3-1dcf-4e53-bbcf-234f33b2c831 \n2.45: https://etro.gg/gearset/d483c05e-a2ef-4fe0-906f-b883566586af")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/G/Na619RGtVtbEvNn1vyFoSlvZ84.png")
                    await interaction.reply({ ephemeral: true, embeds: [whmEmbed] });
                }
                else if (interaction.customId.includes('scholar')) {
                    const schEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Scholar")
                        .setColor("#467737")
                        .setDescription("2.50: https://etro.gg/gearset/30122448-70c8-421c-bd8c-820e2905858b \n2.41 Lo Pi: https://etro.gg/gearset/f1802c19-d766-40f0-b781-f5b965cb964e \n2.40 Mon Pi: https://etro.gg/gearset/ff3ffc7a-e28c-45bf-a310-a8d8496f8ebf \n2.32: https://etro.gg/gearset/7942af0b-011a-4719-85e9-e5f64d6c07f5")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/s/2r8fm3U0Io7Pw1XT1tvnjPthp4.png")
                    await interaction.reply({ ephemeral: true, embeds: [schEmbed] });
                }

                // TANKS
                else if (interaction.customId.includes('paladin')) {
                    const pldEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Paladin")
                        .setColor("#485ecf")
                        .setDescription("2.45: https://etro.gg/gearset/38fe3778-f2c1-4300-99e4-b58a0445e969 \n2.44: https://etro.gg/gearset/8cbbfbed-e2da-4866-8873-ffba3276b682 \n2.42: https://etro.gg/gearset/bb893548-09aa-4a75-bb2f-90971bdcab38 \n2.40: https://etro.gg/gearset/ca8e2ea6-2e6a-4e69-93b0-711a51db0a27")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/V/NUXU4h6iXzF8HS4BxHKYf7vOa0.png")
                    await interaction.reply({ ephemeral: true, embeds: [pldEmbed] });
                }
                else if (interaction.customId.includes('warrior')) {
                    const warEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Warrior")
                        .setColor("#485ecf")
                        .setDescription("2.40: https://etro.gg/gearset/d6944631-b67f-468f-aca8-7d28d3187f6a \n2.46: https://etro.gg/gearset/6d0d2d4d-a477-44ea-8002-862eca8ef91d \n2.50: https://etro.gg/gearset/1e409c3f-a2ae-4236-8434-1947bb3a32a2")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/0/U3f8Q98TbAeGvg_vXiHGOaa2d4.png")
                    await interaction.reply({ ephemeral: true, embeds: [warEmbed] });
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
                    const gnbEmbed = new MessageEmbed()
                        .setTitle("Best in slot(s)")
                        .setDescription("Gunbreaker")
                        .setColor("#485ecf")
                        .setDescription("2.40: https://etro.gg/gearset/88fbea7d-3b43-479c-adb8-b87c9d6cb5f9 \n2.41: https://etro.gg/gearset/c2962f7b-ea07-4aa9-9b84-21eb8ac03d90 \n2.42: https://etro.gg/gearset/0c777bae-1680-4b0e-ac7e-56217df5611e \n2.43: https://etro.gg/gearset/e863ace7-ffcb-4c3d-b8de-8038f99a7308 \n2.44: https://etro.gg/gearset/b8d9ed19-8b42-41de-b414-ee83ed799416 \n2.45: https://etro.gg/gearset/d6f564f3-e918-4dc8-8bf7-95764ada60a7 \n2.46: https://etro.gg/gearset/a69c29ce-50f2-4fd2-9db3-6a4704c707d8 \n2.47: https://etro.gg/gearset/d7343b12-6ce4-47bf-912f-c219874905f3")
                        .setThumbnail("https://img.finalfantasyxiv.com/lds/promo/h/8/fc5PYpEFGrg4qPYDq_YBbCy1X0.png")
                    await interaction.reply({ ephemeral: true, embeds: [gnbEmbed] });
                }
            }
        }
    }
}