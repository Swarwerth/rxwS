const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

const axios = require('axios');

module.exports.run = async (client, message, args) => {

  const errorEmbed = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`insta\` !`, `Merci d'indiquer un compte Instragram existant !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  let url, response, account, details;
  try {
    url = `https://instagram.com/${args[0]}/?__a=1`
    response = await axios.get(url)
    account = response.data 
    details = account.graphql.user
  } catch (e) {
    return message.channel.send(errorEmbed)
  };

  const embed = new MessageEmbed()
    .setColor('#D12E91')
    .setAuthor(`📸 Informations sur ${details.username}${details.is_verified ? ' ✅' : ''} ${details.is_private ? '🔒' : ''}`, details.profile_pic_url_hd)
    .setThumbnail(details.profile_pic_url_hd)
    .setTitle(`Lien vers le profil`)
    .setURL(`https://instagram.com/${args[0]}/`)
    .setDescription(details.biography)
    .addFields(
      {name: `> Nom complet`, value: details.full_name.length == 0 ? '`' + "Aucun" + '`' : '`' + details.full_name.toLocaleString() + '`', inline: true},
      {name: `> Publications`, value: '`' + details.edge_owner_to_timeline_media.count.toLocaleString() + '`', inline: true},
      {name: `> Abonnés`, value: '`' + details.edge_followed_by.count.toLocaleString() + '`', inline: true},
      {name: `> Abonnements`, value: '`' + details.edge_follow.count.toLocaleString() + '`', inline: true},
    )
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  return message.channel.send(embed);

};

module.exports.help = MESSAGES.COMMANDS.MISC.INSTAGRAM;