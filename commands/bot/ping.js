const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

module.exports.run = async (client, message, args) => {

  const embed = new MessageEmbed()
    .setColor('#2bb0b3')
    .setAuthor(`〽️ Temps de latence avec le serveur`, client.user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTitle(`Github/Swarwerth/rxwS`)
    .setURL(`https://github.com/Swarwerth/rxwS/`)
    .setThumbnail(client.user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`🏓 Pong !`, client.ws.ping + ' ms', false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();
    
  const botMessage = await message.channel.send(`〽️ Calcul...`);
  return botMessage.edit(embed);

};

module.exports.help = MESSAGES.COMMANDS.BOT.PING;