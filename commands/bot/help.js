const {MESSAGES} = require('../../util/constants');
const {MessageEmbed} = require("discord.js");

const {readdirSync} = require("fs");
const categoryList = readdirSync('./commands');

const {prefix} = require("../../config/bot.json");

module.exports.run = (client, message, args) => {

    let categoryName = {
        "bot": "🤖  Bot",
        "fun": "🎉  Fun",
        "misc": "🧨  Divers",
        "mod": "🔫  Modération",
        "music": "🎵  Musique",
    };

    let permissionName = {
        "KICK_MEMBERS": "Exclure un utilisateur",
        "BAN_MEMBERS": "Bannir un utilisateur",
        "MUTE_MEMBERS": "Rendre muet un utilisateur",
        "MANAGE_MESSAGES": "Gérer les messages",
        "MANAGE_ROLES": "Gérer les rôles",
        "ADMINISTRATOR": "Administrateur",
        "SEND_TTS_MESSAGES": "Envoyer des messages TTS",
        "": "Aucune"
    };

    const helpEmbed = new MessageEmbed()
        .setColor('#bb91ff')
        .setAuthor(`🚀 Commandes disponibles`, client.user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
        .setDescription(`Pour plus d'informations sur une commande, tapez \`${prefix}help <commande>\` !`)
        .setThumbnail(client.user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
        .setFooter(message.author.tag, message.author.displayAvatarURL({format:'png'}))
        .setTimestamp();
    
    const errorCommandHelpEmbed = new MessageEmbed()
        .setColor('#c43131')
        .setAuthor(`💢 Erreur !`)
        .addField(`La commande \`${args[0]}\` n'existe pas !`, `La liste des commandes est disponible en faisant \`${prefix}help\` ! Vérifie bien l'orthographe de la commande `, false)
        .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format:'png'}))
        .setTimestamp();

    if (!args.length) {
        for (const category of categoryList) {
            helpEmbed.addField(
                `> ${categoryName[category]}`,
                '`' + `${client.commands.filter(cat => cat.help.category === category.toLowerCase()).map(cmd => cmd.help.name).join('`, `')}` + '`'
                )
            };
        return message.channel.send(helpEmbed);
    } else {
        const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]));

        if(!command)
            return message.channel.send(errorCommandHelpEmbed);
        
        const helpCommandEmbed = new MessageEmbed()
            .setColor('#bb91ff')
            .setAuthor(`🚀 La commande ${command.help.name}`, client.user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
            .setThumbnail(client.user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
            .addFields(
                {name: `> Description`, value: '`' + command.help.description + '`', inline: false},
                {name: `> Catégorie`, value: '`' + categoryName[command.help.category] + '`', inline: false},
                {name: `> Utilisation`, value: command.help.usage ? '`' + `${prefix}${command.help.name} ${command.help.usage}` + '`' : '`' + `${prefix}${command.help.name}` + '`', inline: false},
                {name: `> Permission requise`, value: '`' + permissionName[command.help.permissionFlag] + '`', inline: false},
            )
            .setFooter(message.author.tag, message.author.displayAvatarURL({format:'png'}))
            .setTimestamp();
    
        if (command.help.aliases.length > 1)
                helpCommandEmbed.addField("> Aliases", '`' + command.help.aliases.join('`, `') + '`', false);
            
        return message.channel.send(helpCommandEmbed);
    };
};

module.exports.help = MESSAGES.COMMANDS.BOT.HELP;