const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require("discord.js");

const {logsChannel} = require("../../config/guild.json");

const moment = require('moment');
moment.locale('fr');

module.exports.run = async (client, message, args) => {

  const user = await client.users.fetch(args[0]);

  const unbanEmbed = new MessageEmbed()
    .setColor('#73ff73')
    .setAuthor(`✅ Unban !`, user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setThumbnail(user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`✅ Le graciement s'est imposé !`, `${user.username} a été débanni du serveur !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const unbanLogsEmbed = new MessageEmbed()
    .setColor('#73ff73')
    .setAuthor(`✅ ${user.tag} a été débanni !`, user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setThumbnail(user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .addFields(
      {name: `> Identifiant`, value: '`' + user.id + '`', inline: false},
      {name: `> Nombres de bannissements`, value: '`' + message.guild.fetchBans() + '`', inline: false},
    )
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const errorMentionnedUnbanEmbed = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`<@${args[0]} n'est pas banni ou n'existe pas !`, `Merci de donner l'identifiant d'un utilisateur déjà banni !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();
  
  client.channels.cache.get(logsChannel).send(unbanLogsEmbed);

  if (!user)
    return message.channel.send(errorMentionnedUnbanEmbed);

  if(user)
    message.guild.members.unban(user)
    .then (() => {
      message.channel.send(unbanEmbed)
  });
};

module.exports.help = MESSAGES.COMMANDS.MOD.UNBAN;