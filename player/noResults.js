const {MessageEmbed} = require('discord.js');

module.exports = (client, message, query) => {

  const noResults = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`play\` correctement !`, `Je n'ai trouvé aucune vidéo pour ${query} ! Merci de lancer une autre vidéo !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  message.channel.send(noResults);

};