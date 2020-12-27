const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

const moment = require('moment');
moment.locale('fr');

const {logsChannel} = require('../../config/guild.json');

module.exports.run = (client, message, args) => {

  const user = message.mentions.users.first();
  const member = message.guild.member(user);
  let muteRole = message.guild.roles.cache.find(r => r.name === '🔇 Mute');

  let nickname = member.nickname !== null ? member.nickname : 'Aucun';

  const embed = new MessageEmbed()
    .setColor('#73ff73')
    .setAuthor(`✅ Unmute !`, user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setThumbnail(user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`✅ Le graciement s'est imposé !`, `${user.username} peut de nouveau parler !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const DMEmbed = new MessageEmbed()
    .setColor('#73ff73')
    .setAuthor(`✅ Unmute !`, message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .setDescription(`*${message.guild.name}*`)
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`✅ Le graciement s'est imposé !`, `Tu peux de nouveau parler sur **${message.guild.name}** !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const logsEmbed = new MessageEmbed()
    .setColor('#73ff73')
    .setAuthor(`✅ ${user.tag} a été unmute !`, user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setThumbnail(user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .addFields(
      {name: `> Identifiant`, value: '`' + user.id + '`', inline: false},
      {name: `> Pseudonyme`, value: '`' + nickname + '`', inline: false},
    )
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const errorEmbed = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`${user.username} n'est pas muet !`, `Merci de mentionner un utilisateur qui a été rendu muet !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  if (!message.guild) return;
  if (!member.roles.cache.has(muteRole.id)) return message.channel.send(errorEmbed);

  client.channels.cache.get(logsChannel).send(logsEmbed);
  return member.roles.remove(muteRole.id).then(() => {
    message.channel.send(embed);
  }).then(() => {
    member.send(DMEmbed);
  });

};

module.exports.help = MESSAGES.COMMANDS.MOD.UNMUTE;
