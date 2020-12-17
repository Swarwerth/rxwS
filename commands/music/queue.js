const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require("discord.js");
const {prefix} = require('../../config/bot.json');

module.exports.run = async (client, message, args) => {

  const errorChannel = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`queue\` !`, `Connectez-vous dans un salon vocal pour utiliser cette commande !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const errorSameChannel = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`queue\` !`, `Connectez-vous dans le même salon vocal pour utiliser cette commande !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  if(!message.member.voice.channel) return message.channel.send(errorChannel);
  if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(errorSameChannel);

  const noMusicQueue = new MessageEmbed()
    .setColor('#ccfdff')
    .setAuthor(`🥏 Queue vide !`)
    .addField(`Aucune musique n'est dans la queue actuellement !`, `Pour rajouter une musique dans la queue, utilisez la commande \`${prefix}play\` !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const queue = client.player.getQueue(message);
  if(!queue) return message.channel.send(noMusicQueue);

  const queueTracks = queue.tracks.map((track, i) => {
    return `**#${i}** - ${track.title} | ${track.author} (${track.requestedBy})`
    }).slice(1, 6).join('\n') + `\n\n${queue.tracks.length > 5 ? `Et **${queue.tracks.length - 5}** musique(s)...` : `**${queue.tracks.length}** musiques dans la queue...`}`;

  const queueEmbed = new MessageEmbed()
    .setColor('#ccfdff')
    .setAuthor(`🥏 Musique en attente`, message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`Jouée actuellement :`, `${queue.playing.title} | ${queue.playing.author}`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  if (queue.tracks.length !== 1) {
    queueEmbed.addField(queue.tracks.length < 2 ? `Musique suivante :` : "Musiques suivantes :", queueTracks, false)
  };

  return message.channel.send(queueEmbed);

};

module.exports.help = MESSAGES.COMMANDS.MUSIC.QUEUE;