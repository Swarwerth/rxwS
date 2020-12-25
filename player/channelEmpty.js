const {MessageEmbed} = require('discord.js');

module.exports = (client, message, queue) => {

  const channelEmptyEmbed = new MessageEmbed()
    .setColor('#ccfdff')
    .setAuthor(`🥏 Musique arrêtée !`)
    .setTitle(`Github/ZerioDev/Music-bot`)
    .setURL(`https://github.com/ZerioDev/Music-bot/`)
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`Plus personne ne me tient compagnie...`, `Le bot s'arrête de jouer dès qu'il n'y a plus personne dans le salon vocal !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

    message.channel.send(channelEmptyEmbed);

};