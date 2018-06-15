'use strict';

//Last value played
var theText = 'o';

$(document).ready(function() {
  $('[data-cell]').click(function() {

    //Tells me which cell was clicked
    var theCell = $(this).attr('data-cell');
    console.log('the cell was clicked is ' + theCell);


    // Checks if my data-cell is empty and places text
    var currentText = $(this).text();
    console.log("the current value is " + currentText);



    if (currentText.length > 0) {
      console.log("something is here");
      alert('This cell is full!');

    } else {
      //Function switches between x and o & records the previous value for theText
      if (theText === 'x') {
        $(this).text('o');
        theText = 'o';
      } else if (theText === 'o') {
        $(this).text('x');
        theText = 'x';
      }

    }

  });

  //Function checks for win

  var v1 = '[0]'
  var v2 = '[1]'
  var v3 = '[2]'
  var v4 = '[3]'
  var v5 = '[4]'
  var v6 = '[5]'
  var v7 = '[6]'
  var v8 = '[7]'
  var v9 = '[8]'
  var checkForWin = (function() {

    if (v1 == v2 && v2 == v3) {
      alert('Winner!');
    } else if (v4 == v5 && v5 == v6) {
      alert('Winner!');
    } else if (v7 == v8 && v8 == v9) {
      alert('Winner!');
    } else if (v1 == v4 && v4 == v7) {
      alert('Winner!');
    } else if (v2 == v5 && v5 == v8) {
      alert('Winner!');
    } else if (v3 == v6 && v6 == v9) {
      alert('Winner!');
    } else if (v1 == v5 && v5 == v9) {
      alert('Winner!');
    } else if (v3 == v5 && v5 == v7) {
      alert('Winner!');
    } else {
      alert("It's a tie!")
    }

    checkForWin();
  });

  //Function clears the board
  $('#clear').click(function() {
    $("[data-cell]").empty();

  });

});
