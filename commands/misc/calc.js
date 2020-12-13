const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');
const math = require('math-expression-evaluator')

module.exports.run = (client, message, args) => {

  const calcul = args.join(' ');

  const errorCalcEmbed = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu bien exécuter la commande \`calc\` !`, `Merci d'envoyer une équation mathématique valide !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  let answer;
  try {
    answer = math.eval(calcul);
  } catch (err) {
    return message.channel.send(errorCalcEmbed);
  };

  const calcEmbed = new MessageEmbed()
    .setColor('#1f316b')
    .setAuthor("🧮 Calculatrice")
    .addField(`${calcul} =`, answer)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  message.channel.send(calcEmbed)
  
};

module.exports.help = MESSAGES.COMMANDS.MISC.CALC;