var expect = require('chai').expect;
var fulltext = require('..');
var lacona = require('lacona');

describe('fulltext', function () {
  var parser;

  beforeEach(function () {
    parser = new lacona.Parser({sentences: ['test']});
  });

  it('gives the full text for an OutputOption', function(done) {
    var grammar = {
      phrases: [{
        name: 'test',
        root: ['a', 'b', 'c']
      }]
    };

    function handleData(data) {
      var text = fulltext(data);
      expect(text).to.equal('a b c');
      done();
    }

    parser
      .understand(grammar)
      .on('data', handleData)
      .parse('a ');
  });
});
