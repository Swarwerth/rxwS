const {MESSAGES} = require("../../util/constants");
const {MessageEmbed} = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  const errorChannel = new MessageEmbed()
    .setColor("#c43131")
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`play\` !`, `Connectez-vous dans un salon vocal pour utiliser cette commande !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true, format: "png" }))
    .setTimestamp();

  const errorSameChannel = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`play\` !`, `Connectez-vous dans le même salon vocal pour utiliser cette commande !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  if (!message.member.voice.channel) return message.channel.send(errorChannel);
  if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(errorSameChannel);

  client.player.play(message, args.join(" "));

};

module.exports.help = MESSAGES.COMMANDS.MUSIC.PLAY;
