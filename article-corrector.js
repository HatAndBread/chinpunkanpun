const singularNoun = require('./singular-nouns');
const getWord = require('./get-word');

const VOWELS = ['a', 'i', 'u', 'e', 'o', 'A', 'I', 'U', 'E', 'O'];
const precededByAdjectiveOrPossessive = (index, arr) => {
  const forbidden = [
    'possessivePronoun',
    'adjective',
    'possessiveNoun',
    'personPossessive',
    'intransitiveContinuous',
    'What',
    'what'
  ];
  if (arr[index - 1] && forbidden.includes(arr[index - 1])) {
    return true;
  }
};

module.exports = (structure) => {
  let result = [];
  structure.map((el, index, arr) => {
    if (el === 'singularNoun' && !precededByAdjectiveOrPossessive(index, arr)) {
      let rand = Math.floor(Math.random() * 2);
      let word = singularNoun();
      if (rand) {
        word = `the ${word}`;
      } else {
        VOWELS.includes(word[0]) ? (word = `an ${word}`) : (word = `a ${word}`);
      }
      return result.push(word);
    }
    result.push(getWord(el));
  });
  return result;
};
