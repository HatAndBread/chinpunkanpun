const list = [
  'agree',
  'appear',
  'arrive',
  'collapse',
  'jog',
  'run',
  'eat',
  'sit down',
  'stand up',
  'cough',
  'cry',
  'die',
  'burn',
  'disappear',
  'emerge',
  'exist',
  'fall',
  'knock',
  'laugh',
  'lie',
  'live',
  'leave',
  'endure',
  'fly',
  'occur',
  'remain',
  'respond',
  'move',
  'smile',
  'clap',
  'sing',
  'revolt',
  'rise',
  'sit',
  'scream',
  'sleep',
  'smile',
  'sneeze',
  'grow',
  'play',
  'stand',
  'stay',
  'swim',
  'vanish',
  'vomit',
  'wake',
  'walk',
  'wait',
  'fart',
  'bleed',
  'retire',
  'dance',
  'glow',
  'breathe',
  'crawl',
  'explode',
  'float',
  'jump',
  'kneel',
  'limp',
  'march',
  'party',
  'sail away',
  'fliy away',
  'shout',
  'sigh',
  'squeak',
  'wander',
  'wiggle',
  'yell',
  'erupt',
  'fade',
  'shiver'
];

module.exports = () => {
  return list[Math.floor(Math.random() * list.length)];
};
