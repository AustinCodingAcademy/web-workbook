var jsdom = require('jsdom');
var assert = require('assert');
var path = require('path');

// send browser log statements to node console
var virtualConsole = jsdom.createVirtualConsole().sendTo(console);

// handy globals for assertions in each test
var document;
var $;

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
      done: function (err, window) {
        if (err) throw err;
        document = window.document;
        $ = window.$;
        $(document).on('ready', function () {
          done();
        });
      }
    }
  );
});

describe('board state', function () {
  it('should start empty', function () {
    for (var i = 0; i <= 8; i += 1) {
      assert.equal($('div[data-cell=' + i + ']').text(), '');
    }
  });

  it ('should put an x then an o on alternating clicks', function () {
    var $cell1 = $('div[data-cell=1]');
    var $cell2 = $('div[data-cell=2]');
    $cell1.click();
    assert.equal($cell1.text(), 'X');
    $cell2.click();
    assert.equal($cell2.text(), 'O');
  });
});

describe('detect a win', function () {
  describe('horizontal', function () {
    it('should detect a win in row 1', function () {
      [ { x: 0, o: 3 }, { x: 1, o: 4 }, { x: 2, o: 6 }].forEach(function (cellNumbers) {
        $('div[data-cell=' + cellNumbers.x + ']').click();
        $('div[data-cell=' + cellNumbers.o + ']').click();
      });
      assert.equal($('#announce-winner').text().toLowerCase(), 'player x wins!');
    });

    it('should detect a win in row 2', function () {
      [ { x: 0, o: 3 }, { x: 1, o: 4 }, { x: 8, o: 5 }].forEach(function (cellNumbers) {
        $('div[data-cell=' + cellNumbers.x + ']').click();
        $('div[data-cell=' + cellNumbers.o + ']').click();
      });
      assert.equal($('#announce-winner').text().toLowerCase(), 'player o wins!');
    });

    it('should detect a win in row 3', function () {
      [ { x: 6, o: 0 }, { x: 7, o: 1 }, { x: 8, o: 4 }].forEach(function (cellNumbers) {
        $('div[data-cell=' + cellNumbers.x + ']').click();
        $('div[data-cell=' + cellNumbers.o + ']').click();
      });
      assert.equal($('#announce-winner').text().toLowerCase(), 'player x wins!');
    });
  });

  describe('vertical', function () {
    it('should detect a win in column 1', function () {
      [ { x: 0, o: 1 }, { x: 3, o: 4 }, { x: 6, o: 8 }].forEach(function (cellNumbers) {
        $('div[data-cell=' + cellNumbers.x + ']').click();
        $('div[data-cell=' + cellNumbers.o + ']').click();
      });
      assert.equal($('#announce-winner').text().toLowerCase(), 'player x wins!');
    });

    it('should detect a win in column 2', function () {
      [ { x: 0, o: 1 }, { x: 3, o: 4 }, { x: 8, o: 7 }].forEach(function (cellNumbers) {
        $('div[data-cell=' + cellNumbers.x + ']').click();
        $('div[data-cell=' + cellNumbers.o + ']').click();
      });
      assert.equal($('#announce-winner').text().toLowerCase(), 'player o wins!');
    });

    it('should detect a win in column 3', function () {
      [ { x: 2, o: 0 }, { x: 5, o: 1 }, { x: 8, o: 4 }].forEach(function (cellNumbers) {
        $('div[data-cell=' + cellNumbers.x + ']').click();
        $('div[data-cell=' + cellNumbers.o + ']').click();
      });
      assert.equal($('#announce-winner').text().toLowerCase(), 'player x wins!');
    });
  });

  describe('diagonal', function () {
    it('should detect a downward diagonal win', function () {
      [ { x: 0, o: 1 }, { x: 4, o: 5 }, { x: 8, o: 3 }].forEach(function (cellNumbers) {
        $('div[data-cell=' + cellNumbers.x + ']').click();
        $('div[data-cell=' + cellNumbers.o + ']').click();
      });
      assert.equal($('#announce-winner').text().toLowerCase(), 'player x wins!');
    });

    it('should detect an upward diagonal win', function () {
      [ { x: 1, o: 2 }, { x: 3, o: 4 }, { x: 8, o: 6 }].forEach(function (cellNumbers) {
        $('div[data-cell=' + cellNumbers.x + ']').click();
        $('div[data-cell=' + cellNumbers.o + ']').click();
      });
      assert.equal($('#announce-winner').text().toLowerCase(), 'player o wins!');
    });
  });
});

describe('clear board', function () {
  it('should clear the board', function () {
    var $cell1 = $('div[data-cell=1]');
    var $cell2 = $('div[data-cell=2]');
    $cell1.click();
    $cell2.click();
    assert.equal($cell1.text(), 'X');
    assert.equal($cell2.text(), 'O');
    $('#clear').click();
    assert.equal($cell1.text(), '');
    assert.equal($cell2.text(), '');
  });
});
