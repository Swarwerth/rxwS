const fs = require('fs');

const loadCommands = (client, dir = "./commands/") => {
  fs.readdirSync(dir).forEach(dirs => {
      const commands = fs.readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

      for (const file of commands) {
          const getFileName = require(`../${dir}/${dirs}/${file}`);
          client.commands.set(getFileName.help.name, getFileName);
          console.log(`Commande chargée : ${getFileName.help.name}`);
      };
  });
};

const loadEvents = (client, dir = "./events/") => {
  fs.readdirSync(dir).forEach(dirs => {
      const events = fs.readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

      for (const event of events) {
        const evt = require(`../${dir}/${dirs}/${event}`);
        const evtName = event.split(".")[0];
        client.on(evtName, evt.bind(null, client));
        console.log(`Événement chargé : ${evtName}`);
  };
});
};

const musicEvents = (client = "./player/") => {
  fs.readdir("./player/", (err, files) => {
    if (err) return console.error(err);
    files.forEach((file) => {
      const event = require(`../player/${file}`);
      let eventName = file.split(".")[0];
      console.log(`Événement musique chargé : ${eventName}`);
      client.player.on(eventName, event.bind(null, client));
    });
  });
};

module.exports = {
  loadCommands,
  loadEvents,
  musicEvents
};