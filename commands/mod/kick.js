const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require("discord.js");

const {logsChannel} = require("../../config/guild.json");

const moment = require('moment');
moment.locale('fr');

module.exports.run = (client, message, args) => {

  let bot = {
    "false": "👤 Humain",
    "true" : "🤖 Bot"
  };

  const reason = (args.splice(1).join(' ') || 'Aucune raison spécifiée');
  const user = message.mentions.users.first();
  const member = message.guild.member(user);

  let nickname = member.nickname !== null ? member.nickname : "Aucun";

  const kickEmbed = new MessageEmbed()
    .setColor('#ffbb63')
    .setAuthor(`⭕ Exclusion !`, user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setThumbnail(user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`⭕ Exclu !`, `${user.username} a été exclu du serveur.`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const kickDMEmbed = new MessageEmbed()
    .setColor('#ffbb63')
    .setAuthor(`⭕ Exclusion !`, message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .setDescription(`*${message.guild.name}*`)
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`⭕ Exclu !`, `Tu as été exclu du serveur **${message.guild.name}** avec comme raison : \`${reason}\``, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const kickLogsEmbed = new MessageEmbed()
    .setColor('#ffbb63')
    .setAuthor(`⭕ ${user.tag} a été exclu !`, user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setThumbnail(user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .addFields(
      {name: `> Identifiant`, value: '`' + user.id + '`', inline: false},
      {name: `> Pseudonyme`, value: '`' + nickname + '`', inline: false},
      {name: `> Bip Boop ?`, value: '`' + bot[user.bot] + '`', inline: false},
      {name: `> A rejoint le`, value: '`' + moment(member.joinedAt).format('llll') + '`', inline: false},
      {name: `> Raison exclusion`, value: '`' + reason + '`', inline: false},
    )
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

    const errorPermissionsKickEmbed = new MessageEmbed()
      .setColor('#c43131')
      .setAuthor(`💢 Erreur !`)
      .addField(`Je n'ai pas pu utiliser la commande \`kick\` sur cet utilisateur !`, `Vérifie bien si j'ai les permissions requises pour exclure l'utilisateur !`, false)
      .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
      .setTimestamp();

  if (!message.guild) return;

  client.channels.cache.get(logsChannel).send(kickLogsEmbed);

  if (user) {
    if (member) {
      member
        .send(kickDMEmbed)
        .then(() =>{
          member.kick(reason);
        })
      .then(() => {
        message.channel.send(kickEmbed);
      })
      .catch(err => {
        message.channel.send(errorPermissionsKickEmbed);
      });
    };
  };
};

module.exports.help = MESSAGES.COMMANDS.MOD.KICK;