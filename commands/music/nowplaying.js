const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

module.exports.run = async (client, message, args) => {

  const errorChannel = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`np\` !`, `Connectez-vous dans un salon vocal pour utiliser cette commande !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const errorSameChannel = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`np\` !`, `Connectez-vous dans le même salon vocal pour utiliser cette commande !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const errorNoMusic = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`np\` !`, `Aucune musique n'est jouée actuellement !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  if(!message.member.voice.channel) return message.channel.send(errorChannel);
  if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(errorSameChannel);
  if(!client.player.getQueue(message)) return message.channel.send(errorNoMusic);

  const track = await client.player.nowPlaying(message);
  const filters = [];

  Object.keys(client.player.getQueue(message).filters).forEach((filterName) => {
    if (client.player.getQueue(message).filters[filterName]) filters.push(filterName);
  });

  const NPEmbed = new MessageEmbed()
    .setColor('#ebffcc')
    .setAuthor(`⌚ Temps restant...`)
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .addFields(
      {name: "> Jouée actuellement", value: track.title, inline: false},
      {name: "> Lancée par", value: track.requestedBy.username, inline: false},
      {name: "> Filtres activés", value: filters.length, inline: true},
      {name: "> Volume", value: client.player.getQueue(message).volume, inline: true},
      {name: "> Répétition ?", value: client.player.getQueue(message).repeatMode ? 'Oui' : 'Non', inline: true},
      {name: "> Progression", value: client.player.createProgressBar(message, {timecodes: true}), inline: false},
    )
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setThumbnail(track.thumbnail)
    .setTimestamp();

  message.channel.send(NPEmbed);

};

module.exports.help = MESSAGES.COMMANDS.MUSIC.NOWPLAYING;