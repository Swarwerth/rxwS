const MESSAGES = {
  COMMANDS: {
    BOT: {
      BOTINFO: {
        name: 'botinfo',
        aliases: ['info', 'bot'],
        description: "Permet d'obtenir des informations sur le bot",
        category: 'bot',
        permissions: false,
        permissionFlag: "",
        isUserAdmin: false,
        usage: "",
        args: false,
      },
      HELP: {
        name: 'help',
        aliases: ['commands', 'list'],
        description: "Permet d'obtenir la liste des commandes disponibles ainsi que des informations sur une commande donnée",
        category: 'bot',
        permissions: false,
        permissionFlag: "",
        isUserAdmin: false,
        usage: "[commande]",
        args: false,
      },
      PING: {
        name: 'ping',
        aliases: ['latence', 'pong'],
        description: "Permet d'obtenir la latence du Bot",
        category: 'bot',
        permissions: false,
        permissionFlag: "",
        isUserAdmin: false,
        usage: "",
        args: false,
      }
    },
    FUN: {
      DICE: {
        name: 'dice',
        aliases: ['dé', '6dice'],
        description : "Permet de lancer un dé",
        category: 'fun',
        permissions: false,
        permissionFlag: "",
        isUserAdmin: false,
        usage: "",
        args: false,
      },
      JOKE: {
        name: 'joke',
        aliases: ['jokes', 'blague', 'blagues'],
        description : "Permet d'obtenir une blague",
        category: 'fun',
        permissions: false,
        permissionFlag: "",
        isUserAdmin: false,
        usage: "",
        args: false,
      },
      LOVE: {
        name: 'love',
        aliases: ['amour', 'calclove', 'affinity'],
        description : "Permet de calculer votre affinité avec une autre personne",
        category: 'fun',
        permissions: false,
        permissionFlag: "",
        isUserAdmin: false,
        usage: "<@mention>",
        args: true,
      },
      QUESTION: {
        name: 'question',
        aliases: ['8ball', 'ask'],
        description : "Permet de poser une question au Bot",
        category: 'fun',
        permissions: false,
        permissionFlag: "",
        isUserAdmin: false,
        usage: "<question>",
        args: true,
      },
      RPS: {
        name: 'rps',
        aliases: ['rockpapercissors', 'pfc', 'pierrepapierciseaux'],
        description : "Permet d'obtenir de jouer au Pierre, Papier, Ciseaux",
        category: 'fun',
        permissions: false,
        permissionFlag: "",
        isUserAdmin: false,
        usage: "<pierre/papier/ciseaux>",
        args: true,
      },
      SHOOT: {
        name: 'shoot',
        aliases: ['tirer', 'kill'],
        description : "Permet de tuer quelqu'un",
        category: 'fun',
        permissions: false,
        permissionFlag: "",
        isUserAdmin: false,
        usage: "<@mention>",
        args: true,
      },
    },
    MISC: {
      AVATAR: {
        name: 'avatar',
        aliases: ['logo', 'picture'],
        description: "Permet d'afficher l'avatar de l'utilisateur",
        category: 'misc',
        permissions: false,
        permissionFlag: "",
        isUserAdmin: false,
        usage: "[@mention]",
        args: false,
      },
      CALC: {
        name: 'calc',
        aliases: ['calc'],
        description: "Permet d'obtenir le résultat d'un calcul",
        category: 'misc',
        permissions: false,
        permissionFlag: "",
        isUserAdmin: false,
        usage: "<calcul>",
        args: true,
      },
      FANCYTEXT: {
        name: "fancytext",
        aliases: ['fancy', 'emojitext'],
        description: "Permet d'envoyer un message retranscrits en Emojis",
        category: 'misc',
        permissions: false,
        permissionFlag: "",
        isUserAdmin: false,
        usage: "<message>",
        args: true,
      },
      FLIPTEXT: {
        name: "fliptext",
        aliases: ['flip', 'textflip'],
        description: "Permet d'envoyer un message à l'envers",
        category: 'misc',
        permissions: false,
        permissionFlag: "",
        isUserAdmin: false,
        usage: "<message>",
        args: true,
      },
      INFOEMOJI: {
        name: "infoemoji",
        aliases: ['emote', 'emoji', 'infoemote'],
        description: "Permet d'obtenir les informations sur un Emoji",
        category: 'misc',
        permissions: false,
        permissionFlag: "",
        isUserAdmin: false,
        usage: "<:emoji:>",
        args: true,
      },
      INSTAGRAM: {
        name: 'instagram',
        aliases: ['insta', 'inst'],
        description : "Permet d'obtenir des informations sur un compte Instagram",
        category: 'misc',
        permissions: false,
        permissionFlag: "",
        isUserAdmin: false,
        usage: "<compte>",
        args: true,
      },
      SAY: {
        name: "say",
        aliases: ['repeat', 'hey'],
        description: "Permet d'envoyer un message à travers le bot",
        category: 'misc',
        permissions: false,
        permissionFlag: "",
        isUserAdmin: false,
        usage: "<message>",
        args: true,
      },
      SERVERINFO: {
        name: "serverinfo",
        aliases: ['si', 'server', 'serverstats', 'guild', 'guildinfo', 'guildstats'],
        description: "Permet d'obtenir des informations sur le serveur",
        category: 'misc',
        permissions: false,
        permissionFlag: "",
        isUserAdmin: false,
        usage: "",
        args: false,
      },
      USERINFO: {
        name: "userinfo",
        aliases: ['ui', 'user', 'userstats'],
        description: "Permet d'obtenir des informations sur l'utilisateur",
        category: 'misc',
        permissions: false,
        permissionFlag: "",
        isUserAdmin: false,
        usage: "",
        args: false,
      },
    },
    MOD: {
      BAN: {
        name: "ban",
        aliases: ['ban'],
        description: "Permet de bannir un utilisateur",
        category: 'mod',
        permissions: true,
        permissionFlag: "BAN_MEMBERS",
        isUserAdmin: true,
        usage: "<@mention> [raison]",
        args: true,
      },
      KICK: {
        name: "kick",
        aliases: ['kick'],
        description: "Permet d'exclure un utilisateur",
        category: 'mod',
        permissions: true,
        permissionFlag: "KICK_MEMBERS",
        isUserAdmin: true,
        usage: "<@mention> [raison]",
        args: true,
      },
      MUTE: {
        name: "mute",
        aliases: ['muet', 'chut'],
        description: "Permet de rendre muet un utilisateur",
        category: 'mod',
        permissions: true,
        permissionFlag: "MUTE_MEMBERS",
        isUserAdmin: true,
        usage: "<@mention> <temps> [raison]",
        args: true,
      },
      POLL: {
        name: 'poll',
        aliases: ['sondage', 'quickpoll'],
        description: "Permet de lancer un sondage",
        category: 'mod',
        permissions: true,
        permissionFlag: "SEND_TTS_MESSAGES",
        isUserAdmin: false,
        usage: "<message>",
        args: true,
      },
      PRUNE: {
        name: "prune",
        aliases: ['prune'],
        description: "Permet de supprimer des messages d'un utilisateur",
        category: 'mod',
        permissions: true,
        permissionFlag: "MANAGE_MESSAGES",
        isUserAdmin: true,
        usage: "<@mention> <nombre>",
        args: true,
      },
      PURGE: {
        name: "purge",
        aliases: ['clear', 'suppr'],
        description: "Permet de supprimer des messages dans un salon",
        category: 'mod',
        permissions: true,
        permissionFlag: "MANAGE_MESSAGES",
        isUserAdmin: false,
        usage: "<nombre>",
        args: true,
      },
      UNBAN: {
        name: "unban",
        aliases: ['deban', 'debannir'],
        description: "Permet de débannir un utilisateur du serveur",
        category: 'mod',
        permissions: true,
        permissionFlag: "BAN_MEMBERS",
        isUserAdmin: false,
        usage: "<identifiant>",
        args: true,
      },
      UNMUTE: {
        name: "unmute",
        aliases: ['demute', 'demuter'],
        description: "Permet de rendre la parole à un utilisateur",
        category: 'mod',
        permissions: true,
        permissionFlag: "MUTE_MEMBERS",
        isUserAdmin: true,
        usage: "<@mention>",
        args: true,
      },
    },
    MUSIC: {
      CLEARQUEUE: {
        name: "clearqueue",
        aliases: ['cq', 'queueclear', 'qc'],
        description: "Supprime toutes les musiques qui sont dans la queue",
        category: 'music',
        permissions: false,
        permissionFlag: "",
        isUserAdmin: false,
        usage: "",
        args: false,
      },
      FILTER: {
        name: "filter",
        aliases: ['filtre', 'effect'],
        description: "Rajoute un filtre à la musique",
        category: 'music',
        permissions: false,
        permissionFlag: "",
        isUserAdmin: false,
        usage: "<filtre>",
        args: true,
      },
      FILTERS: {
        name: "filters",
        aliases: ['effectlist', 'filterslist', 'filterlist'],
        description: "Donne la liste des filtres et montre s'ils sont activés ou non",
        category: 'music',
        permissions: false,
        permissionFlag: "",
        isUserAdmin: false,
        usage: "",
        args: false,
      },
      LOOP: {
        name: "loop",
        aliases: ['boucle', 'replay'],
        description: "Mettre en boucle la musique",
        category: 'music',
        permissions: false,
        permissionFlag: "",
        isUserAdmin: false,
        usage: "",
        args: false,
      },
      NP: {
        name: "np",
        aliases: ['timeleft', 'tl', 'time'],
        description: "Afficher le temps restant d'une musique",
        category: 'music',
        permissions: false,
        permissionFlag: "",
        isUserAdmin: false,
        usage: "",
        args: false,
      },
      PAUSE: {
        name: "pause",
        aliases: ['pause'],
        description: "Met en pause une musique",
        category: 'music',
        permissions: false,
        permissionFlag: "",
        isUserAdmin: false,
        usage: "",
        args: false,
      },
      PLAY: {
        name: "play",
        aliases: ['joue', 'song', 'p'],
        description: "Met en pause une musique",
        category: 'music',
        permissions: false,
        permissionFlag: "",
        isUserAdmin: false,
        usage: "<musique>",
        args: true,
      },
      QUEUE: {
        name: "queue",
        aliases: ['q', 'list'],
        description: "Affiche la queue",
        category: 'music',
        permissions: false,
        permissionFlag: "",
        isUserAdmin: false,
        usage: "",
        args: false,
      },
      RESUME: {
        name: "resume",
        aliases: ['resume'],
        description: "Relance la queue en cours",
        category: 'music',
        permissions: false,
        permissionFlag: "",
        isUserAdmin: false,
        usage: "",
        args: false,
      },
      SHUFFLE: {
        name: "shuffle",
        aliases: ['random', 'aléatoire', 'mélange'],
        description: "Tri de façon aléatoire la queue",
        category: 'music',
        permissions: false,
        permissionFlag: "",
        isUserAdmin: false,
        usage: "",
        args: false,
      },
      SKIP: {
        name: "skip",
        aliases: ['s', 'sauter'],
        description: "Saute une musique",
        category: 'music',
        permissions: false,
        permissionFlag: "",
        isUserAdmin: false,
        usage: "",
        args: false,
      },
      STOP: {
        name: "stop",
        aliases: ['stop'],
        description: "Arrête la lecture",
        category: 'music',
        permissions: false,
        permissionFlag: "",
        isUserAdmin: false,
        usage: "",
        args: false,
      },
      VOLUME: {
        name: "volume",
        aliases: ['volume'],
        description: "Modifie le volume du bot",
        category: 'music',
        permissions: false,
        permissionFlag: "",
        isUserAdmin: false,
        usage: "<nombre>",
        args: true,
      },
    },
  }
};

exports.MESSAGES = MESSAGES;