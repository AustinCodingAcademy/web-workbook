'use strict';


$(document).ready(function() {
  // Put app logic in here
  $('body').css('background-color', 'gray');

  var turn = 1;

  $('div[data-cell="0"], div[data-cell="1"], div[data-cell="2"], div[data-cell="3"], div[data-cell="4"], div[data-cell="5"], div[data-cell="6"], div[data-cell="7"], div[data-cell="8"]').on( 'click', function(){
    // Player select
     if (turn % 2 === 0) {
       var playerTurn = 'o';
     } else {
       var playerTurn = 'x';
     };
    $(this).text(playerTurn);


  turn++;
});


// Clear board
$('#clear').click(function() {
  $('div[data-cell="0"], div[data-cell="1"], div[data-cell="2"], div[data-cell="3"], div[data-cell="4"], div[data-cell="5"], div[data-cell="6"], div[data-cell="7"], div[data-cell="8"]').removeChild();
  });
});
