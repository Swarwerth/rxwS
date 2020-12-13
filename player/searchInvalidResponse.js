const {MessageEmbed} = require('discord.js');

module.exports = (client, message, query, tracks, content, collector) => {

  const invalidResponse = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`play\` !`, `Merci de rentrer un nombre entre 1 et ${tracks.length} !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();
    
  message.channel.send(invalidResponse);

};