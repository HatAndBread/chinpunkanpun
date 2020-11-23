const adjective = 'adjective';
const person = 'person';
const place = 'place';
const simplePluralIntransitive = 'simplePluralIntransitive';
const intransitiveContinuous = 'intransitiveContinuous';
const simpleSingularIntransitive = 'simpleSingularIntransitive';
const simplePluralTransitive = 'simplePluralTransitive';
const simpleSingularTransitive = 'simpleSingularTransitive';
const pastTransitive = 'pastTransitive';
const pastIntransitive = 'pastIntransitive';
const pluralNoun = 'pluralNoun';
const singularNoun = 'singularNoun';
const uncountableNoun = 'uncountableNoun';
const possessivePronoun = 'possessivePronoun';
const transitiveContinuous = 'transitiveContinuous';
const relation = 'relation';
const adverb = 'adverb';
const pluralPronoun = 'pluralPronoun';
const pluralPronounBe = 'pluralPronounBe';
const pluralPronounObject = 'pluralPronounObject';
const singularPronoun = 'singularPronoun';
const singularPronounBe = 'singularPronounBe';
const singularPronounObject = 'singularPronounObject';
const personPossessive = 'personPossessive';
const positionPrep = 'positionPrep';
const prepPhrase = 'prepPhrase';

const list = [
  [possessivePronoun, adjective, singularNoun, pastTransitive, singularNoun],
  [singularNoun, simpleSingularTransitive, uncountableNoun],
  [person, simpleSingularTransitive, pluralNoun, 'in', place],
  ['why do', pluralNoun, simplePluralTransitive, pluralNoun],
  ['who', pastTransitive, possessivePronoun, adjective, pluralNoun],
  ['why is', person, intransitiveContinuous, 'in', place],
  ['why is', possessivePronoun, uncountableNoun, transitiveContinuous, singularNoun, 'with', person],
  ['who will', adverb, simplePluralTransitive, possessivePronoun, relation],
  ['how do', pluralNoun, simplePluralIntransitive],
  ['what did', person, simplePluralTransitive],
  ['why did', person, simplePluralTransitive, personPossessive, pluralNoun],
  ['who', pastTransitive, personPossessive, uncountableNoun],
  ['who', pastTransitive, possessivePronoun, uncountableNoun],
  [pluralPronounBe, transitiveContinuous, adjective, pluralNoun],
  [singularPronounBe, adverb, transitiveContinuous, singularPronounObject],
  ['who will', simplePluralTransitive, singularNoun, 'that', person, pastTransitive],
  [singularPronoun, 'wants', singularNoun, 'that', simpleSingularTransitive, pluralNoun, 'in', place],
  [possessivePronoun, relation, adverb, pastIntransitive, 'while', pluralNoun, pastTransitive, pluralNoun],
  ['will you', simplePluralTransitive, singularNoun, 'that', pastTransitive, personPossessive, pluralNoun],
  ['Can you', simplePluralTransitive, possessivePronoun, adjective, singularNoun, adverb],
  [pluralNoun, 'like', intransitiveContinuous],
  [
    'do you',
    simplePluralIntransitive,
    'while',
    possessivePronoun,
    relation,
    simpleSingularTransitive,
    pluralNoun,
    'in',
    place
  ],
  [possessivePronoun, pluralNoun, 'are', intransitiveContinuous],
  [pluralNoun, 'are', adverb, transitiveContinuous, adjective, pluralNoun],
  [singularNoun, simpleSingularIntransitive, 'when', pluralNoun, simplePluralIntransitive],
  [
    pluralNoun,
    'will',
    simplePluralTransitive,
    pluralNoun,
    'if',
    personPossessive,
    singularNoun,
    simpleSingularIntransitive
  ],
  [personPossessive, adjective, singularNoun, adverb, pastIntransitive],
  [pluralPronoun, "won't", simplePluralTransitive, pluralNoun, 'until', person, simpleSingularIntransitive],
  ['there are', adjective, pluralNoun, 'in', place],
  ['is', possessivePronoun, adjective, singularNoun, transitiveContinuous, pluralNoun],
  ['is', possessivePronoun, adjective, relation, transitiveContinuous, pluralNoun],
  ['i am going to', simplePluralTransitive, 'the', adjective, singularNoun],
  ['i', pastTransitive, adjective, pluralNoun, 'in', place],
  [singularPronoun, pastTransitive, 'the', intransitiveContinuous, singularNoun],
  [possessivePronoun, singularNoun, pastTransitive, singularNoun, positionPrep, singularNoun],
  [possessivePronoun, relation, pastTransitive, singularNoun, prepPhrase],
  [possessivePronoun, relation, adverb, pastIntransitive, prepPhrase],
  ['how did you', simplePluralTransitive, pluralNoun, prepPhrase],
  ['there is', singularNoun, positionPrep, personPossessive, singularNoun],
  ['What', singularNoun, 'is', person, transitiveContinuous, prepPhrase],
  [possessivePronoun, singularNoun, pastIntransitive, 'when', person, 'went to', place],
  [singularPronounBe, 'going to', simplePluralTransitive, singularNoun, prepPhrase],
  [
    'why does',
    possessivePronoun,
    uncountableNoun,
    simplePluralTransitive,
    pluralNoun,
    'if',
    possessivePronoun,
    singularNoun,
    simpleSingularTransitive,
    singularNoun
  ],
  [
    personPossessive,
    pluralNoun,
    'will',
    simplePluralIntransitive,
    'if',
    singularPronoun,
    "doesn't",
    simplePluralTransitive,
    singularNoun,
    prepPhrase
  ],
  [
    singularNoun,
    simpleSingularTransitive,
    possessivePronoun,
    singularNoun,
    positionPrep,
    singularNoun,
    'while',
    pluralNoun,
    simplePluralIntransitive
  ],
  ['would you', simplePluralTransitive, possessivePronoun, singularNoun, positionPrep, singularNoun],
  ['May', 'I', simplePluralTransitive, possessivePronoun, uncountableNoun, 'with', singularNoun],
  [
    'would you mind',
    transitiveContinuous,
    personPossessive,
    singularNoun,
    'while',
    'I',
    simplePluralTransitive,
    singularNoun
  ]
];

/**
 *
 * @param {array} array - an array consisting of valid word types.
 */
const addStructure = (array) => {
  list.push(array);
};

module.exports = {
  getSentence: () => {
    return list[Math.floor(Math.random() * list.length)];
  },
  addStructure: addStructure
};
