const {MessageEmbed} = require('discord.js');

module.exports = (client, error, message) => {

  const commandName = args.shift().toLowerCase();

  const errorNoMusic = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`${commandName}\` !`, `Aucune musique n'est jouée actuellement !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const errorNotConnected = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`${commandName}\` !`, `Connectez-vous dans un salon vocal pour utiliser cette commande !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const errorNoPermission = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`${commandName}\` !`, `Merci de demander à un administrateur de vérifier mes permissions !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const errorEmbed = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`${commandName}\` !`, `Une erreur s'est produite : ${error}`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  switch (error) {
    case 'NotPlaying':
      message.channel.send(errorNoMusic);
      break;
    case 'NotConnected':
      message.channel.send(errorNotConnected);
      break;
    case 'UnableToJoin':
      message.channel.send(errorNoPermission);
      break;
    default:
      message.channel.send(errorEmbed);
  };
};
