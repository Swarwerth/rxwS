const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

module.exports.run = async (client, message, args) => {

  const killed = message.mentions.users.first();

  const responses = [
    `Le cadavre de ${killed} a été retrouvé !`,
    `${message.author} tente d'assasiné ${killed} !`,
    `Que fait ${message.author} derrière ${killed} avec un couteau ?`,
    `Des coups de feu retentissent ! ${killed} est retrouvé mort !`,
    `${message.author} essaye de prendre la fuite laissant ${killed} agonisant !`,
    `${killed} est allongé par terre, encerclé par son sang !`
  ];

  function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  const response = randomItem(responses);

  const embed = new MessageEmbed()
    .setColor('#c20000')
    .setAuthor(`🔪 On nous signale un assasinat !`, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setThumbnail(killed.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`Vous vous trouvez sur une scène de crime !`, response, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const errorMentionEmbed = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu bien exécuter la commande \`shoot\` !`, `Merci de mentionner un utilisateur du serveur !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();
    
  return args[0] = message.mentions.users.first() ? message.channel.send(embed) : message.channel.send(errorMentionEmbed);

};

module.exports.help = MESSAGES.COMMANDS.FUN.SHOOT;