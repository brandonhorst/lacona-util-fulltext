function join(array) {
  return array.reduce(function (acc, val) {
    return acc + val.string;
  }, '');
}

function match(option) { return join(option.match); }
function suggestion(option) { return join(option.suggestion); }
function completion(option) { return join(option.completion); }

function all(option) {
  return [match(option), suggestion(option), completion(option)].join('');
}

module.exports = {
  all: all,
  match: match,
  suggestion: suggestion,
  completion: completion
};
