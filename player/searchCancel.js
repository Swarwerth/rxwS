const {MessageEmbed} = require('discord.js');

module.exports = (client, message, query, tracks) => {

  const searchCancel = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Aucune réponse valide n'a été donnée !`, `Merci de retaper la commande \`play\` !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();
    
  message.channel.send(searchCancel);

};