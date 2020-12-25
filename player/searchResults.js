const {MessageEmbed} = require('discord.js');

module.exports = (client, message, query, tracks) => {

  const searchResult = new MessageEmbed()
    .setColor('#dfccff')
    .setAuthor(`📶 Résultats !`)
    .setTitle(`Github/ZerioDev/Music-bot`)
    .setURL(`https://github.com/ZerioDev/Music-bot/`)
    .setDescription(`${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  message.channel.send(searchResult)

};