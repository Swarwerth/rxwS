# rxwS - Bot discord.js
  An exemple of a Discord bot, using discord.js.
  The code is essantially in **French** 🇫🇷. *It will maybe translate 👀*.
  If you need help for your project, you can contact me in *Discussion* or in Discord : `Swarwerth#2943`

## ⚡ Installation

You need first of all, to **download the code** and have **node** and a **code editor** (like [Visual Studio Code](https://code.visualstudio.com/)). Then, you need to modify file `config/bot.json/`.
You need to complete this code :

```js
{
  "token": "*TOKEN*",
}
```

*You can find the bot's token on the [Discord Developpers](https://discordapp.com/developers/applications) page.*

Now, you need to install all dependencies. With the console, write :

```
npm install
```

## ☀ Turn on the bot

All the installation is done, you can now start your bot, with **node**. In the console, you need to write :

```
node index.js
```

Now, your bot is on and all is ok !

## 🎈 Commands

#### 🤖 Bot commands

- `botinfo` - informations about the bot
- `help` - display all the commands
- `ping` - display the bot's latence

#### 🎉 Fun commands

- `dice` - throw a dice
- `joke` - display a joke
- `love` - display the percentage of love between two users
- `question` - answer to a question asked
- `rps` - play Rock, paper, scissors
- `shoot` - kill someone

#### 🧨 Miscellaneous commands

- `avatar` - display someone's avatar
- `calc` - calculate an expression
- `fancytext` - use emoji for a text
- `fliptext` - flip a text
- `infoemoji` - display emoji's informations
- `instagram` - display an instagram profil
- `say` - make talk the bot
- `serverinfo` - display the server's informations
- `userinfo` - display the user's informations

#### 🔫 Moderation

- `ban` - ban an user
- `kick` - kick an user
- `mute` - mute an user
- `poll` - throw a poll
- `prune` - delete user's messages
- `purge` - delete messages
- `unban` - unban an user
- `unmute` - unmute an user


#### 🎵 Music
*Thanks to [ZerioDev](https://github.com/ZerioDev/Music-bot) for his help !*

- `clearqueue` - clear the queue
- `filter` - activate or desactivate a filter
- `filters` - show the filter's list
- `loop` - loop the queue
- `np` - display informations about the current music
- `pause` - pause the current music
- `queue` - display the queue
- `resume` - resume the current music
- `shuffle` - shuffle the queue
- `skip` - skip the current music
- `stop` - stop the queue
- `volume` - change the bot's volume

## 🎏 Modules

- @discordjs/opus
- common-tags
- discord-player
- discord.js
- ffmpeg-static
- fs
- math-expression-evaluator
- moment
- ms
- node-fetch
- opusscript
- quick.db