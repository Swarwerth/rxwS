const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require('discord.js');

module.exports.run = async (client, message, args) => {

  const number = {
    "1": "1️⃣",
    "2": "2️⃣",
    "3": "3️⃣",
    "4": "4️⃣",
    "5": "5️⃣",
    "6": "6️⃣",
  };

  const dice = Math.floor(Math.random()*6) + 1;

  const embed = new MessageEmbed()
    .setColor('#91c8ff')
    .setAuthor(`🎲 Générateur de dé`)
    .addField(`J'ai choisi la face`, number[dice], false)
    .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
    .setTimestamp();

  const botMessage = await message.channel.send(`🎲 Lancement !`);
  botMessage.edit(embed);

};

module.exports.help = MESSAGES.COMMANDS.FUN.DICE;