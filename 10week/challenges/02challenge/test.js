var jsdom = require("jsdom");
var assert = require('assert');
var path = require('path');

// send browser log statements to node console
var virtualConsole = jsdom.createVirtualConsole().sendTo(console);

// handy globals for assertions in each test
var document;
var $;
var window;

// get jsdom ready before each test (and wait for document ready event)
beforeEach(function (done) {
  jsdom.env(
    {
      file: path.resolve(__dirname, 'index.html'),
      scripts: [
        path.resolve(__dirname, '../../node_modules/jquery/dist/jquery.js'),
        path.resolve(__dirname, 'script.js')
      ],
      virtualConsole: virtualConsole,
      done: function (err, jsdomWindow) {
        if (err) throw err;
        document = jsdomWindow.document;
        $ = jsdomWindow.$;
        window = jsdomWindow;
        $(document).on('ready', function () {
          done();
        });
      }
    }
  );
});

describe('Challenge 02', function () {

  describe('Problem 1: window.firstListChildren', function () {
    it('should be the children of #first-list', function () {
      assert(window.firstListChildren.is('li'));
      assert.equal(window.firstListChildren.text(), 'Catbug');
    });
  });

  describe('Problem 2: window.secondListChildren', function () {
    it('should be the children of #second-list', function () {
      assert(window.secondListChildren.is('li'));
      assert.equal(window.secondListChildren.text(), 'Impossibear');
    });
  });

  describe('Problem 3: window.firstListChildren.detach()', function () {
    it('should have removed window.firstListChildren from the document', function () {
      assert($('#first-list').children().length === 0);
    });
  });

  describe('Problem 4: window.secondListChildren', function () {
    it('should have removed window.secondListChildren from the document', function () {
      assert($('#second-list').children().length === 0);
    });
  });

  describe('Problem 5: $finalList.prepend()', function () {
    it('should have prepended Catbug to #final-list', function () {
      assert($('#final-list').children().first().is('li'));
      assert.equal($('#final-list').children().first().text(), 'Catbug');
    });
  });

  describe('Problem 6: $finalList.append()', function () {
    it('should have appended Impossibear to #final-list', function () {
      assert($('#final-list').children().last().is('li'));
      assert.equal($('#final-list').children().last().text(), 'Impossibear');
    });
  });

});
