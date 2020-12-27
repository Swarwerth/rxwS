const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

const ms = require('ms');
const moment = require('moment');
moment.locale('fr');

const {logsChannel} = require('../../config/guild.json');

module.exports.run = async (client, message, args) => {

  let muteRole = message.guild.roles.cache.find(r => r.name === `🔇 Mute`);
  let muteTime = (args[1] || '60s');

  const reason = (args.splice(2).join(' ') || `Aucune raison spécifiée`);
  const user = message.mentions.users.first();
  const member = message.guild.member(user);

  const embed = new MessageEmbed()
    .setColor('#fff763')
    .setAuthor(`❌ Mute !`, user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setThumbnail(user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`❌ Son droit de parole s'est envolé !`, `${user.username} a été rendu muet.`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const DMEmbed = new MessageEmbed()
    .setColor('#fff763')
    .setAuthor(`❌ Mute !`, message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .setDescription(`*${message.guild.name}*`)
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`❌ Ton droit de parole s'est envolé !`, `Tu as été rendu muet du serveur **${message.guild.name}** pour \`${ms(ms(muteTime))}\` avec comme raison : \`${reason}\``, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const unmuteDMEmbed = new MessageEmbed()
    .setColor('#73ff73')
    .setAuthor(`✅ Unmute !`, message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .setDescription(`*${message.guild.name}*`)
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`✅ Tu as de nouveau le droit de parler !`, `Tu peux de nouveau parler sur **${message.guild.name}** !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const logsEmbed = new MessageEmbed()
    .setColor('#fff763')
    .setAuthor(`❌ ${user.tag} a été rendu muet !`, user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setThumbnail(user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .addFields(
      {name: `> Utilisateur`, value: user, inline: false},
      {name: `> Temps mute`, value: '`' + ms(ms(muteTime)) + '`', inline: false},
      {name: `> Raison`, value: '`' + reason + '`', inline: false},
    )
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const errorPermissionsMuteEmbed = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu utiliser la commande \`mute\` sur cet utilisateur !`, `Vérifie bien si j'ai les permissions requises pour gérer les rôles !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const errorNoGuildEmbed = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu utiliser la commande \`mute\` sur cet utilisateur !`, `L'utilisateur mentionné n'est pas dans le serveur Discord !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const errorNoMentionEmbed = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu utiliser la commande \`mute\` !`, `Merci de mentionner un utilisateur à rendre muet !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  if (!message.guild) return;
  client.channels.cache.get(logsChannel).send(logsEmbed);

  if (!isNaN(args[1])) return message.channel.send('OOPS!')

  if (!muteRole) {
    muteRole = await message.guild.roles.create({
      data: {
        name: '🔇 Mute',
        color: '#9e3131',
        permission : [],
      }
    });

    message.guild.channels.cache.forEach(async (channel, id) => {
      await channel.updateOverwrite(muteRole, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false,
        SPEAK: false
      });
    });
  };

  if (user) {
    if (member) {

      member.send(DMEmbed).then(() => {
        member.roles.add(muteRole.id);
      }).then(() => {
        message.channel.send(embed);
      })
      .catch((err) => {
        message.channel.send(errorPermissionsMuteEmbed);
      });

    } else return message.channel.send(errorNoGuildEmbed);
  } else return message.channel.send(errorNoMentionEmbed);

  setTimeout(() => {
    member.roles.remove(muteRole.id)
    member.send(unmuteDMEmbed);
  }, ms(muteTime));

};

module.exports.help = MESSAGES.COMMANDS.MOD.MUTE;
