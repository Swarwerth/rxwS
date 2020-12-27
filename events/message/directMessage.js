const {MessageEmbed} = require('discord.js');
const {modChannel, guild} = require('../../config/guild.json')

module.exports = (client, message) => {

  if (message.author.bot) return;

  const ticketLogsEmbed = new MessageEmbed()
    .setColor('#cfe3ff')
    .setAuthor(`🎯 ${message.author.tag} a envoyé une requête !`, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setThumbnail(message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .addFields(
      {name: `> Utilisateur`, value: message.author, inline: true},
      {name: `> Identifiant`, value: '`' + message.author.id + '`', inline: true},
      {name: `> Message`, value: message.content, inline: false},
    )
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

   const ticketEmbed = new MessageEmbed()
    .setColor('#cfe3ff')
    .setAuthor(`🎯 Nouvelle requête !`, client.guilds.cache.get(guild).iconURL({dynamic: true, size: 4096, format: 'png'}))
    .setThumbnail(client.guilds.cache.get(guild).iconURL({dynamic: true, size: 4096, format: 'png'}))
    .setDescription(`*${client.guilds.cache.get(guild).name}*`)
    .addField(`🎯 Votre requête a été envoyée à notre équipe !`, `Merci de patienter le temps que notre équipe vous réponde !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  message.author.send(ticketEmbed);
  return client.channels.cache.get(modChannel).send(ticketLogsEmbed);

};