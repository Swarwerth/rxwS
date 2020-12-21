const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

const db = require('quick.db');

const {moneyemote} = require('../../config/bot.json');

module.exports.run = async (client, message, args) => {

  const name = {
    "Pile": "Pile",
    "p": "Pile",
    "pile": "Pile",

    "Face": "Face",
    "f": "Face",
    "face": "Face"
  };
 
  const game = {
    "1": "Pile",
    "2": "Face"
  };

  const number = {
    "Pile": "1",
    "Face": "2"
  };

  const errorMoneyEmbed = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`coinflip\` !`, `Merci de rentrer un nombre valable, supérieur à 50 ${moneyemote} !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const errorFaceEmbed = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`coinflip\` !`, `Merci de rentrer une face valable (pile/face) !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const errorNoMoneyEmbed = new MessageEmbed()
    .setColor('#91c8ff')
    .setAuthor(`🏏 Tu ne peux pas utiliser la commande !`)
    .addField(`Tu n'as pas assez d'argent sur ton compte !`, `Tu ne peux pas parier de l'argent que tu n'as pas ! Merci de parier des ${moneyemote} déjà dans ton compte !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  if (isNaN(args[0]) || args[0] < 50) return message.channel.send(errorMoneyEmbed);
  if (name[args[1]] === undefined) return message.channel.send(errorFaceEmbed);
  
  const money = db.fetch(`money_${message.author.id}`);
  if (money < args[0]) return message.channel.send(errorNoMoneyEmbed);

  const flip = Math.floor(Math.random()*2) + 1;

  const embed = new MessageEmbed()
    .setColor('#91c8ff')
    .setAuthor(`🏏 Lancé de pièce !`)
    .setDescription(`Tu as effectué un pari de **${args[0]}** ${moneyemote} sur **${name[args[1]]}** !`)
    .addField(`La pièce est tombée sur :`, game[flip], false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  if (number[name[args[1]]] == flip) {

    db.add(`money_${message.author.id}`, args[0]);
    embed.addField(`Tu as gagné ton pari !`, `Tu as remporté ${args[0]} ${moneyemote} !`, false);

  } else if (number[name[args[1]]] !== flip) {

    db.add(`money_${message.author.id}`, `-${args[0]}`);
    embed.addField(`Tu as perdu ton pari !`, `Tu as perdu ${args[0]} ${moneyemote} !`, false);

  };

  const botMessage = await message.channel.send(`🏏 Lancement !`);
  botMessage.edit(embed);

};

module.exports.help = MESSAGES.COMMANDS.MONEY.COINFLIP;