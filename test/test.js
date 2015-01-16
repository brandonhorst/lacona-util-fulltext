var expect = require('chai').expect;
var fulltext = require('..');
var lacona = require('lacona');
var stream = require('stream');

function toStream(strings) {
  var newStream = new stream.Readable({objectMode: true});

  strings.forEach(function (string) {
    newStream.push(string);
  });
  newStream.push(null);

  return newStream;
}

function toArray(done) {
  var newStream = new stream.Writable({objectMode: true});
  var list = [];
  newStream.write = function(obj) {
    list.push(obj);
  };

  newStream.end = function() {
    done(list);
  };

  return newStream;
}

describe('fulltext', function () {
  var parser;

  beforeEach(function () {
    parser = new lacona.Parser();
  });

  it('gives the full text for an OutputOption', function(done) {
    var test = lacona.createPhrase({
      name: 'test/test',
      describe: function () {
        return lacona.sequence({children: [
          lacona.literal({text: 'a '}),
          lacona.literal({text: 'b '}),
          lacona.literal({text: 'c'})
        ]});
      }
    });

    function callback(data) {
      expect(data).to.have.length(3);

      var option = data[1].data;

      expect(fulltext.all(option)).to.equal('a b c');
      expect(fulltext.match(option)).to.equal('a ');
      expect(fulltext.suggestion(option)).to.equal('b ');
      expect(fulltext.completion(option)).to.equal('c');
      done();
    }

    parser.sentences = [test()];

    toStream(['a '])
      .pipe(parser)
      .pipe(toArray(callback));
  });
});
