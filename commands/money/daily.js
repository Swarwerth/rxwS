const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

const db = require('quick.db');
const ms = require('ms');

const {moneyemote} = require('../../config/bot.json');

const {DAILY} = require('../../util/money');

module.exports.run = async (client, message, args) => {

  const daily = await db.fetch(`daily_${message.author.id}`);
  
  if (daily !== null && DAILY.timeout - (Date.now() - daily) > 0) {
    
    const time = DAILY.timeout - (Date.now() - daily);

    const errorDaily = new MessageEmbed()
      .setColor('#3d93d9')
      .setAuthor(`🎊 Le temps n'est pas encore écoulé...`)
      .addField(`Ahah, petit malin, tu ne peux pas obtenir de l'argent dans la même journée !`, `Reviens dans **${ms(time)}** 🕔 !`, false)
      .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
      .setTimestamp();

    return message.channel.send(errorDaily);

  } else {

    db.add(`money_${message.author.id}`, DAILY.amount);
    db.set(`daily_${message.author.id}`, Date.now());

    const embed = new MessageEmbed()
      .setColor('#3d93d9')
      .setAuthor(`🎊 De l'argent coule à flot !`)
      .setThumbnail(message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
      .addField(`Tu viens de remporter de l'argent !`, `La journée est bonne pour toi ! **${DAILY.amount}** ${moneyemote} ont été crédités sur ton compte !`, false)
      .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
      .setTimestamp();
    
    return message.channel.send(embed);

  };
};

module.exports.help = MESSAGES.COMMANDS.MONEY.DAILY;