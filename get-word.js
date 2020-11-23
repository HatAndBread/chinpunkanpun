const adjective = require('./adjectives');
const person = require('./people');
const place = require('./place-names');
const simplePluralIntransitive = require('./simple-plural-intransitive');
const intransitiveContinuous = require('./intransitive-continuous');
const simpleSingularIntransitive = require('./simple-singular-intransitive');
const simplePluralTransitive = require('./simple-plural-transitive');
const simpleSingularTransitive = require('./simple-singular-transitive');
const pastTransitive = require('./past-transitive');
const pastIntransitive = require('./past-intransitive');
const pluralNoun = require('./plural-nouns');
const singularNoun = require('./singular-nouns');
const uncountableNoun = require('./uncountable-nouns');
const possessivePronoun = require('./possessive-pronouns');
const transitiveContinuous = require('./transitive-continuous');
const relation = require('./relations');
const adverb = require('./adverbs');
const pluralPronoun = require('./plural-pronouns');
const singularPronoun = require('./singular-pronouns');
const positionPrep = require('./position-preps');
const prepPhrase = require('./prep-phrases');

module.exports =
  /**
   *
   * @param {string} wordType - any valid word type
   */
  (wordType) => {
    switch (wordType) {
      case 'adjective':
        return adjective();
      case 'person':
        return person();
      case 'personPossessive':
        return person(true);
      case 'place':
        return place();
      case 'positionPrep':
        return positionPrep();
      case 'prepPhrase':
        return prepPhrase();
      case 'relation':
        return relation();
      case 'adverb':
        return adverb();
      case 'pluralPronoun':
        return pluralPronoun();
      case 'pluralPronounBe':
        return pluralPronoun(false, true);
      case 'pluralPronounObject':
        return pluralPronoun(true);
      case 'singularPronoun':
        return singularPronoun();
      case 'singularPronounBe':
        return singularPronoun(false, true);
      case 'singularPronounObject':
        return singularPronoun(true);
      case 'simplePluralIntransitive':
        return simplePluralIntransitive();
      case 'intransitiveContinuous':
        return intransitiveContinuous();
      case 'simpleSingularIntransitive':
        return simpleSingularIntransitive();
      case 'simplePluralTransitive':
        return simplePluralTransitive();
      case 'simpleSingularTransitive':
        return simpleSingularTransitive();
      case 'pastTransitive':
        return pastTransitive();
      case 'pastIntransitive':
        return pastIntransitive();
      case 'pluralNoun':
        return pluralNoun();
      case 'singularNoun':
        return singularNoun();
      case 'uncountableNoun':
        return uncountableNoun();
      case 'possessivePronoun':
        return possessivePronoun();
      case 'transitiveContinuous':
        return transitiveContinuous();
      default:
        if (wordType !== 'I') {
          wordType = wordType.toLowerCase();
        }
        return wordType;
    }
  };
