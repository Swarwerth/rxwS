# rxwS - Bot discord.js
  Un exemple de bot Discord, utilisant discord.js !
  Le code est essentiellement en Français 🇫🇷.
  Si vous avez besoin d'aide pour votre projet, vous pouvez me contacter sur Discord : `Swarwerth#2943`

  L'exemple est sous licence GPL. Merci de la respecter en mentionnant le nom Swarwerth dans votre code.

## ⚡ Installation

Vous devez d'abord, **télécharger le code** et avoir [Node.js](https://nodejs.org/) ainsi qu'avoir un **éditeur de code**, comme [Visual Studio Code](https://code.visualstudio.com/). Par la suite, vous devez modifier le fichier `config/bot.json/`. Vous devez replacer *TokeN* par le token de votre bot, pour le trouver, il vous suffit de vous rendre sur la page de [Discord Developpers](https://discordapp.com/developers/applications). Vous devez également replacer *TokenGeniuS* par votre token Genius pour générer les paroles. Pour l'obtenir, il vous faut vous rendre sur la page [Genius Developpers](https://genius.com/developpers).

```js
{
  // ...
  "token": "TokeN",
  // ...
  "apiGenius": "TokenGeniuS"
}
```

De plus, vous devez changer les identifiants de salon et de serveur dans `config/guild.json/`. Pour trouver ces identifiants, vous devez avoir le Mode Développeur Discord d'activé. Vous devez alors remplacer *ID* par ces identifiants.

```js
{
  "logsChannel": "ID",
  "modChannel": "ID",
  "guild" : "ID"
}
```

Maintenant, dernière étape, vous devez installer tous les modules avec cette commande, à inscrire dans la console :

```
npm install
```

## ☀ Allumer le bot

Toute l'installation a été effectuée, vous devez allumer le bot en utilisant, dans la console, la commande :

```
node index.js
```

Maintenant votre bot est allumé et tout est ok !

## 🎈 Fonctionnalités

#### 🤖 Commandes - Bot

| Commande              | Description                                                             | Aliases                                  | Usage                          |
| --------------------- | ------------------------------------------------------------------------| -----------------------------------------|--------------------------------|
| //botinfo             | Affiche les informations sur le bot                                     | bot, info                                | //botinfo                      |
| //eval                | Evalue le code donné                                                    | /                                        | //eval [message.guild]         |
| //help                | Affiche la liste des commandes et de leurs informations une par une     | commands, list                           | //help [avatar]                |
| //ping                | Affiche la latence du bot                                               | latence, pong                            | //ping                         |

#### 🎉 Commandes - Fun

| Commande              | Description                                                             | Aliases                                  | Usage                          |
| --------------------- | ------------------------------------------------------------------------| -----------------------------------------|--------------------------------|
| //bingo               | Lance un bingo                                                          | /                                        | //bingo 50                     |
| //dice                | Lance un dé                                                             | dé                                       | //dice                         |
| //joke                | Affiche une blague choisie au hasard                                    | blague                                   | //joke                         |
| //love                | Affiche le poucentage d'amour entre deux utilisateurs                   | affinity, amour, calclove                | //love @Swarwerth              |
| //question            | Répond à une question posée                                             | 8ball, ask                               | //question Suis-je beau ?      |
| //rps                 | Joue à Pierre, papier, ciseaux                                          | pfc, rock                                | //rps rock                     |
| //shoot               | Tue l'utilisateur mentionné                                             | kill, tuer                               | //shoot @Swarwerth             |

#### 🧨 Commandes - Divers

| Commande              | Description                                                             | Aliases                                  | Usage                          |
| --------------------- | ------------------------------------------------------------------------| -----------------------------------------|--------------------------------|
| //avatar              | Affiche l'avatar d'une personne                                         | logo, picture                            | //avatar [@Swarwerth]          |
| //calc                | Calcule une expression                                                  | /                                        | //calc 2+2                     |
| //fancytext           | Utilise les emojis pour écrire un texte                                 | emojitext, fancy                         | //fancytext Hello World!       |
| //fliptext            | Renverse un texte                                                       | flip                                     | //fliptext Hello World!        |
| //infoemoji           | Affiche les informations sur l'emoji                                    | emoji, emote, infoemote                  | //infoemoji :kappa:            |
| //instagram           | Affiche un profil Instagram                                             | insta                                    | //instagram swarwerth          |
| //poll                | Lance un sondage                                                        | quickpoll, sondage                       | //poll Suis-je beau ?          |
| //say                 | Fait parler le bot                                                      | repeat                                   | //say Hello World!             |
| //serverinfo          | Affiche les informations du serveur                                     | guild, server, serverstats, si           | //serverinfo                   |
| //userinfo            | Affiche les informations d'un utilisateur                               | ui, user, userstats                      | //userinfo [@Swarwerth]        |

#### 🔫 Commandes - Modération

| Commande              | Description                                                             | Aliases                                  | Usage                          |
| --------------------- | ------------------------------------------------------------------------| -----------------------------------------|--------------------------------|
| //ban                 | Bannit un utilisateur                                                   | /                                        | //ban @Swarwerth [Spam]        |
| //kick                | Exclut un utilisateur                                                   | /                                        | //kick @Swarwerth [Spam]       |
| //mute                | Rend muet un utilisateur                                                | chut, muet                               | //mute [60s] [Spam]            |
| //prune               | Supprime les messages d'un utilisateur                                  | /                                        | //prune @Swarwerth 50          |
| //purge               | Supprime les messages dans un salon donné                               | clear, suppr                             | //purge 50                     |
| //unban               | Supprime le bannissement d'un utilisateur                               | deban                                    | //unban 259302097197989888     |
| //unmute              | Rend la parole à une personne muette                                    | demute                                   | //unmute @Swarwerth            |

### 💵 Commandes - Économie

| Commande              | Description                                                             | Aliases                                  | Usage                          |
| --------------------- | ------------------------------------------------------------------------| -----------------------------------------|--------------------------------|
| //coinflip            | Fait un pari sur un lancer de pièce                                     | coin, flip                               | //coinflip 20 pile             |
| //daily               | Donne de l'argent quotidiennement                                       | /                                        | //daily                        |
| //give                | Donne de l'argent à l'utilisateur mentionné                             | /                                        | //give @Swarwerth 50           |
| //leaderboard         | Affiche le classement Money ou Réputation                               | lb, leader                               | //leaderboard [rep]            |
| //profil              | Affiche le profil de l'utilisateur                                      | me, money                                | //profil [@Swarwerth]          |
| //reputation          | Donne un point de réputation à l'utilisateur                            | point, rep                               | //reputation @Swarwerth        |
| //send                | Envoie de l'argent à l'utilisateur                                      | /                                        | //send @Swarwerth 50           |
| //work                | Travaille pour gagner de l'argent                                       | /                                        | //work                         |
| //works               | Affiche la liste des métiers et permet d'être recruté dans l'un d'eux   | /                                        | //works 1                      |

#### 🎵 Commandes - Musique
*Merci à [ZerioDev](https://github.com/ZerioDev/Music-bot) pour son aide !*

| Commande              | Description                                                             | Aliases                                  | Usage                          |
| --------------------- | ------------------------------------------------------------------------| -----------------------------------------|--------------------------------|
| //clearqueue          | Supprime la queue                                                       | cq, qc, queueclear                       | //clearqueue                   |
| //filter              | Ajoute un filtre à la queue en cours                                    | effect, filtre                           | //filter 8D                    |
| //filters             | Affiche la liste des filtres                                            | effectlist, filterslist                  | //filters                      |
| //loop                | Met en boucle une musique ou la queue                                   | boucle, replay                           | //loop                         |
| //lyrics              | Affiche les paroles de la musique en cours ou d'une recherchée          | l, paroles                               | //lyrics [Blame]               |
| //nowplaying          | Affiche les informations sur la musique en cours                        | np, time, timeleft, tl                   | //nowplaying                   |
| //pause               | Met en pause la musiquee en cours                                       | /                                        | //pause                        |
| //play                | Joue la musique donnée                                                  | joue, song, p                            | //play Blame                   |
| //queue               | Affiche la queue en cours                                               | list, q                                  | //queue                        |
| //resume              | Relance la queue en cours                                               | /                                        | //resume                       |
| //search              | Cherche une musique et lance celle choisie                              | sr                                       | //search Blame                 |
| //shuffle             | Tri de façon aléatoire la queue                                         | aléatoire, mélange, random               | //shuffle                      |
| //skip                | Saute une musique                                                       | s, sauter                                | //skip                         |
| //stop                | Arrête la lecture                                                       | /                                        | //stop                         |
| //volume              | Modifie le volume de la queue                                           | /                                        | //volume 80                    |

#### 🎞 Tickets

Vous pouvez envoyer un message privé au bot. Celui-ci enverra au salon modération défini dans `config/guild.json/` un ticket avec le message envoyé au bot !

## 🎏 Modules

- [@discordjs/opus](https://www.npmjs.com/package/@discordjs/opus)
- [axios](https://www.npmjs.com/package/axios)
- [discord-paginationembed](https://www.npmjs.com/package/discord-paginationembed)
- [discord-player](https://www.npmjs.com/package/discord-player)
- [discord.js](https://www.npmjs.com/package/discord.js)
- [ffmpeg-static](https://www.npmjs.com/package/opusscript)
- [fs](https://www.npmjs.com/package/fs)
- [genius-lyrics](https://www.npmjs.com/package/genius-lyrics)
- [math-expression-evaluator](https://www.npmjs.com/package/math-expression-evaluator)
- [moment](https://www.npmjs.com/package/moment)
- [ms](https://www.npmjs.com/package/ms)
- [opusscript](https://www.npmjs.com/package/opusscript)
- [quick.db](https://www.npmjs.com/package/quick.db)
- [ytdl-core](https://www.npmjs.com/package/ytdl-core)