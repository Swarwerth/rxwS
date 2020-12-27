const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

const {logsChannel} = require('../../config/guild.json');

module.exports.run = async (client, message, args) => {

  const errorEmbed = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .setDescription(`${args[0]} est invalide ! La commande s'effectue avec nombre compris entre 1 et 100 !`)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const logsEmbed = new MessageEmbed()
    .setColor('#37ad3d')
    .setAuthor(`🗑 ${args[0]} messages supprimés !`)
    .addField(`> Salon`, message.channel, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  if (isNaN(args[0]) || args[0] <= 1 || args[0] > 100) return message.channel.send(errorEmbed);

  const messages = await message.channel.messages.fetch({
    limit: Math.min(args[0], 100),
    before: message.id,
  });

  message.delete();
  await message.channel.bulkDelete(messages);

  return client.channels.cache.get(logsChannel).send(logsEmbed);
  
};

module.exports.help = MESSAGES.COMMANDS.MOD.PURGE;