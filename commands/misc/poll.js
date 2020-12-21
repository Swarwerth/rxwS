const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

module.exports.run = async (client, message, args) => {

  const embed = new MessageEmbed()
    .setColor('#feb063')
    .setAuthor(`🎡 Sondage !`, message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .setDescription(`Un sondage vient d'être lancée par ${message.author}`)
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .addFields(
      {name: args.join(" "), value: `Votez Pour/Oui avec ✅ \nou\nContre/Non avec ❌ !`, inline: false}
    )
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  return message.channel.send(embed)
    .then(async msg => {
      await msg.react('✅') == msg.react('❌')
  });

};

module.exports.help = MESSAGES.COMMANDS.MISC.POLL;