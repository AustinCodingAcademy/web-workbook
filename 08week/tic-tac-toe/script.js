'use strict';

$(document).ready(function() {
  // Put app logic in here
  //all divs with dataCells
  let symbol = 'X';
  let rows = document.getElementsByClassName('row');
  let dataCells = $('div[data-cell]');
  let data = dataCells.children;

  //onclick make the symbol appear in any of the data-cells
  dataCells.on('click', function(e) {
    //childNodes returns a nodeList and children returns an HTML collection
    //childNodes are better for when working with arrays
    if (e.target.childNodes.length === 0) {
    $(this).prepend(symbol);
    let eventData = e.data;
    e.data = symbol;
    // console.log(dataCells.firstChild);
        //if symbol is X then switch to O the next time
      if (symbol === 'X') {
        symbol = 'O';
          //if it is an O then switch back to X
      } else {
        symbol = 'X';
      }
      //console.log(data.length);
      // console.log(symbol.length);
      //console logging the opposite
    }
    testForWin()
  })

  $('#clear').click(function() {
    $('div[data-cell]').empty();
    $('#announce-winner').empty();
  })

  function testForWin() {
    var r1c1 = $('div[data-cell="0"]');
    var r1c2 = $('div[data-cell="1"]');
    var r1c3 = $('div[data-cell="2"]');

    var r2c1 = $('div[data-cell="3"]');
    var r2c2 = $('div[data-cell="4"]');
    var r2c3 = $('div[data-cell="5"]');

    var r3c1 = $('div[data-cell="6"]');
    var r3c2 = $('div[data-cell="7"]');
    var r3c3 = $('div[data-cell="8"]');

    //rows wins
    if ((r1c1.text() !== '') && (r1c1.text() === r1c2.text()) && (r1c2.text() === r1c3.text())) {
      $('#announce-winner').html('Hey ' + r1c1.text() + ' won!');
    }
    if ((r2c1.text() !== '') && (r2c1.text() === r2c2.text()) && (r2c2.text() === r2c3.text())) {
      $('#announce-winner').html('Hey ' + r2c1.text() + ' won!');
    }
    if ((r3c1.text() !== '') && (r3c1.text() === r3c2.text()) && (r3c2.text() === r3c3.text())) {
      $('#announce-winner').html('Hey ' + r3c1.text() + ' won!');
    }

    //column wins
    if ((r1c1.text() !== '') && (r1c1.text() === r2c1.text()) && (r2c1.text() === r3c1.text())) {
      $('#announce-winner').html('Hey ' + r1c1.text() + ' won!');
    }
    if ((r1c2.text() !== '') && (r1c2.text() === r2c2.text()) && (r2c2.text() === r3c2.text())) {
      $('#announce-winner').html('Hey ' + r1c2.text() + ' won!');
    }
    if ((r1c3.text() !== '') && (r1c3.text() === r2c3.text()) && (r2c3.text() === r3c3.text())) {
      $('#announce-winner').html('Hey ' + r1c3.text() + ' won!');
    }

    //diagonal win
    if ((r1c1.text() !== '') && (r1c1.text() === r2c2.text()) && (r2c2.text() === r3c3.text())) {
      $('#announce-winner').html('Hey ' + r1c1.text() + ' won!');
    }
    if((r1c3.text() !== '') && (r1c3.text() === r2c2.text()) && (r2c2.text() === r3c1.text())) {
      $('#announce-winner').html('Hey ' + r1c3.text() + ' won!');
    }
  }
});
