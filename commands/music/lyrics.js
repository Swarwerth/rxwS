const {MESSAGES} = require('../../util/constants');
const {MessageEmbed, Message} = require('discord.js');

const {apiGenius} = require('../../config/bot.json');

const Pagination = require('discord-paginationembed')

const Genius = require('genius-lyrics');
const GeniusClient = new Genius.Client(apiGenius);

module.exports.run = async (client, message, args) => {

  const errorArgs = new MessageEmbed()
    .setColor('#c43131')
    .setAuthor(`💢 Erreur !`)
    .addField(`Je n'ai pas pu exécuter la commande \`lyrics\` !`, `Merci de spécifier une musique !`, false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  let search;

  if (!client.player.getQueue(message) && !args[0]) return message.channel.send(errorArgs);
  if (!client.player.getQueue(message) && args[0]) search = args.join(" ");
  if (client.player.getQueue(message) && !args[0]) search = client.player.nowPlaying(message).title.replace(/ *\([^)]*\) */g, '');
  if (client.player.getQueue(message) && args[0]) search = args.join(" ");

  try {

    const searches = await GeniusClient.songs.search(search);
    const firstSong = searches[0];

    const lyrics = await firstSong.lyrics();

    const lyricsIndex = Math.round(lyrics.length / 1024) + 1;
    const lyricsArray = [];

    for (let i = 1; i <= lyricsIndex; ++i) {

      let b = i - 1;

      lyricsArray.push(
        new MessageEmbed()
          .setColor('#ffe2cc')
          .setAuthor(`📻 Paroles de ${firstSong.fullTitle} | Page #${i}`)
          .setThumbnail(firstSong.image)
          .setTitle(`Lien vers Genius`)
          .setURL(firstSong.url)
          .setDescription(lyrics.slice(b * 1024, i * 1024))
          .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
          .setTimestamp()
          
      );
    };

    const lyricsEmbed = new Pagination.Embeds()
      .setArray(lyricsArray)
      .setAuthorizedUsers([message.author.id])
      .setChannel(message.channel)

    lyricsEmbed.build();

  } catch(e) {

    const error = new MessageEmbed()
      .setColor('#c43131')
      .setAuthor(`💢 Erreur !`)
      .addField(`Je n'ai pas pu exécuter la commande \`lyrics\` !`, `Merci de réessayer ultérieurement la commande !`, false)
      .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
      .setTimestamp();

    message.channel.send(error)
  
  };
};

module.exports.help = MESSAGES.COMMANDS.MUSIC.LYRICS;