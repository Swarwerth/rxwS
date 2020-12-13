const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require("discord.js");

module.exports.run = async (client, message, args) => {

    const botMessage = await message.channel.send("〽️ Calcul...");

    const botEmbed = new MessageEmbed()
        .setColor('#2bb0b3')
        .setAuthor(`〽️ Temps de latence avec le serveur`, client.user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
        .setDescription(`https://github.com/Swarwerth/rxwS`)
        .setThumbnail(client.user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
        .addField(`🏓 Pong !`, client.ws.ping + ' ms', false)
        .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
        .setTimestamp();
    
    botMessage.edit(botEmbed);
};

module.exports.help = MESSAGES.COMMANDS.BOT.PING;