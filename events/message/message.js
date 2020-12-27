const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();

const {prefix} = require('../../config/bot.json');
const {MessageEmbed} = require('discord.js');

module.exports = (client, message) => {

  if (message.channel.type === 'dm') return client.emit('directMessage', message);

  const prefixEmbed = new MessageEmbed()
    .setColor('#edca1a')
    .setAuthor(`🔱 Préfixe !`)
    .addField(`Le préfixe de ${client.user.username} est :`, '`' + `${prefix}` + '`', false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  if (message.mentions.users.first() == client.user.id) return message.channel.send(prefixEmbed);
  
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  
  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  const user = message.mentions.users.first();

  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
  if (!command) return;

  const errorNotPermissionsCommandEmbed = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Tu ne peux pas utiliser la commande \`${commandName}\` !`, `Tu n'as pas les permissions requises pour utiliser cette commande ! Retrouve les en exécutant la commande \`${prefix}help ${commandName}\``, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();
  
  const errorIncompleteCommandEmbed = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`La commande saisie est incomplète, voici comment utiliser la commande :`, `\`${prefix}${command.help.name} ${command.help.usage}\``, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const errorNotOnServerCommandEmbed = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu utiliser la commande \`${commandName}\` sur cet utilisateur !`, `L'utilisateur mentionné ne fait pas parti du serveur Discord ! Merci de mentionner une personne du serveur !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  const errorNotPermissionsOnMemberCommandEmbed = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Tu ne peux pas utiliser la commande \`${commandName}\` sur cet utilisateur !`, `Vérifie bien que tu as les permissions requises pour utiliser la commande sur l'utilisateur !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setTimestamp();

  if (command.help.permissions && !message.member.hasPermission(command.help.permissionFlag)) return message.channel.send(errorNotPermissionsCommandEmbed);
  if (command.help.args && !args.length) return message.channel.send(errorIncompleteCommandEmbed);
  if (command.help.isUserAdmin && !user) return message.channel.send(errorNotOnServerCommandEmbed)
  if (command.help.isUserAdmin && message.guild.member(user).hasPermission(command.help.permissionFlag)) return message.channel.send (errorNotPermissionsOnMemberCommandEmbed);

  command.run(client, message, args);

};