'use strict';



$(document).ready(function() {

var playerTurn = 'X';
$('[data-cell]').click(function() {
  if($(this).text() === ''){
  $(this).text(playerTurn);
  checkForWins();
  if (playerTurn === 'X'){
     playerTurn = "O";
   }else{
     playerTurn = 'X';
   }
}

})





function checkForWins() {
  if($('[data-cell = "0"]').text() === playerTurn &&
  $('[data-cell = "1"]').text() === playerTurn &&
  $('[data-cell = "2"]').text() === playerTurn) {
    $('#announce-winner').text(`player ${playerTurn} wins!`);
  }
  if($('[data-cell = "3"]').text() === playerTurn &&
  $('[data-cell = "4"]').text() === playerTurn &&
  $('[data-cell = "5"]').text() === playerTurn) {
    $('#announce-winner').text(`player ${playerTurn} wins!`);
  }
  if($('[data-cell = "6"]').text() === playerTurn &&
  $('[data-cell = "7"]').text() === playerTurn &&
  $('[data-cell = "8"]').text() === playerTurn) {
    $('#announce-winner').text(`player ${playerTurn} wins!`);
  }
  if($('[data-cell = "0"]').text() === playerTurn &&
  $('[data-cell = "3"]').text() === playerTurn &&
  $('[data-cell = "6"]').text() === playerTurn) {
    $('#announce-winner').text(`player ${playerTurn} wins!`);
  }
  if($('[data-cell = "1"]').text() === playerTurn &&
  $('[data-cell = "4"]').text() === playerTurn &&
  $('[data-cell = "7"]').text() === playerTurn) {
    $('#announce-winner').text(`player ${playerTurn} wins!`);
  }
  if($('[data-cell = "2"]').text() === playerTurn &&
  $('[data-cell = "5"]').text() === playerTurn &&
  $('[data-cell = "8"]').text() === playerTurn) {
    $('#announce-winner').text(`player ${playerTurn} wins!`);
  }
  if($('[data-cell = "0"]').text() === playerTurn &&
  $('[data-cell = "4"]').text() === playerTurn &&
  $('[data-cell = "8"]').text() === playerTurn) {
    $('#announce-winner').text(`player ${playerTurn} wins!`);
  }
  if($('[data-cell = "2"]').text() === playerTurn &&
  $('[data-cell = "4"]').text() === playerTurn &&
  $('[data-cell = "6"]').text() === playerTurn) {
    $('#announce-winner').text(`player ${playerTurn} wins!`);
  }

}



$("#clear").click(function() {
  $(this).click(function() {
    $('[data-cell]').empty();

  })
});





  })
