const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

const {prefix} = require('../../config/bot.json');
const filters = require('../../config/filters.json');

module.exports.run = async (client, message, args) => {

  const errorChannel = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`filter\` !`, `Connectez-vous dans un salon vocal pour utiliser cette commande !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const errorSameChannel = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`filter\` !`, `Connectez-vous dans le même salon vocal pour utiliser cette commande !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const errorNoMusic = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`filter\` !`, `Aucune musique n'est jouée actuellement !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  if(!message.member.voice.channel) return message.channel.send(errorChannel);
  if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(errorSameChannel);
  if(!client.player.getQueue(message)) return message.channel.send(errorNoMusic);

  const errorValidFilter = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Merci de spécifier un filtre valide à activer ou désactiver !`, `Voici la liste des filtres disponibles :\nhttps://discord-player.js.org/global.html#Filters`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const errorNotFiltersFilter = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Le filtre mentionné n'existe pas !`, `Voici la liste des filtres disponibles :\nhttps://discord-player.js.org/global.html#Filters`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const filterEnableEmbed = new MessageEmbed()
    .setColor('#cce0ff')
    .setAuthor(`🪁 Filtre activé !`)
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`Le filtre \`${args[0]}\` est en cours d'activation, merci de patienter...`, `Plus la musique est longue, plus l'attente sera longue.\nPour désactiver le filtre, merci de taper \`${prefix}filter ${args[0]}\``, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const filterDisableEmbed = new MessageEmbed()
    .setColor('#cce0ff')
    .setAuthor(`🪁 Filtre désactivé !`)
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .addField(`Le filtre \`${args[0]}\` est en cours de désactivation, merci de patienter...`, `Plus la musique est longue, plus l'attente sera longue`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  if(!args[0]) return message.channel.send(errorValidFilter);

  const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());
  if(!filterToUpdate) return message.channel.send(errorNotFiltersFilter);

  const filtersUpdated = {};
  filtersUpdated[filterRealName] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

  client.player.setFilters(message, filtersUpdated);

  if (filtersUpdated[filterRealName]) message.channel.send(filterEnableEmbed);
  else message.channel.send(filterDisableEmbed);

};

module.exports.help = MESSAGES.COMMANDS.MUSIC.FILTER;

