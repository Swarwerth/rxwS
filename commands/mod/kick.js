const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

const moment = require('moment');
moment.locale('fr');

const {logsChannel} = require('../../config/guild.json');

module.exports.run = (client, message, args) => {

  const bot = {
    "false": "👤 Humain",
    "true" : "🤖 Bot"
  };

  const reason = (args.splice(1).join(' ') || `Aucune raison spécifiée`);
  const user = message.mentions.users.first();
  const member = message.guild.member(user);

  const nickname = member.nickname !== null ? member.nickname : `Aucun`;

  const embed = new MessageEmbed()
    .setColor('#ffbb63')
    .setAuthor(`⭕ Exclusion !`, user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setThumbnail(user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`⭕ Exclu !`, `${user.username} a été exclu du serveur.`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const DMEmbed = new MessageEmbed()
    .setColor('#ffbb63')
    .setAuthor(`⭕ Exclusion !`, message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .setDescription(`*${message.guild.name}*`)
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`⭕ Exclu !`, `Tu as été exclu du serveur **${message.guild.name}** avec comme raison : \`${reason}\``, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const logsEmbed = new MessageEmbed()
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
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const errorPermissionsEmbed = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu utiliser la commande \`kick\` sur cet utilisateur !`, `Vérifie bien si j'ai les permissions requises pour exclure l'utilisateur !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const errorNoGuildEmbed = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu utiliser la commande \`kick\` sur cet utilisateur !`, `L'utilisateur mentionné n'est pas dans le serveur Discord !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const errorNoMentionEmbed = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu utiliser la commande \`kick\` !`, `Merci de mentionner un utilisateur à exclure !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  if (!message.guild) return;
  client.channels.cache.get(logsChannel).send(logsEmbed);

  if (user) {
    if (member) {

      member.send(DMEmbed).then(() => {
        member.ban({reason: reason});
      }).kick(() => {
        message.channel.send(embed);
      }).catch(err => {
        message.channel.send(errorPermissionsEmbed);
      });

    } else return message.channel.send(errorNoGuildEmbed);
  } else return message.channel.send(errorNoMentionEmbed);

};

module.exports.help = MESSAGES.COMMANDS.MOD.KICK;