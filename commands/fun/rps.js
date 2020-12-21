const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

module.exports.run = (client, message, args) => {

  const errorArgs = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`\`${args[0]}\` n'est pas défini !`, `Merci d'utiliser la commande \`rps\` avec *pierre*, *papier* ou *ciseaux* !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const rps = ['pierre', 'papier', 'ciseaux', 'rock', 'paper', 'scissors', '⛰️', '📄', '✂️', 'r', 'p', 's'];
  if (!rps.includes(args[0])) return message.channel.send(errorArgs);

  const emote = {
    'pierre': '⛰️',
    '⛰️': '⛰️',
    'rock' : '⛰️',
    'r': '⛰️',

    'papier': '📄',
    '📄': '📄',
    'paper': '📄',
    'p': '📄',

    'ciseaux': '✂️',
    '✂️': '✂️',
    'scissors': '✂️',
    's': '✂️',
  };

  const chooseArr = ["⛰️", "📄", "✂️"];
  const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

  const embed = new MessageEmbed()
    .setColor('#32a4a8')
    .setAuthor(`⛰️ Pierre, Papier, Ciseaux !`)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  if ((emote[args[0]] === '⛰️' && botChoice === '✂️') || (emote[args[0]] === '📄' && botChoice === '⛰️') || (emote[args[0]] === '✂️' && botChoice === '📄')) {
    embed.addField(`Tu as gagné ! Bravo 👏`, `${emote[args[0]]} contre ${botChoice}`, false);
  } else if (emote[args[0]] === botChoice) {
    embed.addField(`Égalité ! Sommes-nous connectés ? 🧐`, `${emote[args[0]]} contre ${botChoice}`, false);
  } else {
    embed.addField(`Tu as perdu ! Je pense être trop fort pour toi ! 🤠`, `${emote[args[0]]} contre ${botChoice}`, false);
  };

  return message.channel.send(embed);

};

module.exports.help = MESSAGES.COMMANDS.FUN.RPS;