const ms = require('ms')

const WORKS = {
  ONE: {
    name: '🐲 Chasseur.se de dragons',
    amount: '50',
    timeout: ms('3h')
  },
  TWO: {
    name: '⛏️ Mineur.se de charbon',
    amount: '10',
    timeout: ms('1h')
  },
  THREE: {
    name: '🧬 Scientifique',
    amount: '85',
    timeout: ms('5h')
  },
  FOUR: {
    name: '🗡️ Chevalier.ère',
    amount: '30',
    timeout: ms('2h')
  }
};

const DAILY = {
  amount: '500',
  timeout: ms('1d')
};

const REP = {
  timeout: ms('1d')
}

exports.WORKS = WORKS;
exports.DAILY = DAILY;
exports.REP = REP;