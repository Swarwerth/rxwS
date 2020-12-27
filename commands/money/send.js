const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

const db = require('quick.db')

const {moneyemote} = require('../../config/bot.json');

module.exports.run = async (client, message, args) => {

  const errorArgs = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`send\` !`, `Merci d'effectuer la commande correctement en mentionnant une personne et en donnant un nombre correct !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const errorNoMoney = new MessageEmbed()
    .setColor('#91c8ff')
    .setAuthor(`🌙 Tu ne peux pas utiliser la commande !`)
    .addField(`Tu n'as pas assez d'argent sur ton compte !`, `Tu ne peux pas donner de l'argent que tu n'as pas ! Merci de donner des ${moneyemote} déjà dans ton compte !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const moneyAuthor = db.fetch(`money_${message.author.id}`);

  if (isNaN(args[1]) || args[1].includes('-')) return message.channel.send(errorArgs);
  if (moneyAuthor < args[1]) return message.channel.send(errorNoMoney);

  const soldeMention = await db.add(`money_${message.mentions.users.first().id}`, args[1]);
  const soldeAuthor = await db.add(`money_${message.author.id}`, `-${args[1]}`);

  const embed = new MessageEmbed()
    .setColor('#3d93d9')
    .setAuthor(`🌙 Transaction effectuée !`)
    .setDescription(`${message.author} vient de donner ${args[1]} ${moneyemote} à ${message.mentions.users.first()}`)
    .setThumbnail(message.mentions.users.first().displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .addFields(
      {name: `> Solde de ${message.author.username}`, value: `${soldeAuthor} ${moneyemote}`, inline: true},
      {name: `> Solde de ${message.mentions.users.first().username}`, value: `${soldeMention} ${moneyemote}`, inline: true}
    )
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const DMembed = new MessageEmbed()
    .setColor('#3d93d9')
    .setAuthor(`🌙 Tu as reçu de l'argent !`, message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .setDescription(`*${message.guild.name}*`)
    .setThumbnail(message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`${message.author.username} vient de te donner de l'argent !`, `**${args[1]}** ${moneyemote} ont été déposés sur ton compte !\nTu as actuellement ${soldeMention} ${moneyemote}.`)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  message.guild.member(message.mentions.users.first()).send(DMembed);
  return message.channel.send(embed);

};

module.exports.help = MESSAGES.COMMANDS.MONEY.SEND;