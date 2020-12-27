const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

module.exports.run = async (client, message) => {

  const errorChannel = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`clearqueue\` !`, `Connectez-vous dans un salon vocal pour utiliser cette commande !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const errorSameChannel = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`clearqueue\` !`, `Connectez-vous dans le même salon vocal pour utiliser cette commande !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const errorNoMusic = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`clearqueue\` !`, `Aucune musique n'est jouée actuellement !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();
  
  const errorOnlyOne = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`clearqueue\` !`, `Il n'y a qu'une musique dans la queue !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  if (!message.member.voice.channel) return message.channel.send(errorChannel);
  if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(errorSameChannel);
  if (!client.player.getQueue(message)) return message.channel.send(errorNoMusic);
  if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(errorOnlyOne);

  const CQEmbed = new MessageEmbed()
    .setColor('#ffcccc')
    .setAuthor(`🎹 Queue supprimée !`)
    .setTitle(`Github/ZerioDev/Music-bot`)
    .setURL(`https://github.com/ZerioDev/Music-bot/`)
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`Les musiques de la queue ont bien été supprimées !`, `J'attends avec impatience les musiques que vous mettrez !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  client.player.clearQueue(message);
  return message.channel.send(CQEmbed);

};

module.exports.help = MESSAGES.COMMANDS.MUSIC.CLEARQUEUE;