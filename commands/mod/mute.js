const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require("discord.js");

const {logsChannel} = require("../../config/guild.json")

const moment = require('moment');
moment.locale('fr');

const ms = require('ms');

module.exports.run = async (client, message, args) => {

  let muteRole = message.guild.roles.cache.find(r => r.name === `🔇 Mute`);
  let muteTime = (args[1] || '60s');

  const reason = (args.splice(2).join(' ') || `Aucune raison spécifiée`);
  const user = message.mentions.users.first();
  const member = message.guild.member(user);

  const muteEmbed = new MessageEmbed()
    .setColor('#fff763')
    .setAuthor(`❌ Mute !`, user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setThumbnail(user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`❌ Son droit de parole s'est envolé !`, `${user.username} a été rendu muet.`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const muteDMEmbed = new MessageEmbed()
    .setColor('#fff763')
    .setAuthor(`❌ Mute !`, message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .setDescription(`*${message.guild.name}*`)
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`❌ Ton droit de parole s'est envolé !`, `Tu as été rendu muet du serveur **${message.guild.name}** pour \`${ms(ms(muteTime))}\` avec comme raison : \`${reason}\``, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const unmuteDMEmbed = new MessageEmbed()
    .setColor('#73ff73')
    .setAuthor(`✅ Unmute !`, message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .setDescription(`*${message.guild.name}*`)
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`✅ Tu as de nouveau le droit de parler !`, `Tu peux de nouveau parler sur **${message.guild.name}** !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const muteLogsEmbed = new MessageEmbed()
    .setColor('#fff763')
    .setAuthor(`❌ ${user.tag} a été rendu muet !`, user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setThumbnail(user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .addFields(
      {name: `> Utilisateur`, value: user, inline: false},
      {name: `> Temps mute`, value: '`' + ms(ms(muteTime)) + '`', inline: false},
      {name: `> Raison`, value: '`' + reason + '`', inline: false},
    )
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const errorPermissionsMuteEmbed = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu utiliser la commande \`mute\` sur cet utilisateur !`, `Vérifie bien si j'ai les permissions requises pour gérer les rôles !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  if (!message.guild) return;

  client.channels.cache.get(logsChannel).send(muteLogsEmbed);

  if(!isNaN(args[1])) {
    return message.channel.send('OOPS!')
  };

  if(!muteRole) {
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

  if(user) {
    if (member) {
      member
        .send(muteDMEmbed)
        .then(() => {
          member.roles.add(muteRole.id)
        })
        .then(() => {
          message.channel.send(muteEmbed);
        })
        .catch(err => {
          message.channel.send(errorPermissionsMuteEmbed);
        });
    }
  };

  setTimeout(() => {
    member.roles.remove(muteRole.id)
      .then(() => {
        member.send(unmuteDMEmbed)
      });
  }, ms(muteTime));  
};

module.exports.help = MESSAGES.COMMANDS.MOD.MUTE;
