const {MessageEmbed} = require('discord.js');

module.exports = (client, message, queue, playlist) => {

  const playlistAdd = new MessageEmbed()
    .setColor('#dfccff')
    .setAuthor(`⏯ Musiques ajoutées !`)
    .setTitle(`Lien vers la playlist`)
    .setURL(playlist.url)
    .setThumbnail(playlist.thumbnail)
    .addField(`La playlist **${playlist.title}** a été ajoutée à la queue !`, `${playlist.tracks.length} musiques ajoutées à la queue !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();
    
  message.channel.send(playlistAdd);

};