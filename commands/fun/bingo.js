const {MESSAGES} = require('../../util/constants');
const {MessageEmbed, MessageCollector} = require('discord.js');

const {prefix} = require('../../config/bot.json');

const ms = require('ms');

module.exports.run = async (client, message, args) => {

  const errorArgs = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`bingo\` !`, `Merci de rentrer un nombre entier entre 1 et 500 !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const embedStart = new MessageEmbed()
    .setColor('#91c8ff')
    .setAuthor(`💨 Génération d'un nombre`, message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`J'ai choisi un nombre compris entre 1 et ${parseInt(args[0])} !`, `À vous de retrouver ce nombre en 45s !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  if (isNaN(args[0]) || Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 500) return message.channel.send(errorArgs);

  const max = parseInt(args[0]);
  const rdm = Math.floor(Math.random()*max) + 1;

  message.channel.send(embedStart);

  const collector = new MessageCollector(message.channel, m => !m.author.bot, {
    time: ms('45s')
  });
  
  collector.on('collect', async msg => {
    if (msg.content === rdm.toString()) {

      const embedCollect = new MessageEmbed()
        .setColor('#91c8ff')
        .setAuthor(`💨 Nombre trouvé !`, message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
        .setThumbnail(message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
        .addField(`Le nombre ${rdm} a été trouvé !`, `Bravo à ${msg.author} !`, false)
        .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
        .setTimestamp();

      message.channel.send(embedCollect);
      return collector.stop(msg.author.username);

    };
  });
  
  collector.on('end', (_collected, reason) => {
    if (reason === 'time') {

      const embedEnd = new MessageEmbed()
        .setColor('#91c8ff')
        .setAuthor(`💨 Nombre pas trouvé !`, message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
        .setThumbnail(message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
        .addField(`Personne n'a pu trouver le nombre ${rdm} en 45s !`, `Vous pouvez retenter votre chance avec la commande \`${prefix}bingo\``, false)
        .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
        .setTimestamp();

      return message.channel.send(embedEnd);

    };
  });
};

module.exports.help = MESSAGES.COMMANDS.FUN.BINGO;