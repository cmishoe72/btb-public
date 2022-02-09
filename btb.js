const { Client, Collection, Intents } = require('discord.js');
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGES]
});
const { token } = require('./config.json');
const fs = require('fs');
const Discord = require('discord.js') // I need to fix this later. Too Bad!

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const functions = fs.readdirSync('./functions').filter(file => file.endsWith('.js'));

(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./events");
    client.handleCommands(commandFiles, "./commands");
    client.login(token);
})();
const PREFIX = '>';

var version = '4.2.0';

const wait = require('util').promisify(setTimeout);

client.on('interactionCreate', async interaction => {
    if (!interaction.isSelectMenu()) return;

    if (interaction.customId === 'select') {
        await interaction.deferUpdate();
        await wait(4000);
        await interaction.editReply({ content: 'Something was selected!', components: [] });

    }
});




client.on('messageCreate', message => {
    let args = message.content.substring(PREFIX.length).split(" ");



    //Reactions/Replies
    if (message.content === "Am I cool?") {
        if (message.author.id === '528772884823539722') {
            message.channel.send('No you are not');
        }
        else {
            message.channel.send("Yes you are!");
        }
    }
    if (message.content.toLowerCase().includes('dio')) {
        const emoji = client.emojis.cache.find(emoji => emoji.name === 'menacing');
        message.react(emoji);
    }
    if (message.content.toLowerCase().includes('he doesnt know')) {
        const emoji = client.emojis.cache.find(emoji => emoji.name === 'pepelaugh');
        message.react(emoji);
    }
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;
    switch (args[0]) {
        case 'server-info':
            message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
            break;
        case 'bakamitai':
            message.channel.send("https://www.youtube.com/watch?v=Z2NXAk-XkoQ");
            break;
        case "xennek":
            message.channel.send("GAMING").then(sentMessage => {
                sentMessage.react("🇬");
                sentMessage.react("🇦");
                sentMessage.react("🇲");
                sentMessage.react("🇮");
                sentMessage.react("🇳");
                const gemoji = client.emojis.cache.find(emoji => emoji.name === 'gemoji');
                sentMessage.react(gemoji);
            })
            break;
        case "code":
            message.channel.send("https://media.discordapp.net/attachments/624758031154020384/940056464242909294/unknown.png")
            break;
        case 'bis':
            message.channel.send("What job?")
            const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
            collector.on('collect', message => {
                if (message.content.toLowerCase() == "dragoon") {
                    message.channel.send("https://etro.gg/gearset/8bdd42db-a318-41a0-8903-14efa5e0774b");
                }
                if (message.content.toLowerCase() == "sage") {
                    message.channel.send("https://etro.gg/gearset/32c72ae2-3c53-49cf-ac02-b989c693d8b5");
                }
                if (message.content.toLowerCase() == "samurai") {
                    message.channel.send("Which BIS? **2.14**, **2.07**, **2**");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
                    collector.on('collect', message => {
                        if ((message.content.toLowerCase() == "2")) {
                            message.channel.send({ files: ["./images/" + 1 + ".png"] });
                            message.channel.send("https://etro.gg/gearset/84c1f493-7f65-4d9e-bd3c-34965c75cf41");
                            collector.stop();
                        }
                        else if ((message.content.toLowerCase() == "2.07")) {
                            message.channel.send("https://etro.gg/gearset/17d99be3-021c-4d6c-a9e3-0504e62c8c1f");
                            collector.stop();
                        }
                        else if ((message.content.toLowerCase() == "2.14")) {
                            message.channel.send("https://etro.gg/gearset/3a7c7f45-b715-465d-a377-db458045506a");
                            collector.stop();
                        }

                    });
                }
                if (message.content.toLowerCase() == "astrologian") {
                    message.channel.send("Which BIS? **Mixed SpS**, **SpS Crafted**, **Mixed Det**, **Budget Det**");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
                    collector.on('collect', message => {
                        if ((message.content.toLowerCase() == "mixed sps")) {
                            message.channel.send("https://etro.gg/gearset/4830052b-e2fd-4ffc-a299-1747d27e663f");
                            collector.stop();
                        }
                        if ((message.content.toLowerCase() == "sps crafted")) {
                            message.channel.send("https://etro.gg/gearset/82f562e3-82d6-40db-ab16-6af7882c75c8");
                            collector.stop();
                        }
                        if ((message.content.toLowerCase() == "mixed det")) {
                            message.channel.send("https://etro.gg/gearset/f875cf86-3e7f-49c5-b518-7372f54e9b59");
                            collector.stop();
                        }
                        if ((message.content.toLowerCase() == "budget det")) {
                            message.channel.send("https://etro.gg/gearset/8fb52279-0671-46c7-924c-faee61fc7d08");
                            collector.stop();
                        }
                    });
                }

                if (message.content.toLowerCase() == "machinist") {
                    message.channel.send("Which BIS? **Asphodelos**, **Crafted Gear**, **Mix**");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
                    collector.on('collect', message => {
                        if ((message.content.toLowerCase() == "asphodelos")) {
                            message.channel.send("https://etro.gg/gearset/6b4b1ba5-a821-41a0-b070-b1f50e986f85");
                            collector.stop();
                        }
                        else if ((message.content.toLowerCase() == "crafted gear")) {
                            message.channel.send("https://etro.gg/gearset/7ef196d1-b91e-4166-a1c0-af279fb4a758");
                            collector.stop();
                        }
                        else if ((message.content.toLowerCase() == "mix")) {
                            message.channel.send("https://etro.gg/gearset/0ab4cd5c-da46-48db-91b2-762ae2c9c7ac");
                            collector.stop();
                        }

                    });
                }

                if (message.content.toLowerCase() == "bard") {
                    message.channel.send("https://etro.gg/gearset/cec981af-25c7-4ffb-905e-3024411b797a");

                }

                if (message.content.toLowerCase() == "summoner") {
                    message.channel.send("https://etro.gg/gearset/79f43ffa-6b37-417c-bc24-8b36ea303ee8");

                }

                if (message.content.toLowerCase() == "white mage") {
                    message.channel.send("https://etro.gg/gearset/d40ebdcf-49df-4518-a91d-9ccad5718a0b");
                };

                if (message.content.toLowerCase() == "paladin") {
                    message.channel.send("Which BIS? **2.45**, **2,44**, **2.42**, **2.40**");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
                    collector.on('collect', message => {
                        if ((message.content.toLowerCase() == "2.45")) {
                            message.channel.send("https://etro.gg/gearset/38fe3778-f2c1-4300-99e4-b58a0445e969 https://xiv.sleepyshiba.com/pld/sets/599pp45.png");
                            collector.stop();
                        }
                        if ((message.content.toLowerCase() == "2.44")) {
                            message.channel.send("https://etro.gg/gearset/8cbbfbed-e2da-4866-8873-ffba3276b682 https://xiv.sleepyshiba.com/pld/sets/600pp44.png");
                            collector.stop();
                        }
                        if ((message.content.toLowerCase() == "2.42")) {
                            message.channel.send("https://etro.gg/gearset/bb893548-09aa-4a75-bb2f-90971bdcab38 https://xiv.sleepyshiba.com/pld/sets/600pp42.png");
                            collector.stop();
                        }
                        if ((message.content.toLowerCase() == "2.40")) {
                            message.channel.send("https://etro.gg/gearset/ca8e2ea6-2e6a-4e69-93b0-711a51db0a27 https://xiv.sleepyshiba.com/pld/sets/600pp40.png");
                            collector.stop();
                        }
                    });

                }
            })
            break;
    }


})

