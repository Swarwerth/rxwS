const config = require('../../config/bot.json')

module.exports = client => {

  console.log(`------------------------------------\nMerci d'avoir choisi rxwS !\nModules : https://github.com/ZerioDev/Music-bot/\nPrêt sur ${client.guilds.cache.size} serveurs !\n------------------------------------`);!
  client.user.setPresence({activity: {name: config.activityname, type: config.activitytype}, status: config.status});

};