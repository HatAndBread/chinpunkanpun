module.exports = (result) => {
  let punctuation = '.';
  const questionWords = [
    /^why(\s|$)/,
    /^who(\s|$)/,
    /^what(\s|$)/,
    /^where(\s|$)/,
    /^when(\s|$)/,
    /^how(\s|$)/,
    /^am(\s|$)/,
    /^are(\s|$)/,
    /^is(\s|$)/,
    /^was(\s|$)/,
    /^do(\s|$)/,
    /^did(\s|$)/,
    /^can(\s|$)/,
    /^will(\s|$)/,
    /^would(\s|$)/,
    /^could(\s|$)/,
    /^may(\s|$)/,
    /^should(\s|$)/
  ];
  questionWords.forEach((el) => {
    if (result[0].match(el)) {
      punctuation = '?';
    }
  });
  result = result.join(' ').concat(punctuation);
  return result[0].toUpperCase() + result.substring(1);
};
