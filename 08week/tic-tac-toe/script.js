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

    //Function checks for win

    var v1 = $('[data-cell="0"]').text()
    var v2 = $('[data-cell="1"]').text()
    var v3 = $('[data-cell="2"]').text()
    var v4 = $('[data-cell="3"]').text()
    var v5 = $('[data-cell="4"]').text()
    var v6 = $('[data-cell="5"]').text()
    var v7 = $('[data-cell="6"]').text()
    var v8 = $('[data-cell="7"]').text()
    var v9 = $('[data-cell="8"]').text()

    var checkForWin = (function() {

      if (((v1 == 'o') || (v1 == 'x')) && (v1 == v2) && (v2 == v3)) {
        setTimeout(function(){ alert("Winner!"); }, 500);
      } else if (((v4 == 'o') || (v4 == 'x')) && (v4 == v5) && (v5 == v6)) {
         setTimeout(function(){ alert("Winner!"); }, 500);
       } else if (((v7 == 'o') || (v7 == 'x')) && (v7 == v8) && (v8 == v9)) {
         setTimeout(function(){ alert("Winner!"); }, 500);
       } else if (((v1 == 'o') || (v1 == 'x')) && (v1 == v4) && (v4 == v7)) {
         setTimeout(function(){ alert("Winner!"); }, 500);
       } else if (((v2 == 'o') || (v2 == 'x')) && (v2 == v5) && (v5 == v8)) {
         setTimeout(function(){ alert("Winner!"); }, 500);
       } else if (((v3 == 'o') || (v3 == 'x')) && (v3 == v6) && (v6 == v9)) {
         setTimeout(function(){ alert("Winner!"); }, 500);
       } else if (((v1 == 'o') || (v1 == 'x')) && (v1 == v5) && (v5 == v9)) {
         setTimeout(function(){ alert("Winner!"); }, 500);
       } else if (((v3 == 'o') || (v3 == 'x')) && (v3 == v5) && (v5 == v7)) {
         setTimeout(function(){ alert("Winner!"); }, 500);
       } else {
      }

    });
    checkForWin();

  });

  //Function clears the board
  $('#clear').click(function() {
    $("[data-cell]").empty();

  });

});
