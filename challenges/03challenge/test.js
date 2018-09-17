var jsdom = require('jsdom');
var assert = require('assert');
var path = require('path');

// send browser log statements to node console
var virtualConsole = jsdom.createVirtualConsole().sendTo(console);

// handy globals for assertions in each test
var document;
var $;
var sortableWasCalledOnCorrectElement = false;

// get jsdom ready before each test (and wait for document ready event)
beforeEach(function (done) {
  jsdom.env(
    {
      file: path.resolve(__dirname, 'index.html'),
      scripts: [
        path.resolve(__dirname, '../../node_modules/jquery/dist/jquery.js'),
        path.resolve(__dirname, 'script.js'),

      ],
      virtualConsole: virtualConsole,
      done: function (err, window) {
        if (err) {
          throw err;
        }
        document = window.document;
        $ = window.$;

        /* jquery-ui doesn't load in JSDOM, so let's provide a
        * fake implementation of $.fn.sortable */
        $.fn.sortable = function () {
          sortableWasCalledOnCorrectElement = (this.get(0) === document.getElementById('todo-list'));
        };

        $(document).on('ready', function () {
          done();
        });
      }
    }

  );
});

describe('submit listener', function () {
  it ('should have a submit listener on the form', function () {
    var form = document.querySelector('form');
    var events = $._data(form, 'events');
    assert.ok(events && events.submit && events.submit.length === 1);
  });
});

describe('add todo', function () {
  it ('should add todo text to the list', function () {
    $('#todo').val('write code');
    $('form').submit();
    assert.ok($('#todo-list').html().indexOf('write code') >= 0);
  });

  it ('should add todo text as an li tag', function () {

    /* clear list beforehand in case we've removed the initial li
    * for the bonus specs */
    $('#todo-list').children().detach();
    $('#todo').val('write code');
    $('form').submit();
    assert.equal($('#todo-list').find('li').text(), ('write code'));
  });
});

describe('should be sortable', function () {
  it('should be designated as jquery-ui sortable', function () {
    assert.ok(sortableWasCalledOnCorrectElement);
  });
});
