const {MessageEmbed} = require('discord.js');

module.exports = (client, message, queue) => {

  const {prefix} = require('../config/bot.json');

  const queueEnd = new MessageEmbed()
    .setColor('#ccfdff')
    .setAuthor(`🥏 Fin de la queue !`)
    .setTitle(`Github/ZerioDev/Music-bot`)
    .setURL(`https://github.com/ZerioDev/Music-bot/`)
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`Il ne reste plus aucune musique dans la queue !`, `Rajoutez des musiques avec la commande \`${prefix}play\` pour continuer !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();
    
  message.channel.send(queueEnd);

};