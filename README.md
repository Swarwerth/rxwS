# rxwS - Bot discord.js
  An exemple of a Discord bot, using discord.js.
  The code is essantially in **French** 🇫🇷. *It will maybe translate 👀*.
  If you need help for your project, you can contact me in *Discussion* or in Discord: `Swarwerth#2943`

## ⚡ Installation

You need first of all, to **download the code** and have [Node.js](https://nodejs.org/) and a **code editor**, like [Visual Studio Code](https://code.visualstudio.com/). Then, you need to modify file `config/bot.json/`.
You need to replace \*token\* by your token. You can find the bot's token on the [Discord Developpers](https://discordapp.com/developers/applications) page.

```js
{
  "token": "*token*",
}
```

Moreover, you need to change the ID in the `config/guild.json` file. To find the channels' ID and the guild's ID, you need to have the developper mode in Discord. You need to replace \*id\* by the ID's.

```js
{
  "logsChannel": "*id*",
  "modChannel": "*id*",
  "guild" : "*id*"
}
```

Now, you need to install all dependencies. With the console, write:

```
npm install
```

## ☀ Turn on the bot

All the installation is done, you can now start your bot, with **node**. In the console, you need to write:

```
node index.js
```

Now, your bot is on and all is ok!

## 🎈 Features

#### 🤖 Bot commands

| Command               | Description                                                             | Aliases                                  | Usage                          |
| --------------------- | ------------------------------------------------------------------------| -----------------------------------------|--------------------------------|
| //botinfo             | Display informations about the bot                                      | bot, info                                | //botinfo                      |
| //help                | Display all the commands                                                | commands, list                           | //help [avatar]                |
| //ping                | Display the bot's latence                                               | latence, pong                            | //ping                         |

#### 🎉 Fun commands

| Command               | Description                                                             | Aliases                                  | Usage                          |
| --------------------- | ------------------------------------------------------------------------| -----------------------------------------|--------------------------------|
| //dice                | Throw a dice                                                            | dé                                       | //dice                         |
| //joke                | Display a joke                                                          | blague                                   | //joke                         |
| //love                | Display the percentage of love between two users                        | affinity, amour, calclove                | //love @Swarwerth              |
| //question            | Answer to a question asked                                              | 8ball, ask                               | //question Am I beautiful?     |
| //rps                 | Play Rock, paper, scissors                                              | pfc, rock                                | //rps rock                     |
| //shoot               | Kill the mentionned user                                                | kill, tuer                               | //shoot @Swarwerth             |

#### 🧨 Miscellaneous commands

| Command               | Description                                                             | Aliases                                  | Usage                          |
| --------------------- | ------------------------------------------------------------------------| -----------------------------------------|--------------------------------|
| //avatar              | Display someone's avatar                                                | logo, picture                            | //avatar [@Swarwerth]          |
| //calc                | Calculate an expression                                                 | /                                        | //calc 2+2                     |
| //fancytext           | Use emoji to write a text                                               | emojitext, fancy                         | //text Hello World!            |
| //fliptext            | Flip a text                                                             | flip                                     | //fliptext Hello World!        |
| //infoemoji           | Display emoji's informations                                            | emoji, emote, infoemote                  | //infoemoji :kappa:            |
| //instagram           | Display an instagram profil                                             | insta                                    | //instagram swarwerth          |
| //poll                | Threw a poll                                                            | quickpoll, sondage                       | //poll Am I beautiful?         |
| //say                 | Make talk the bot                                                       | repeat                                   | //say Hello World!             |
| //serverinfo          | Display the server's informations                                       | guild, server, serverstats, si           | //serverinfo                   |
| //userinfo            | Display the user's informations                                         | ui, user, userstats                      | //userinfo @Swarwerth          |

#### 🔫 Moderation

| Command               | Description                                                             | Aliases                                  | Usage                          |
| --------------------- | ------------------------------------------------------------------------| -----------------------------------------|--------------------------------|
| //ban                 | Ban an user                                                             | /                                        | //ban @Swarwerth [Spam]        |
| //kick                | Kick an user                                                            | /                                        | //kick @Swarwerth [Spam]       |
| //mute                | Mute an user                                                            | chut, muet                               | //mute [60s] [Spam]            |
| //prune               | Delete user's messages                                                  | /                                        | //prune @Swarwerth 50          |
| //purge               | Delete messages                                                         | clear, suppr                             | //purge 50                     |
| //unban               | Unban an user                                                           | deban                                    | //unban 259302097197989888     |
| //unmute              | Unmute an user                                                          | demute                                   | //unmute @Swarwerth            |

### 💵 Economy

| Command               | Description                                                             | Aliases                                  | Usage                          |
| --------------------- | ------------------------------------------------------------------------| -----------------------------------------|--------------------------------|
| //coinflip            | Make a bet on a coinflip                                                | coin, flip                               | //coinflip 20 pile             |
| //daily               | Give daily money                                                        | /                                        | //daily                        |
| //give                | Give money to an user                                                   | /                                        | //give @Swarwerth 50           |
| //leaderboard         | Display the money or reputation leaderboard                             | lb, leader                               | //leaderboard [rep]            |
| //profil              | Display the user's profil                                               | me, money                                | //profil [@Swarwerth]          |
| //reputation          | Give a reputation point to an user                                      | point, rep                               | //reputation @Swarwerth        |
| //send                | Send money to an user                                                   | /                                        | //send @Swarwerth 50           |
| //work                | Work to earn money                                                      | /                                        | //work                         |
| //works               | Display the list of works                                               | /                                        | //works 1                      |

#### 🎵 Music
*Thanks to [ZerioDev](https://github.com/ZerioDev/Music-bot) for his help!*

| Command               | Description                                                             | Aliases                                  | Usage                          |
| --------------------- | ------------------------------------------------------------------------| -----------------------------------------|--------------------------------|
| //clearqueue          | Clear the queue                                                         | cq, qc, queueclear                       | //clearqueue                   |
| //filter              | Activate or desactivate a filter                                        | effect, filtre                           | //filter 8D                    |
| //filters             | Show the filter's list                                                  | effectlist, filterslist                  | //filters                      |
| //loop                | Loop the queue                                                          | boucle, replay                           | //loop                         |
| //nowplaying          | Display informations about the current music                            | np, time, timeleft, tl                   | //nowplaying                   |
| //pause               | Pause the current music                                                 | /                                        | //pause                        |
| //play                | Play a Youtube video                                                    | joue, song, p                            | //play Alan Walker             |
| //queue               | Display the queue                                                       | list, q                                  | //queue                        |
| //resume              | Resume the current music                                                | /                                        | //resume                       |
| //shuffle             | Shuffle the queue                                                       | aléatoire, mélange, random               | //shuffle                      |
| //skip                | Skip the current music                                                  | s, sauter                                | //skip                         |
| //stop                | Stop the queue                                                          | /                                        | //stop                         |
| //volume              | Change the bot's volume                                                 | /                                        | //volume 80                    |

#### 🎞 Tickets

You can send direct messages to the bot. It will be send in the mod channel set by `config/guild.json`

## 🎏 Modules

- [@discordjs/opus](https://www.npmjs.com/package/@discordjs/opus)
- [axios](https://www.npmjs.com/package/axios)
- [discord-player](https://www.npmjs.com/package/discord-player)
- [discord.js](https://www.npmjs.com/package/discord.js)
- [ffmpeg-static](https://www.npmjs.com/package/opusscript)
- [fs](https://www.npmjs.com/package/fs)
- [math-expression-evaluator](https://www.npmjs.com/package/math-expression-evaluator)
- [moment](https://www.npmjs.com/package/moment)
- [ms](https://www.npmjs.com/package/ms)
- [opusscript](https://www.npmjs.com/package/opusscript)
- [quick.db](https://www.npmjs.com/package/quick.db)
- [ytdl-core](https://www.npmjs.com/package/ytdl-core)
