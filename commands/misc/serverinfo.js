const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

const moment = require('moment');
moment.locale('fr')

module.exports.run = (client, message, args) => {

  const region = {
    "brazil" : "🇧🇷 \`Brézil\`",
    "europe" : "🇪🇺 \`Europe\`",
    "hong-kong" : "🇭🇰 \`Hong Kong\`",
    "india" : "🇮🇳 \`Inde\`",
    "japan" : "🇯🇵 \`Japon\`",
    "russia" : "🇷🇺 \`Russia\`",
    "singapore" : "🇸🇬 \`Singapour\`",
    "south-africa" : "🇿🇦 \`Afrique du Sud\`",
    "sydney" : "🇦🇺 \`Australie\`",
    "us-central" : "🇺🇸 \`États-Unis (Centre)\`",
    "us-east" : "🇺🇸 \`États-Unis (Est)\`",
    "us-south" : "🇺🇸 \`États-Unis (Sud)\`",
    "us-west" : "🇺🇸 \`États-Unis (Ouest)\`",
  };

  const verificationLvl = {
    "NONE" : "Aucune",
    "LOW" : "Basse",
    "MEDIUM" : "Moyenne",
    "HIGH" : "Haute",
    "VERY_HIGH" : "Très haute"
  };

  const rolesMap = message.guild.roles.cache.map(role => role.toString());
  const emotesMap = message.guild.emojis.cache.map(emoji => emoji.toString());
  const channelsMap = message.guild.channels.cache.filter(channel => channel.type !== 'category');

  const categories = message.guild.channels.cache.filter(r => r.type === 'category');
  const texts = message.guild.channels.cache.filter(r => r.type === 'text');
  const voices = message.guild.channels.cache.filter(r => r.type === 'voice');

  const embed = new MessageEmbed()
    .setColor('#b3ffb9')
    .setAuthor(`🎪 Informations sur ${message.guild.name}`, message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .setDescription(`Quelles sont les caractéristiques de ce serveur ? 🤔`)
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .addFields(
        {name: `> Identifiant`, value: '`' + message.guild.id + '`', inline: true},
        {name: `> Localisation`, value: region[message.guild.region], inline: true},
        {name: `> Propriétaire`, value: message.guild.owner.user, inline: true},
        {name: `> Créé le`, value: '`' + moment(message.guild.createdAt).format('LLL') + '`', inline: true},
        {name: `> Vérification`, value: '`' + verificationLvl[message.guild.verificationLevel] + '`', inline: true},
        {name: `> Membres`, value: '`' + message.guild.memberCount + ' membres`',inline: true},
        {name: `> Salons [${channelsMap.size}]`, value: '`' + categories.size + ' catégories`' + '\n`' + texts.size + ' textuels`' + '\n`' + voices.size + ' vocaux`', inline: false},
        {name: `> Rôles [${rolesMap.length - 1}]`, value: rolesMap.join(', ').replace('@everyone, ', ''), inline: false},
        {name: `> Emojis [${emotesMap.length}]`, value: emotesMap.join(' '), inline: false},
    )
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  return message.channel.send(embed);

};

module.exports.help = MESSAGES.COMMANDS.MISC.SERVERINFO;