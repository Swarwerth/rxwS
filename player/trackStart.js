const {MessageEmbed} = require('discord.js');

module.exports = (client, message, track) => {

  const trackStart = new MessageEmbed()
    .setColor('#dfccff')
    .setAuthor(`⏯ Musique lancée !`)
    .setThumbnail(track.thumbnail)
    .addField(`Musique jouée actuellement :`, track.title, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  message.channel.send(trackStart);

};