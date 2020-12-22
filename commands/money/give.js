const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

const db = require('quick.db');

const {idcreator, moneyemote} = require('../../config/bot.json');

module.exports.run = async (client, message, args) => {

  const errorNumber = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`give\` !`, `Merci d'effectuer la commande correctement en mentionnant une personne et en donnant un nombre correct !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const errorCreator = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Tu ne peux pas utiliser la commande \`give\` !`, `Tu n'as pas les permissions pour effectuer cette commande ! Seul le créateur de ce bot ne peut effectuer cette commande.`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  if (message.author.id !== idcreator) return message.channel.send(errorCreator);
  if (isNaN(args[1])) return message.channel.send(errorNumber);

  const solde = await db.add(`money_${message.mentions.users.first().id}`, args[1]);

  const embed = new MessageEmbed()
    .setColor('#3d93d9')
    .setAuthor(`🔆 Transaction effectuée !`)
    .setThumbnail(message.mentions.users.first().displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  if (args[1].includes('-')) embed.addField(`Le compte ${message.mentions.users.first().username} vient d'être débité !`, `**${args[1]}** ${moneyemote} ont été débités du compte de ${message.mentions.users.first()}.\nSon nouveau solde est de ${solde} ${moneyemote}.`, false)
  else if (!args[1].includes('-')) embed.addField(`Le compte ${message.mentions.users.first().username} vient d'être crédité !`, `**${args[1]}** ${moneyemote} ont été crédité du compte de ${message.mentions.users.first()}.\nSon nouveau solde est de ${solde} ${moneyemote}.`, false);

  return message.channel.send(embed);

};

module.exports.help = MESSAGES.COMMANDS.MONEY.GIVE;