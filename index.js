const getWord = require('./get-word');
const sentenceStructure = require('./sentence-structures').getSentence;
const addStructure = require('./sentence-structures').addStructure;
const addPunctuation = require('./add-punctuation');
const articleCorrector = require('./article-corrector');

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

const sentence = () => {
  const structure = sentenceStructure();
  const result = articleCorrector(structure);
  return addPunctuation(result);
};

module.exports = {
  getWord: getWord,
  sentence: sentence,
  addStructure: addStructure,
  adjective: adjective,
  person: person,
  place: place,
  simplePluralIntransitive: simplePluralIntransitive,
  simplePluralTransitive: simplePluralTransitive,
  intransitiveContinuous: intransitiveContinuous,
  simpleSingularIntransitive: simpleSingularIntransitive,
  simpleSingularTransitive: simpleSingularTransitive,
  pastTransitive: pastTransitive,
  pastIntransitive: pastIntransitive,
  pluralNoun: pluralNoun,
  singularNoun: singularNoun,
  uncountableNoun: uncountableNoun,
  possessivePronoun: possessivePronoun,
  transitiveContinuous: transitiveContinuous,
  relation: relation,
  adverb: adverb,
  pluralPronoun: pluralPronoun,
  pluralPronounBe: pluralPronounBe,
  pluralPronounObject: pluralPronounObject,
  singularPronoun: singularPronoun,
  singularPronounBe: singularPronounBe,
  singularPronounObject: singularPronounObject,
  personPossessive: personPossessive,
  positionPrep: positionPrep,
  prepPhrase: prepPhrase
};
