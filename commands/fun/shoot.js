const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require("discord.js");

module.exports.run = async (client, message, args) => {

  const killed = message.mentions.users.first()

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

  let response = randomItem(responses)

  const shootEmbed = new MessageEmbed()
    .setColor('#c20000')
    .setAuthor(`🔪 On nous signale un assasinat !`, message.mentions.users.first().displayAvatarURL({dynamic: true, format:'png'}))
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`Vous vous trouvez sur une scène de crime !`, response, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const errorMentionShootEmbed = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu bien exécuter la commande \`shoot\` !`, `Merci de mentionner un utilisateur du serveur !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();
    
  args[0] = message.mentions.users.first() ? message.channel.send(shootEmbed) : message.channel.send(errorMentionShootEmbed) 

};

module.exports.help = MESSAGES.COMMANDS.FUN.SHOOT;