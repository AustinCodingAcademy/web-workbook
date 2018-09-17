var jsdom = require('jsdom');
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
      virtualConsole,
      done(err, jsdomWindow) {
        if (err) {
          throw err;
        }
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

describe('Challenge 01', function () {
  describe('element selectors', function () {

    describe('Problem 1: window.h1', function () {
      it('should have the h1 element selected', function () {
        assert($('h1').is(window.h1));
      });
    });

    describe('Problem 2: window.p', function () {
      it('should have the p element selected', function () {
        assert($('p').is(window.p));
      });
    });

  });

  describe('id selectors', function () {

    describe('Problem 3: window.idMain', function () {
      it('should have the #main element selected', function () {
        assert($('#main').is(window.idMain));
      });
    });

    describe('Problem 4: window.idSecondary', function () {
      it('should have the #secondary element selected', function () {
        assert($('#secondary').is(window.idSecondary));
      });
    });

  });

  describe('class selectors', function () {

    describe('Problem 5: window.container', function () {
      it('should have the .container element selected', function () {
        assert($('.container').is(window.container));
      });
    });

    describe('Problem 6: window.items', function () {
      it('should have the .item elements selected', function () {
        assert($('.item').is(window.items));
      });
    });

  });

  describe('attribute selectors', function () {

    describe('Problem 7: window.dataId', function () {
      it('should have the [data-id] element selected', function () {
        assert($('[data-id]').is(window.dataId));
      });
    });

    describe('Problem 8: window.dataPrice', function () {
      it('should have the [data-price] element selected', function () {
        assert($('[data-price]').is(window.dataPrice));
      });
    });

  });

  describe('dom manipulation', function () {

    describe('Problem 9: #insert-text', function () {
      it('should have inserted "Text Has Been Inserted" into #insert-text', function () {
        assert.equal($('#insert-text').text(), 'Text Has Been Inserted');
      });
    });

    describe('Problem 10: #add-attribute', function () {
      it('should have added data-color="red" to #add-attribute', function () {
        assert($('#add-attribute').is($('[data-color]')));
        assert.equal($('#add-attribute').attr('data-color'), 'red');
      });
    });

    describe('Problem 11: #data-element data-id value', function () {
      it('should have put the data-id value into window.dataIdValue', function () {
        assert.equal($('#data-element').data('id'), window.dataIdValue);
      });
    });

    describe('Problem 12: #data-element set text to value of data-content', function () {
      it('should have set the text to the value of the data-content attribute', function () {
        assert.equal($('#data-element').data('content'), $('#data-element').text());
      });
    });

  });

});
