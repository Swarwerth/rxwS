const {MessageEmbed} = require('discord.js');

module.exports = (client, message, queue, track) => {

  const trackAdd = new MessageEmbed()
    .setColor('#dfccff')
    .setAuthor(`⏯ Musique ajoutée !`)
    .setThumbnail(track.thumbnail)
    .addField(`Musique ajoutée dans la queue :`, `${track.title}`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  message.channel.send(trackAdd);

};