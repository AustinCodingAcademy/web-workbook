var jsdom = require('jsdom');
var assert = require('assert');
var path = require('path');
var nock = require('nock');

// send browser log statements to node console
var virtualConsole = jsdom.createVirtualConsole().sendTo(console);

// handy globals for assertions in each test
var document;
var $;
var usersNock, userNock;

// get jsdom ready before each test (and wait for document ready event)
beforeEach(function (done) {

  usersNock = nock('https://reqres-api.herokuapp.com')
    .defaultReplyHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
    .get('/api/users')
    .reply(200, function () {
      return [{
        id: 1,
        first_name: 'Velma',
        last_name: 'Dinkley'
      }, {
        id: 2,
        first_name: 'Scooby',
        last_name: 'Doo'
      }];
    });

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
        $.support.cors = true; // enable cross-domain requests

        $(document).on('ready', function () {
          done();
        });
      }
    }

  );
});

afterEach(function () {
  nock.cleanAll();
});

describe('get users', function () {
  it ('should use $.ajax to get users and build tr tags', function (done) {
    var $tbody = $('tbody');

    // clear tbody beforehand in case we've removed seed data
    $tbody.children().detach();

    // need a second to get the markup to be appended
    setTimeout(function () {
      assert.equal($tbody.find('tr').length, 2);
      assert.ok(nock.isDone());
      done();
    }, 1000);
  });
});

describe('get specific user details', function () {
  it ('should use $.ajax to get a user\'s details', function (done) {

    userNock = nock('https://reqres-api.herokuapp.com')
      .defaultReplyHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      })
      .get('/api/users/1')
      .reply(200, function () {
        return {
          id: 1,
          first_name: 'Velma',
          last_name: 'Dinkley',
          occupation: 'Mystery Solver',
          phone: '5558675309',
          address: 'Mystery Machine, middle seat',
          avatar: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Velma_Dinkley.png'
        };
      });
    var $tbody = $('tbody');

    // need a second to get the markup to be appended
    setTimeout(function () {
      $('[data-id="1"]').click();
      setTimeout(function () {
        var detailsHtml = $('#details').html();
        assert.ok(nock.isDone());
        assert.ok(detailsHtml.indexOf('Velma') >= 0);
        assert.ok(detailsHtml.indexOf('Dinkley') >= 0);
        assert.ok(detailsHtml.indexOf('Mystery Solver') >= 0);
        assert.ok(detailsHtml.indexOf('5558675309') >= 0);
        assert.ok(detailsHtml.indexOf('Mystery Machine, middle seat') >= 0);
        assert.ok(detailsHtml.indexOf('https://upload.wikimedia.org/wikipedia/en/9/9d/Velma_Dinkley.png') >= 0);
        done();

      }, 500);
    }, 500);
  });
});
