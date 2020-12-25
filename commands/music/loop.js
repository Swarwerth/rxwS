const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

const {prefix} = require('../../config/bot.json');

module.exports.run = async (client, message, args) => {

  const errorChannel = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`loop\` !`, `Connectez-vous dans un salon vocal pour utiliser cette commande !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const errorSameChannel = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`loop\` !`, `Connectez-vous dans le même salon vocal pour utiliser cette commande !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const errorNoMusic = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`loop\` !`, `Aucune musique n'est jouée actuellement !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  if (!message.member.voice.channel) return message.channel.send(errorChannel);
  if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(errorSameChannel);
  if (!client.player.getQueue(message)) return message.channel.send(errorNoMusic);

  const loopEnableEmbed = new MessageEmbed()
    .setColor('#ccfdff')
    .setAuthor(`🥏 Queue en boucle activée !`)
    .setTitle(`Github/ZerioDev/Music-bot`)
    .setURL(`https://github.com/ZerioDev/Music-bot/`)
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`La répétition de la queue a été activée !`, `Effectuez une nouvelle fois la commande \`${prefix}loop\` pour désactiver la boucle !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const loopDisableEmbed = new MessageEmbed()
    .setColor('#ccfdff')
    .setAuthor(`🥏 Queue en boucle désactivée !`)
    .setTitle(`Github/ZerioDev/Music-bot`)
    .setURL(`https://github.com/ZerioDev/Music-bot/`)
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`La répétition de la queue a été désactivée !`, `Effectuez une nouvelle fois la commande \`${prefix}loop\` pour réactiver la boucle !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const repeatMode = client.player.getQueue(message).repeatMode;

  if(repeatMode) {

    client.player.setRepeatMode(message, false);
    return message.channel.send(loopDisableEmbed);

  } else {

    client.player.setRepeatMode(message, true);
    return message.channel.send(loopEnableEmbed);
    
  };
};

module.exports.help = MESSAGES.COMMANDS.MUSIC.LOOP;