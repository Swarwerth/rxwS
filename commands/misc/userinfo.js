const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

const moment = require('moment');
moment.locale('fr')

module.exports.run = (client, message, args) => {

  const bot = {
    "false": "👤 Humain",
    "true" : "🤖 Bot"
  };

  const user = message.mentions.users.first() || message.author;
  const member = message.guild.member(user);

  const rolesMap = member.roles.cache.map(role => role.toString());

  const nickname = member.nickname !== null ? member.nickname : `Aucun`;

  const embed = new MessageEmbed()
    .setColor('#ffabab')
    .setAuthor(`✨ Informations sur ${user.username}`, user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setDescription(`Quelle splendide personne !`)
    .setThumbnail(user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .addFields(
      {name: `> Tag`, value: '`' + user.tag + '`', inline: true},
      {name: `> Identifiant`, value: '`' + user.id + '`', inline: true},
      {name: `> Pseudonyme`, value: '`' + nickname + '`', inline: true},
      {name: `> Bip Boop ?`, value: '`' + bot[user.bot] + '`', inline: true},
      {name: `> Créé le`, value: '`' + moment(user.createdAt).format('LLL') + '`', inline: true},
      {name: `> A rejoint le`, value: '`' + moment(member.joinedAt).format('llll') + '`', inline: true},
      {name: `> Rôles [${rolesMap.length - 1}]`, value: rolesMap.join(', ').replace(', @everyone', ''), inline: false},
    )
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  return message.channel.send(embed);

};

module.exports.help = MESSAGES.COMMANDS.MISC.USERINFO;