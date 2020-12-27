const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

const db = require('quick.db');
const ms = require('ms');

const {prefix} = require('../../config/bot.json');
const {moneyemote} = require('../../config/bot.json');

module.exports.run = async (client, message, args) => {

  const works = await db.fetch(`works_${message.author.id}`);
  const worktime = await db.fetch(`work_${message.author.id}`)

  const Worktimeout = works === 'ONE' ? ms('3h') : works === 'TWO' ? ms('30m') : works === 'THREE' ? ms('5h') : works === 'FOUR' ? ms('2h') : '0';
  const Workamount = works === 'ONE' ? '50' : works === 'TWO' ? '20' : works === 'THREE' ? '80' : works === 'FOUR' ? '35' : '0';

  const errorWorkEmbed = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Tu n'as pas de métier !`, `La liste des méties est disponible en faisant \`${prefix}works\` ! Merci de rejoindre un métier pour pouvoir utiliser la commande \`${prefix}work\` !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();
  
  if (works == null) return message.channel.send(errorWorkEmbed)
  
  if (works !== null && Worktimeout - (Date.now() - worktime) > 0) {
    
    const time = Worktimeout - (Date.now() - worktime);

    const errorWork = new MessageEmbed()
      .setColor('#3d93d9')
      .setAuthor(`🛷 Le temps n'est pas encore écoulé...`)
      .addField(`Tu ne peux pas encore récupérer ton salaire !`, `Reviens dans **${ms(time)}** 🕔 !`, false)
      .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
      .setTimestamp();

    return message.channel.send(errorWork);

  } else {

    db.add(`money_${message.author.id}`, Workamount);
    db.set(`work_${message.author.id}`, Date.now());

    const workEmbed = new MessageEmbed()
      .setColor('#3d93d9')
      .setAuthor(`🛷 Travail effectué !`)
      .setThumbnail(message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
      .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
      .setTimestamp();

    if (works === 'ONE') workEmbed.addField(`Le dragon a été vaincu !`, `Tu récupères le stuff et le vends au marchant le plus proche. Tu remportes **${Workamount}** ${moneyemote} !`);
    if (works === 'TWO') workEmbed.addField(`Tu as terminé tes heures de travail !`, `Tu remontes à la surface et tu vas vendre tes ressources au marchant. Tu remportes **${Workamount}** ${moneyemote} !`)
    if (works === 'THREE') workEmbed.addField(`Tu viens de terminer tes heures de recherches !`, `Tu es passé par l'accueil et reçoit ta paie. Tu remportes **${Workamount}** ${moneyemote} !`)
    if (works === 'FOUR') workEmbed.addField(`Tu as vaincu tous les gobelins !`, `Le roi te convoque et te donne ta récompense. Tu remportes **${Workamount}** ${moneyemote} !`)
    
    return message.channel.send(workEmbed);

  };
};

module.exports.help = MESSAGES.COMMANDS.MONEY.WORK;