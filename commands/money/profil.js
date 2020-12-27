const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

const db = require('quick.db');

const {moneyemote} = require('../../config/bot.json');
const {repemote} = require('../../config/bot.json');

const {WORKS} = require('../../util/money');

module.exports.run = async (client, message, args) => {

  const user = message.mentions.users.first() || message.author;

  const nameworkarg = {
    'ONE': WORKS.ONE.name,
    'TWO': WORKS.TWO.name,
    'THREE': WORKS.THREE.name,
    'FOUR': WORKS.FOUR.name,
  };
  
  const money = db.fetch(`money_${user.id}`);
  const works = db.fetch(`works_${user.id}`);
  const reputation = db.fetch(`reputation_${user.id}`);

  const moneyEmbed = new MessageEmbed()
    .setColor('#3d93d9')
    .setAuthor(`💳 Profil de ${user.username}`)
    .setThumbnail(user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .addFields(
      {name: `> Argent`, value: `${money === null ? 0 : money} ${moneyemote}`, inline: true},
      {name: `> Réputation`, value: `${reputation === null ? 0 : reputation} ${repemote}`, inline: true},
      {name: `> Métier`, value: works === null ? '🛏 Aucun' : nameworkarg[works], inline: false}
      )
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  return message.channel.send(moneyEmbed);

};

module.exports.help = MESSAGES.COMMANDS.MONEY.PROFIL;