$(document).ready(function() {
  var turn = 0;
  $('div[data-cell]').click(function() {
    if ($(this).text() == '') {
      turn += 1;
      if (turn <= 9) {
        if (turn % 2 !== 0) {
          $(this).text('X');
        }
        else {
          $(this).text('O');
        }

        testForWin();

        // Game is over
        if (turn === 9) {
          $('#announce-winner').html('Man, you two suck!');
        }
      }
    }
    else {
      alert('Square is not empty.  Pick an empty square');
    }
  });

  // clear board button resets everything
  $('#clear').click(function() {
    $('div[data-cell]').text('');
    turn = 0;
    $('#announce-winner').text('');

  });
});

function testForWin () {
  var r1c1 = $('div[data-cell="0"]');
  var r1c2 = $('div[data-cell="1"]');
  var r1c3 = $('div[data-cell="2"]');

  var r2c1 = $('div[data-cell="3"]');
  var r2c2 = $('div[data-cell="4"]');
  var r2c3 = $('div[data-cell="5"]');

  var r3c1 = $('div[data-cell="6"]');
  var r3c2 = $('div[data-cell="7"]');
  var r3c3 = $('div[data-cell="8"]');

  // These are the row wins
  if ((r1c1.text() !=='') && (r1c1.text() === r1c2.text()) && (r1c2.text() === r1c3.text())) {
    $('#announce-winner').html('Hey, ' + r1c1.text() + ' won!');
  };
  if ((r2c1.text() !=='') && (r2c1.text() === r2c2.text()) && (r2c2.text() === r2c3.text())) {
    $('#announce-winner').html('Hey, ' + r2c1.text() + ' won!');
  };
  if ((r3c1.text() !=='') && (r3c1.text() === r3c2.text()) && (r3c2.text() === r3c3.text())) {
    $('#announce-winner').html('Hey, ' + r3c1.text() + ' won!');
  };

  // Here are the column wins
  if ((r1c1.text() !=='') && (r1c1.text() === r2c1.text()) && (r2c1.text() === r3c1.text())) {
    $('#announce-winner').html('Hey, ' + r1c1.text() + ' won!');
  };
  if ((r1c2.text() !=='') && (r1c2.text() === r2c2.text()) && (r2c2.text() === r3c2.text())) {
    $('#announce-winner').html('Hey, ' + r1c2.text() + ' won!');
  };
  if ((r1c3.text() !=='') && (r1c3.text() === r2c3.text()) && (r2c3.text() === r3c3.text())) {
    $('#announce-winner').html('Hey, ' + r1c3.text() + ' won!');
  };

  // Here are the diagonal wins
  if ((r1c1.text() !=='') && (r1c1.text() === r2c2.text()) && (r2c2.text() === r3c3.text())) {
    $('#announce-winner').html('Hey, ' + r1c1.text() + ' won!');
  };
  if ((r1c3.text() !=='') && (r1c3.text() === r2c2.text()) && (r2c2.text() === r3c1.text())) {
    $('#announce-winner').html('Hey, ' + r1c3.text() + ' won!');
  };
};
