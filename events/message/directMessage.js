const {MessageEmbed} = require('discord.js');
const {modChannel, guild} = require('../../config/guild.json')

module.exports = (client, message) => {

  const user = message.author;
  if (user.bot) return;

  const ticketLogsEmbed = new MessageEmbed()
    .setColor('#cfe3ff')
    .setAuthor(`🎯 ${user.tag} a envoyé une requête !`, user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setThumbnail(user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .addFields(
          {name: "> Utilisateur", value: user, inline: false},
          {name: "> Identifiant", value: '`' + user.id + '`', inline: false},
          {name: "> Message", value: message.content, inline: false},
    )
    .setTimestamp();

   const ticketEmbed = new MessageEmbed()
    .setColor('#cfe3ff')
    .setAuthor(`🎯 Nouvelle requête !`, client.guilds.cache.get(guild).iconURL({dynamic: true, size: 4096, format: 'png'}))
    .setThumbnail(client.guilds.cache.get(guild).iconURL({dynamic: true, size: 4096, format: 'png'}))
    .setDescription(`*${client.guilds.cache.get(guild).name}*`)
    .addField(`🎯 Votre requête a été envoyée à notre équipe !`, `Merci de patienter le temps que notre équipe vous réponde !`, false)
    .setTimestamp();

  user.send(ticketEmbed);
  client.channels.cache.get(modChannel).send(ticketLogsEmbed);
}