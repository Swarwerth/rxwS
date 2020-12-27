const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

const {prefix} = require('../../config/bot.json');

module.exports.run = async (client, message, args) => {

  const errorChannel = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`pause\` !`, `Connectez-vous dans un salon vocal pour utiliser cette commande !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const errorSameChannel = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`pause\` !`, `Connectez-vous dans le même salon vocal pour utiliser cette commande !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const errorNoMusic = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`pause\` !`, `Aucune musique n'est jouée actuellement !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  if (!message.member.voice.channel) return message.channel.send(errorChannel);
  if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(errorSameChannel);
  if (!client.player.getQueue(message)) return message.channel.send(errorNoMusic);

  const pauseEmbed = new MessageEmbed()
    .setColor('#ffe2cc')
    .setAuthor(`⏸ Musique en pause !`)
    .setTitle(`Github/ZerioDev/Music-bot`)
    .setURL(`https://github.com/ZerioDev/Music-bot/`)
    .setThumbnail(client.player.getQueue(message).playing.thumbnail)
    .addField(`${client.player.getQueue(message).playing.title} mis en pause !`, `Tapez la commande \`${prefix}resume\` pour relancer la musique !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  await client.player.pause(message);
  return message.channel.send(pauseEmbed);

};

module.exports.help = MESSAGES.COMMANDS.MUSIC.PAUSE;