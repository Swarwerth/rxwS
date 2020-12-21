const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

module.exports.run = async (client, message, args) => {

  random();

  if (rdm == 1) {
    question = "Qu'est-ce qui est bleu et qui descend ?"
    answer = "Marseille dans le classement !"
  };

  if (rdm == 2) {
    question = "Que fait un crocodile quand il rencontre une superbe femelle ?"
    answer = "Il lacoste !"
  };

  if (rdm == 3) {
    question = "Qu'est-ce qui n'est pas un steck ?"
    answer = "Une pastèque !"
  };

  if (rdm == 4) {
    question = "Quelle est la mamie qui fait peur aux voleurs ?"
    answer = "Mamie traillette !"
  };

  if (rdm == 5) {
    question = "Quel est le pays le plus cool au monde ?"
    answer = "Le Yémen !"
  };

  if (rdm == 6) {
    question = "C'est l'histoire d'un schtroumpf qui tombe,"
    answer = "et qui se fait un bleu."
  };

  if (rdm == 7) {
    question = "Pourquoi les vaches ferment-elles les yeux pendant la traite de lait ?"
    answer = "Pour faire du lait concentré !"
  };

  if (rdm == 8) {
    question = "Pourquoi il y a pas de ballon sur le plateau de Question pour un champion ?"
    answer = "Parce que Julien Lepers !"
  };

  if (rdm == 9) {
    question = "C'est l'histoire d'un cheval qui s'appelle Terus,"
    answer = "et à chaque fois qu'on monte dessus, cela fait Huuuuuu terus !"
  };

  if (rdm == 10) {
    question = "Comment appelle-t-on une chauve souris qui a des cheveux ?"
    answer = "Une souris"
  };

  if (rdm == 11) {
    question = "Deux amis contemplent le ciel :"
    answer = "- Tu crois que la lune est habitée ? demande l'un d'eux\n- Bien sûr, répond l'autre, c'est allumé tous les soirs !"
  };

  if (rdm == 12) {
    question = "Saviez-vous ques les girafes n'existes pas ?"
    answer = "Puisque c'est un cou monté !"
  };

  if (rdm == 13) {
    question = "Une carotte veut se suicider, elle échoue, elle dit alors :"
    answer = "Zut ! C'est râpé !"
  };

  if (rdm == 14) {
    question = "C'est un clown qui arrive chez le docteur, et il dit :"
    answer = "- Docteur ! Docteur ! Vite ! Je me sens tout drôle !"
  };

  if (rdm == 15) {
    question = "C'est l'histoire de deux volcans. L'un dit à l'autre :"
    answer = "Ça te dérange pas si je fume ?"
  };

  if (rdm == 16) {
    question = "Comment appelle-t-on une cigogne qui n'est pas intelligente ?"
    answer = "Une si conne !"
  };

  if (rdm == 17) {
    question = "J'ai une blague sur les magasins,"
    answer = "mais elle n'a pas supermarché !"
  };

  if (rdm == 18) {
    question = "Pourquoi est-ce difficile de conduire dans le Nord ?"
    answer = "Parce que les voitures n'arrêtent Pas de Calais !"
  };

  if (rdm == 19) {
    question = "Pourquoi est-ce qu'on met tous les crocs en prison ?"
    answer = "Parce que les crocos dealent."
  };

  if (rdm == 20) {
    question = "Pourquoi dit-on que les poissons travaillent illégalement ?"
    answer = "Parce qu'ils n'ont pas de FISH de paie !"
  };

  if (rdm == 21) {
    question = "Pourquoi est-ce que les mexicains mangent-ils aux toilettes ?"
    answer = "Parce qu'ils aiment manger épicé !"
  };

  if (rdm == 22) {
    question = "Pourquoi les livres ont-ils toujours chauds ?"
    answer = "Parce qu'ils ont une couverture !"
  };

  if (rdm == 23) {
    question = "Monsieur et madame Lonais ont un fils. Comment s’appelle-t-il ?"
    answer = "Paul !"
  };

  if (rdm == 24) {
    question = "Comment fait-on aboyer un chat ?"
    answer = "On lui donne une tasse de lait et il la boit !"
  };

  if (rdm == 25) {
    question = "Monsieur et madame Yste ont une fille. Comment s’appelle-t-elle ?"
    answer = "Fleur !"
  };

  function random(min, max) {
    min = Math.ceil(1);
    max = Math.floor(25);
    rdm = Math.floor(Math.random() * (max - min + 1) + min);
  };

  const embed = new MessageEmbed()
    .setColor('#a537fd')
    .setAuthor(`🎆 Blague du bot !`)
    .addField(question, answer)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  return message.channel.send(embed);

};

module.exports.help = MESSAGES.COMMANDS.FUN.JOKE;