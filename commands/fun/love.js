const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

module.exports.run = async (client, message, args) => {

  const lover = message.mentions.users.first();

  const loveRandom = Math.random() * 100;
  const loveIndex = Math.floor(loveRandom / 10);
  const loveLevel = `❤`.repeat(loveIndex) + `🖤`.repeat(10 - loveIndex);

  const embed = new MessageEmbed()
    .setColor('#ff94f6')
    .setAuthor(`💙 Calcul d'Affinité`, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setThumbnail(lover.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setDescription(`${message.author} est compatible avec ${lover} à`)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();
  
  if (loveIndex == 0) embed.addField(`${Math.floor(loveRandom)}% ! 👀`, `On va faire comme si on n'avait rien vu...\n${loveLevel}`, false);
  if (loveIndex == 1) embed.addField(`${Math.floor(loveRandom)}% ! 🔴`, `Il est préférable de ne pas en parler.\n${loveLevel}`, false);
  if (loveIndex == 2) embed.addField(`${Math.floor(loveRandom)}% ! 🎈`, `Il faudrait repenser vos plans...\n${loveLevel}`, false);
  if (loveIndex == 3) embed.addField(`${Math.floor(loveRandom)}% ! 🚩`, `Essayez toujours de rester amis !\n${loveLevel}`, false);
  if (loveIndex == 4) embed.addField(`${Math.floor(loveRandom)}% ! 🪁`, `Essayez toujours, peut-être que ça peut fonctionner !\n${loveLevel}`, false);
  if (loveIndex == 5) embed.addField(`${Math.floor(loveRandom)}% ! 🚕`, `Pourquoi pas après tout ?\n${loveLevel}`, false);
  if (loveIndex == 6) embed.addField(`${Math.floor(loveRandom)}% ! 🛌`, `Il y a des chances qu'on vous retrouve dans un lit tous les deux !\n${loveLevel}`, false);
  if (loveIndex == 7) embed.addField(`${Math.floor(loveRandom)}% ! 🪀`, `Cela devient sérieux par ici !\n${loveLevel}`, false);
  if (loveIndex == 8) embed.addField(`${Math.floor(loveRandom)}% ! 🚋`, `Allez au restaurant au lieu de rester sur Discord !\n${loveLevel}`, false);
  if (loveIndex == 9) embed.addField(`${Math.floor(loveRandom)}% ! 🌞`, `Je suis presque jaloux de votre relation !\n${loveLevel}`, false);
  if (loveIndex == 10) embed.addField(`${Math.floor(loveRandom)}% ! 🪐`, `On dirait que les astres se sont alignés pour vous !\n${loveLevel}`, false);

  const errorMentionEmbed = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu bien exécuter la commande \`love\` !`, `Merci de mentionner un utilisateur du serveur !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();
  
  return args[0] = message.mentions.users.first() ? message.channel.send(embed) : message.channel.send(errorMentionEmbed);

};

module.exports.help = MESSAGES.COMMANDS.FUN.LOVE;