const {MESSAGES} = require('../../util/constants');
const {MessageEmbed, version} = require('discord.js');

module.exports.run = (client, message, args) => {

  const embed = new MessageEmbed()
    .setColor('#ff96ff')
    .setAuthor(`🤖 Informations sur le bot`, client.user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTitle(`Github/Swarwerth/rxwS`)
    .setURL(`https://github.com/Swarwerth/rxwS/`)
    .setDescription(`Le code de ce bot est **sous licence**. Merci de mentionner le nom de Swarwerth !`)
    .setThumbnail(client.user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .addFields(
      {name: `> Tag`, value: `\`${client.user.tag}\``, inline: true},
      {name: `> Créé le`, value: `\`31 ocbobre 2020\``, inline: true},
      {name: `> Développeur`, value: `<@259302097197989888>`, inline: true},
      {name: `> Statistiques`, value:
        `\`${client.guilds.cache.size} serveurs\`` +
        `\n\`${client.channels.cache.size} salons\`` +
        `\n\`${client.users.cache.size} utilisateurs\``,
        inline: true},
      {name: `> Versions - 20w52d`, value:
        `Discord.js : \`${version}\`` +
        `\nNode.js : \`${process.version}\``,
        inline: true},
      {name: `> Modules`, value: `https://github.com/ZerioDev/Music-bot`, inline: false}
    )
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  return message.channel.send(embed);
    
};

module.exports.help = MESSAGES.COMMANDS.BOT.BOTINFO;