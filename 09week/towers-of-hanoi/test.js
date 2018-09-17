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
        if (err) {
          throw err;
        }
        document = window.document;
        $ = window.$;
        $(document).on('ready', function () {
          done();
        });
      }
    }
  );
});

describe('basic moves', function () {
  it ('should be able to move to an empty stack', function () {
    var $stack1 = $('[data-stack=1]');
    var $stack2 = $('[data-stack=2]');
    assert.equal($stack1.children().length, 4);
    assert.equal($stack2.children().length, 0);

    $stack1.click();
    assert.equal($stack1.children().length, 3);

    $stack2.click();
    assert.equal($stack2.children().length, 1);
  });

  it ('should be able to move to a nonempty stack', function () {
    var $stack1 = $('[data-stack=1]');
    var $stack2 = $('[data-stack=2]');
    var $stack3 = $('[data-stack=3]');
    var assertStackLengths = function (len1, len2, len3) {
      assert.equal($stack1.children().length, len1);
      assert.equal($stack2.children().length, len2);
      assert.equal($stack3.children().length, len3);
    };

    assertStackLengths(4, 0, 0);

    $stack1.click();
    assertStackLengths(3, 0, 0);

    $stack2.click();
    assertStackLengths(3, 1, 0);

    $stack1.click();
    assertStackLengths(2, 1, 0);

    $stack3.click();
    assertStackLengths(2, 1, 1);

    $stack2.click();
    assertStackLengths(2, 0, 1);

    $stack3.click();
    assertStackLengths(2, 0, 2);
  });
});

describe('illegal move', function () {
  it ('should not place bigger blocks on smaller ones', function () {
    var $stack1 = $('[data-stack=1]');
    var $stack2 = $('[data-stack=2]');
    var $stack3 = $('[data-stack=3]');
    var assertStackLengths = function (len1, len2, len3) {
      assert.equal($stack1.children().length, len1);
      assert.equal($stack2.children().length, len2);
      assert.equal($stack3.children().length, len3);
    };

    assertStackLengths(4, 0, 0);

    $stack1.click();
    assertStackLengths(3, 0, 0);

    $stack2.click();
    assertStackLengths(3, 1, 0);

    $stack1.click();
    assertStackLengths(2, 1, 0);

    $stack2.click();

    // should not place the block!
    assertStackLengths(2, 1, 0);
  });
});

describe('detect a win', function () {
  it ('should detect a win in stack 2', function () {
    var $stack1 = $('[data-stack=1]');
    var $stack2 = $('[data-stack=2]');
    var $stack3 = $('[data-stack=3]');
    var stacks = [ $stack1, $stack2, $stack3 ];
    [
      1, 3,
      1, 2,
      3, 2,
      1, 3,
      2, 1,
      2, 3,
      1, 3,
      1, 2,
      3, 2,
      3, 1,
      2, 1,
      3, 2,
      1, 3,
      1, 2,
      3, 2
    ].forEach(function (stackNum) {
      stacks[stackNum - 1].click();
    });
    assert.equal($('#announce-game-won').text().toLowerCase(), 'you won!');
  });
});
