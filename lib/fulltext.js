function getFullText(option) {
  var allWords = option.match.concat(option.suggestion.words, option.completion);
  var i, l, word;
  var fullString = '';

  for (l = allWords.length, i = 0; i < l; i++) {
    word = allWords[i];
    fullString += word.string;
  }

  return fullString;
}

module.exports = getFullText;
