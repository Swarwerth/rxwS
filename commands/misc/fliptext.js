const {MESSAGES} = require('../../util/constants');

module.exports.run = async (client, message, args) => {
    
  const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>?@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~';
  const OFFSET = '!'.charCodeAt(0);

  message.channel.send(args.join(' ').split('').map(c => c.charCodeAt(0) - OFFSET).map(c => mapping[c] || ' ').reverse().join(''));

};

module.exports.help = MESSAGES.COMMANDS.MISC.FLIPTEXT;