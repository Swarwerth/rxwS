const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

const moment = require('moment');
moment.locale('fr');

module.exports.run = (client, message, args) => {

  const errorEmbed = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`emoji\` !`, `Merci d'indiquer un emoji personnalisé !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const argsSplit = args[0].split(':')[1];
  const emoji = message.guild.emojis.cache.find(emoji => emoji.name === argsSplit);

  if (!emoji) return message.channel.send(errorEmbed);

  emoji.fetchAuthor().then(author => {

    const emojiEmbed = new MessageEmbed()
    .setColor('#ab6394')
    .setAuthor(`🎐 Informations sur ${emoji.name}`)
    .setThumbnail(emoji.url)
    .addFields(
      {name: `> Représentation`, value: emoji, inline: true},
      {name: `> Identifiant`, value: '`' + emoji.id + '`', inline: true},
      {name: `> Uploadé par`, value: author, inline: true},
      {name: `> Uploadé le`, value: '`' + moment(emoji.createdAt).format('LLL') + '`', inline: true},
      {name: `> Animé ?`, value: emoji.animated ? '✅' : '❌', inline: true},
    )
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

    return message.channel.send(emojiEmbed);
    
  })
};

module.exports.help = MESSAGES.COMMANDS.MISC.INFOEMOJI;