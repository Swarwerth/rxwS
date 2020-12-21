const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

const db = require('quick.db');

const {moneyemote} = require('../../config/bot.json');
const {repemote} = require('../../config/bot.json');

module.exports.run = async (client, message, args) => {

  const money = db.all().filter(data => data.ID.startsWith(`money`)).sort((a, b) => b.data - a.data);
  const reputation = db.all().filter(data => data.ID.startsWith(`reputation`)).sort((a, b) => b.data - a.data);

  if (!args[0]) {

    var finalLbmoney = '';
    for (var i in money) finalLbmoney += `\`${money.indexOf(money[i])+1}-\` <@${money[i].ID.split('_')[1]}> - ${money[i].data} ${moneyemote}\n`;

    const moneyEmbed = new MessageEmbed()
      .setColor('#3d93d9')
      .setAuthor(`📊 Classement monnaie !`, client.user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
      .setDescription(finalLbmoney)
      .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
      .setTimestamp();

    return message.channel.send(moneyEmbed);
  
  } else if (args[0] === 'rep' || 'reputation') {

    var finalLbrep = '';
    for (var i in reputation) finalLbrep += `\`${reputation.indexOf(reputation[i])+1}-\` <@${reputation[i].ID.split('_')[1]}> - ${reputation[i].data} ${repemote}\n`

    const repEmbed = new MessageEmbed()
      .setColor('#3d93d9')
      .setAuthor(`📊 Classement réputation !`, client.user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
      .setDescription(finalLbrep)
      .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
      .setTimestamp();

    return message.channel.send(repEmbed);

  };
};

module.exports.help = MESSAGES.COMMANDS.MONEY.LEADERBOARD;