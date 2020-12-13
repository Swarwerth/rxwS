const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require("discord.js");

const {logsChannel} = require("../../config/guild.json");

const moment = require('moment');
moment.locale('fr');

module.exports.run = (client, message, args) => {

  const user = message.mentions.users.first();
  const member = message.guild.member(user);
  let muteRole = message.guild.roles.cache.find(r => r.name === 'Muted');

  let nickname = member.nickname !== null ? member.nickname : "Aucun";

  const unmuteEmbed = new MessageEmbed()
    .setColor('#73ff73')
    .setAuthor(`✅ Unmute !`, user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setThumbnail(user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`✅ Le graciement s'est imposé !`, `${user.username} peut de nouveau parler !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const unmuteDMEmbed = new MessageEmbed()
    .setColor('#73ff73')
    .setAuthor(`✅ Unmute !`, message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .setDescription(`*${message.guild.name}*`)
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`✅ Le graciement s'est imposé !`, `Tu peux de nouveau parler sur **${message.guild.name}** !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const unmuteLogsEmbed = new MessageEmbed()
    .setColor('#73ff73')
    .setAuthor(`✅ ${user.tag} a été unmute !`, user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setThumbnail(user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .addFields(
      {name: `> Identifiant`, value: '`' + user.id + '`', inline: false},
      {name: `> Pseudonyme`, value: '`' + nickname + '`', inline: false},
    )
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const errorNotMuteUnmuteEmbed = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`${user.username} n'est pas muet !`, `Merci de mentionner un utilisateur qui a été rendu muet !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  if (!message.guild) return;

  if(!member.roles.cache.has(muteRole.id)) return message.channel.send(errorNotMuteUnmuteEmbed);

  client.channels.cache.get(logsChannel).send(unmuteLogsEmbed);
  
  member.roles.remove(muteRole.id)
    .then(() => {
      message.channel.send(unmuteEmbed);
    })
    .then(() => {
      member.send(unmuteDMEmbed);
    });
};

module.exports.help = MESSAGES.COMMANDS.MOD.UNMUTE;
