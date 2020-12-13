const {MESSAGES} = require('../../util/constants');
const {MessageEmbed, Message} = require('discord.js');

const {stripIndents} = require('common-tags');
const fetch = require('node-fetch');

module.exports.run = async (client, message, args) => {

  const name = args.join(" ");
  const url = `https://instagram.com/${name}/?__a=1`;

  let res;

  try {
    res = await fetch(url).then(url => url.json());
  } catch (e) {
    return message.reply('OOPS!')
  };

  const account = res.graphql.user;

  const instagramEmbed = new MessageEmbed()
    .setColor('#D12E91')
    .setAuthor(`📷 Informations sur ${account.username}`, account.profile_pic_url_hd)
    .setThumbnail(account.profile_pic_url_hd)
    .setTitle(`Lien vers le profil`)
    .setURL(`https://instagram.com/${name}`)
    .addFields(
      {name: `> Pseudonyme`, value: '`' + account.username + '`', inline: true},
      {name: `> Nom complet`, value: account.full_name.length == 0 ? '`' + "Aucun" + '`' : '`' + account.full_name + '`', inline: true},
      {name: `> Privé ?`, value: account.is_private ? "🔐" : "🔓", inline: true},
      {name: `> Publications`, value: '`' + account.edge_owner_to_timeline_media.count + '`', inline: true},
      {name: `> Abonnés`, value: '`' + account.edge_followed_by.count + '`', inline: true},
      {name: `> Abonnements`, value: '`' + account.edge_follow.count + '`', inline: true},
      {name: `> Biographie`, value: account.biography.length == 0 ? '`' + "Aucune" + '`' : '`' + account.biography + '`', inline: false},
    )
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();
    
  message.channel.send(instagramEmbed);
};

module.exports.help = MESSAGES.COMMANDS.MISC.INSTAGRAM;