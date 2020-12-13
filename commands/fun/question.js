const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

module.exports.run = (client, message, args) => {

  const responses = [
    "Oui",
    "Non",
    "Absolument !",
    "Peut-être bien, qui sait ?",
    "Haha, bonne blague !",
    "Il faudrait méditer dessus...",
    "*beepbeep* Surchauffe, merci de reposer la question plus tard ! *beepbeep*",
    "Tu as vraiment poser cette question ?",
    "Espérons que oui !",
    "Espérons que non...",
    "Allo ? Le courrant passe mal par ici..."
  ];

  function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  let response = randomItem(responses)

  const questionEmbed = new MessageEmbed()
    .setColor('#a537fd')
    .setAuthor(`🎱 Je vais répondre à ta question...`)
    .addField(args.join(' '), response)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  message.channel.send(questionEmbed);
};

module.exports.help = MESSAGES.COMMANDS.FUN.QUESTION;