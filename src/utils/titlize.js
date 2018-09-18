const SPLIT_RE = /(\S+)(\s+|\s*$)/g;
const SPACE = ' ';
const ARTICLES = 'a an the';
const CONJUNCTIONS = 'and but for nor or so yet';
const PREPOSITIONS = 'ago at by for from in into next of off on onto out over past till to';
const EXCEPTIONAL = SPACE + [ARTICLES, CONJUNCTIONS, PREPOSITIONS].join(SPACE) + SPACE;

function camelCase(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function _titlize(match, word) {
  if (!isExceptional(word)) {
    word = camelCase(word);
  }

  return word + SPACE;
}

function isExceptional(s) {
  return EXCEPTIONAL.indexOf(SPACE + s + SPACE) >= 0;
}

module.exports = function titlize(s) {
  if (s) {
    s = s.replace(/-/g, ' ');
    var title = s.replace(SPLIT_RE, _titlize);
    return title.slice(0,title.length-1);
  } else {
    return "";
  }
};
