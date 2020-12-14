const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require("discord.js");

module.exports.run = (client, message, args) => {

    const botEmbed = new MessageEmbed()
        .setColor('#ff96ff')
        .setAuthor(`🤖 Informations sur le Bot`, client.user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
        .setDescription(`https://github.com/Swarwerth/rxwS`)
        .setThumbnail(client.user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
        .addFields(
            {name: `> Tag`, value: '`' + client.user.tag + '`', inline: true},
            {name: `> Créé le`, value: '`31 octobre 2020`', inline: true},
            {name: `> Développeur`, value: '<@259302097197989888>', inline: true},
            {name: `> Statistiques`, value:
                '`' + client.channels.cache.size + ' salons`' +
                '\n`' + client.guilds.cache.size + '`',
                inline: false},
            {name: `> Versions`, value:
                'Bot : `v.0.2.2`' +
                '\nDiscord.js : `v.12.4.1`' +
                '\nNode.js : `v.12.18.3`',
                inline: false},
            {name: `> Modules`, value: 'https://github.com/ZerioDev/Music-bot', inline: false}
        )
        .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format: 'png'}))
        .setTimestamp();

    message.channel.send(botEmbed);
    
};

module.exports.help = MESSAGES.COMMANDS.BOT.BOTINFO;