const list = [
  'agreeing',
  'appearing',
  'arriving',
  'collapsing',
  'jogging',
  'running',
  'eating',
  'sitting down',
  'standing up',
  'coughing',
  'crying',
  'dying',
  'burning',
  'disappearing',
  'emerging',
  'existing',
  'falling',
  'knocking',
  'laughing',
  'lying',
  'living',
  'leaving',
  'enduring',
  'flying',
  'occurring',
  'remaining',
  'responding',
  'moving',
  'smiling',
  'clapping',
  'singing',
  'revolting',
  'rising',
  'sitting',
  'screaming',
  'sleeping',
  'smiling',
  'sneezing',
  'growing',
  'playing',
  'standing',
  'staying',
  'swimming',
  'vanishing',
  'vomiting',
  'waking',
  'walking',
  'waiting',
  'farting',
  'breathing',
  'crawling',
  'exploding',
  'floating',
  'jumping',
  'kneeling',
  'limping',
  'marching',
  'sailing',
  'flying',
  'shouting',
  'sighing',
  'squeak',
  'wandering',
  'wiggling',
  'yelling',
  'erupting',
  'fading',
  'shivering'
];

module.exports = () => {
  return list[Math.floor(Math.random() * list.length)];
};
