const {MessageEmbed} = require('discord.js');

module.exports = (client, message, query, tracks, content, collector) => {

  const {prefix} = require('../config/bot.json');

  const searchStop = new MessageEmbed()
    .setColor('#dfccff')
    .setAuthor(`📶 Recherche annulée !`)
    .setTitle(`Github/ZerioDev/Music-bot`)
    .setURL(`https://github.com/ZerioDev/Music-bot/`)
    .addField(`La recherche a été annulée !`, `Tu as utilisé le mot \`cancel\` pour annuler la recherche ! Tu peux réeffectuer une recherche en utilisant la commande \`${prefix}search\``)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const invalidResponse = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`play\` !`, `Merci de rentrer un nombre entre 1 et ${tracks.length} !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();
  
  if (content === 'cancel') {

    collector.stop();
    return message.channel.send(searchStop);

  } else message.channel.send(invalidResponse);

};