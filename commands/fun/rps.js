const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

module.exports.run = (client, message, args) => {

  const errorRPSEmbed = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`\`${args[0]}\` n'est pas défini !`, `Merci d'utiliser la commande \`rps\` avec *pierre*, *papier* ou *ciseaux* !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  let rps = ['pierre', 'papier', 'ciseaux', 'rock', 'paper', 'scissors', '⛰️', '📄', '✂️', 'r', 'p', 's'];
  if(!rps.includes(args[0])) return message.channel.send(errorRPSEmbed);

  let emote = {
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

  const rpsEmbed = new MessageEmbed()
    .setColor('#32a4a8')
    .setAuthor(`⛰️ Pierre, Papier, Ciseaux !`)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  if((emote[args[0]] === '⛰️' && botChoice === '✂️') ||
  (emote[args[0]] === '📄' && botChoice === '⛰️') ||
  (emote[args[0]] === '✂️' && botChoice === '📄')
  ) {
    rpsEmbed.addField(`Tu as gagné ! Bravo 👏`, `${emote[args[0]]} contre ${botChoice}`, false)
  } else if (emote[args[0]] === botChoice) {
    rpsEmbed.addField(`Égalité ! Sommes-nous connectés ? 🧐`, `${emote[args[0]]} contre ${botChoice}`, false)
  } else {
    rpsEmbed.addField(`Tu as perdu ! Je pense être trop fort pour toi ! 🤠`, `${emote[args[0]]} contre ${botChoice}`, false)
  };

  message.channel.send(rpsEmbed);

};

module.exports.help = MESSAGES.COMMANDS.FUN.RPS;