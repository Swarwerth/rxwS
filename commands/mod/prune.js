const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require("discord.js");

const {logsChannel} = require("../../config/guild.json");

module.exports.run = async (client, message, args) => {

    let user = message.guild.member(message.mentions.users.first());

    const pruneErrorEmbed = new MessageEmbed()
        .setColor('#c43131')
        .setAuthor(`💢 Erreur !`)
        .setDescription(`${args[1]} est invalide ! La commande s'effectue avec nombre compris entre 1 et 100 !`)
        .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
        .setTimestamp();

    const pruneNoMessagesErrorEmbed = new MessageEmbed()
        .setColor('#c43131')
        .setAuthor(`💢 Erreur !`)
        .setDescription(`${user.user.username} n'a envoyé aucun message dans ce salon !`)
        .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
        .setTimestamp();

    const purgeLogsEmbed = new MessageEmbed()
        .setColor('#37ad3d')
        .setAuthor(`🪀 ${args[1]} messages supprimés !`)
        .addFields(
          {name: `> Salon`, value: '<#' + message.channel.id + '>', inline: false},
          {name: `> Utilisateur`, value: user, inline: false}
        )
        .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
        .setTimestamp();

    if (isNaN(args[1]) || args[1] <= 1 || args[1] > 100) {
        return message.channel.send(pruneErrorEmbed);
    };

    const messages = (await message.channel.messages.fetch({
        limit: 100,
        before: message.id,
    })).filter(a => a.author.id === user.id).array();

    messages.length = Math.min(args[1], messages.length);

    if(messages.length === 0) {
      return message.channel.send(pruneNoMessagesErrorEmbed);
    };

    if(messages.length === 1) await messages[0].delete();
    else await message.channel.bulkDelete(messages);
    message.delete();
        
    client.channels.cache.get(logsChannel).send(purgeLogsEmbed);
};

module.exports.help = MESSAGES.COMMANDS.MOD.PRUNE;