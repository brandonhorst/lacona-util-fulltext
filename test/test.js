var expect = require('chai').expect;
var fulltext = require('..');

describe('fulltext', function () {

  it('gives the full text for an OutputOption', function() {
    var option = {
      match: [{
        string: 'aaa',
        category: 'cata'
      }], suggestion: [{
        string: 'b',
        category: 'catb',
        input: true
      }, {
        string: 'c',
        category: 'catb',
        input: false
      }, {
        string: 'd',
        category: 'catb',
        input: true
      }], completion: [{
        string: 'eee',
        category: 'cate'
      }]
    };


    expect(fulltext.all(option)).to.equal('aaabcdeee');
    expect(fulltext.match(option)).to.equal('aaa');
    expect(fulltext.suggestion(option)).to.equal('bcd');
    expect(fulltext.completion(option)).to.equal('eee');
  });
});
