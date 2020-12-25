const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'], fetchAllUsers: true });
const {loadCommands, loadEvents, musicEvents} = require('./util/loader.js');
const {token} = require('./config/bot.json');

const {Player} = require('discord-player');
const player = new Player(client);
client.filters = require('./util/filters.js').filters;
client.player = player;

client.stream = require('discord-ytdl-core');
client.config = require('./config/bot.json');
client.commands = new Discord.Collection();

loadCommands(client);
loadEvents(client);
musicEvents(client);

client.login(token);