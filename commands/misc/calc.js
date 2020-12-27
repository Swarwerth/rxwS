const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

const math = require('math-expression-evaluator');

module.exports.run = (client, message, args) => {

  const calcul = args.join(' ');

  const errorEmbed = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu bien exécuter la commande \`calc\` !`, `Merci d'envoyer une équation mathématique valide !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  let answer;
  try {
    answer = math.eval(calcul);
  } catch (err) {
    return message.channel.send(errorEmbed);
  };

  const embed = new MessageEmbed()
    .setColor('#1f316b')
    .setAuthor(`🧮 Calculatrice`, message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`${calcul} =`, answer)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  return message.channel.send(embed);
  
};

module.exports.help = MESSAGES.COMMANDS.MISC.CALC;