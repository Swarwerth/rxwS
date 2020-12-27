const {MessageEmbed} = require('discord.js');

module.exports = (client, message, queue) => {

  const {prefix} = require('../config/bot.json');

  const botDisconnectEmbed = new MessageEmbed()
    .setColor('#ccfdff')
    .setAuthor(`🥏 Fin de la queue !`)
    .setTitle(`Github/ZerioDev/Music-bot`)
    .setURL(`https://github.com/ZerioDev/Music-bot/`)
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`J'ai été déconnecté du salon !`, `La musique a été arrêtée. Vous pouvez jouer de nouvelles chansons avec \`${prefix}play\` !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  message.channel.send(botDisconnectEmbed);
};
