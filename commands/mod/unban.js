const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

const moment = require('moment');
moment.locale('fr');

const {logsChannel} = require('../../config/guild.json');

module.exports.run = async (client, message, args) => {

  const user = await client.users.fetch(args[0]);

  const embed = new MessageEmbed()
    .setColor('#73ff73')
    .setAuthor(`✅ Unban !`, user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setThumbnail(user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`✅ Le graciement s'est imposé !`, `${user.username} a été débanni du serveur !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const logsEmbed = new MessageEmbed()
    .setColor('#73ff73')
    .setAuthor(`✅ ${user.tag} a été débanni !`, user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setThumbnail(user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`> Identifiant`, '`' + user.id + '`', false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const errorEmbed = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`<@${args[0]} n'est pas banni ou n'existe pas !`, `Merci de donner l'identifiant d'un utilisateur déjà banni !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();
  
  if (!user) return message.channel.send(errorEmbed);

  client.channels.cache.get(logsChannel).send(logsEmbed);
  return message.guild.members.unban(user).then (() => {
    message.channel.send(embed)
  });

};

module.exports.help = MESSAGES.COMMANDS.MOD.UNBAN;