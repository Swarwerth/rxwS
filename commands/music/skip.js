const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require("discord.js");

module.exports.run = async (client, message, args) => {

  const errorChannel = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`skip\` !`, `Connectez-vous dans un salon vocal pour utiliser cette commande !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const errorSameChannel = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`skip\` !`, `Connectez-vous dans le même salon vocal pour utiliser cette commande !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const errorNoMusic = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`skip\` !`, `Aucune musique n'est jouée actuellement !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  if(!message.member.voice.channel) return message.channel.send(errorChannel);
  if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(errorSameChannel);
  if(!client.player.getQueue(message)) return message.channel.send(errorNoMusic);

  const skipEmbed = new MessageEmbed()
    .setColor('#ffccf2')
    .setAuthor(`⏭ Musique sautée !`)
    .setThumbnail(client.player.getQueue(message).playing.thumbnail)
    .addField(`La musique suivante a été sautée :`, client.player.nowPlaying(message).title, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  client.player.skip(message);
  message.channel.send(skipEmbed);

};

module.exports.help = MESSAGES.COMMANDS.MUSIC.SKIP;