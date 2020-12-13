const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require("discord.js");

const {logsChannel} = require("../../config/guild.json");

module.exports.run = async (client, message, args) => {

    const purgeErrorEmbed = new MessageEmbed()
        .setColor('#c43131')
        .setAuthor(`💢 Erreur !`)
        .setDescription(`${args[0]} est invalide ! La commande s'effectue avec nombre compris entre 1 et 100 !`)
        .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
        .setTimestamp();

    const purgeLogsEmbed = new MessageEmbed()
        .setColor('#37ad3d')
        .setAuthor(`🗑 ${args[0]} messages supprimés !`)
        .addFields(
          {name: `> Salon`, value: '<#' + message.channel.id + '>', inline: false},
        )
        .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
        .setTimestamp();

    if (isNaN(args[0]) || args[0] <= 1 || args[0] > 100) {
        return message.channel.send(purgeErrorEmbed);
    }

    const messages = await message.channel.messages.fetch({
        limit: Math.min(args[0], 100),
        before: message.id,
    });

    message.delete();
    await message.channel.bulkDelete(messages);
        
    client.channels.cache.get(logsChannel).send(purgeLogsEmbed);
};

module.exports.help = MESSAGES.COMMANDS.MOD.PURGE;