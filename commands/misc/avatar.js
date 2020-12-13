const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require("discord.js");

module.exports.run = (client, message, args) => {

  const user = message.mentions.users.first() || message.author;

  const avatarEmbed = new MessageEmbed()
    .setColor('#4287f5')
    .setAuthor(`🤳 Voici l'avatar de ${user.username}`)
    .setImage(user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const errorMentionAvatarEmbed = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu bien exécuter la commande \`avatar\` !`, `Merci de mentionner un utilisateur du serveur !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  if(!args[0]) {
    message.channel.send(avatarEmbed);
  };
    
  if(args[0]) {
  args[0] = message.mentions.users.first() ? message.channel.send(avatarEmbed) : message.channel.send(errorMentionAvatarEmbed) 
  };
};

module.exports.help = MESSAGES.COMMANDS.MISC.AVATAR;