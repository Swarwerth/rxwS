const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require("discord.js");

module.exports.run = async (client, message, args) => {

  const lover = message.mentions.users.first();

  const love = Math.random() * 100;
  const loveIndex = Math.floor(love / 10);
  const loveLevel = ":heart:".repeat(loveIndex) + ":black_heart:".repeat(10 - loveIndex);

  const loveEmbed = new MessageEmbed()
    .setColor('#ff94f6')
    .setAuthor(`💙 Calcul d'Affinité`,lover.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .setDescription(`${message.author} est compatible avec ${lover} à`)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();
  
  if(loveIndex == 0) loveEmbed.addField(`${Math.floor(love)}% ! 👀`, `On va faire comme si on n'avait rien vu...\n${loveLevel}`, false);
  if(loveIndex == 1) loveEmbed.addField(`${Math.floor(love)}% ! 🔴`, `Il est préférable de ne pas en parler.\n${loveLevel}`, false);
  if(loveIndex == 2) loveEmbed.addField(`${Math.floor(love)}% ! 🎈`, `Il faudrait repenser vos plans...\n${loveLevel}`, false);
  if(loveIndex == 3) loveEmbed.addField(`${Math.floor(love)}% ! 🚩`, `Essayez toujours de rester amis !\n${loveLevel}`, false);
  if(loveIndex == 4) loveEmbed.addField(`${Math.floor(love)}% ! 🪁`, `Essayez toujours, peut-être que ça peut fonctionner !\n${loveLevel}`, false);
  if(loveIndex == 5) loveEmbed.addField(`${Math.floor(love)}% ! 🚕`, `Pourquoi pas après tout ?\n${loveLevel}`, false);
  if(loveIndex == 6) loveEmbed.addField(`${Math.floor(love)}% ! 🛌`, `Il y a des chances qu'on vous retrouve dans un lit tous les deux !\n${loveLevel}`, false);
  if(loveIndex == 7) loveEmbed.addField(`${Math.floor(love)}% ! 🪀`, `Cela devient sérieux par ici !\n${loveLevel}`, false);
  if(loveIndex == 8) loveEmbed.addField(`${Math.floor(love)}% ! 🚋`, `Allez au restaurant au lieu de rester sur Discord !\n${loveLevel}`, false);
  if(loveIndex == 9) loveEmbed.addField(`${Math.floor(love)}% ! 🌞`, `Je suis presque jaloux de votre relation !\n${loveLevel}`, false);
  if(loveIndex == 10) loveEmbed.addField(`${Math.floor(love)}% ! 🪐`, `On dirait que les astres se sont alignés pour vous !\n${loveLevel}`, false);

  const errorMentionLoveEmbed = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu bien exécuter la commande \`love\` !`, `Merci de mentionner un utilisateur du serveur !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();
  
  if(!args[0]) {
    message.channel.send(loveEmbed);
  };
      
  if(args[0]) {
    args[0] = message.mentions.users.first() ? message.channel.send(loveEmbed) : message.channel.send(errorMentionLoveEmbed) 
  };

};

module.exports.help = MESSAGES.COMMANDS.FUN.LOVE;