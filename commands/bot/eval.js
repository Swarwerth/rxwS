const {MESSAGES} = require('../../util/constants');

const {idcreator} = require('../../config/bot.json');

const util = require('util');

module.exports.run = (client, message, args) => {

  if (message.author.id !== idcreator) return;

  try {
    const returned = eval(args.join(" "));

    let str = util.inspect(returned, { depth: 1 });
    if (str.length > 1900) str = `${str.substr(0, 1897)}...`;

    message.channel.send('```js\n' + str + '\n```')
      .then(msg => {
        if (returned !== undefined && returned !== null && typeof returned.then === 'function') {
          returned.then(() => {
            str = util.inspect(returned, { depth: 1 });

            if (str.length > 1900) {
              str = str.substr(0, 1897);
              str = str + '...';
            };

            msg.edit('```js\n' + str + '\n```')
          }, e => {
          str = util.inspect(e, { depth: 1 });;

          if (str.length > 1900) {
            str = str.substr(0, 1897);
            str = str + '...';
          };

          msg.edit('```js\n' + str + '\n```');
        });
      };
    }).catch(() => { });
  } catch (e) {
    message.channel.send('```js\n' + e + '\n```').catch(() => { })
  };
  
};

module.exports.help = MESSAGES.COMMANDS.BOT.EVAL;