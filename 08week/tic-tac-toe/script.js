'use strick';
$(document).ready(function() {
  var playerOne = 'X';
  var playerTwo = 'O';
  var turn = 1;
  // var turn2 = 2;

  $('[data-cell]').click(function() {
    if (turn % 2 === 0) {
      $(this).text(playerTwo);
    } else {
      $(this).text(playerOne);
    }
    turn++;

//check winner
if (checkPlayerWin()) {
  $('#announce-winner').text(playerOne + "Wins")
}

   function checkPlayerWin() {
     if (($('[data-cell="0"]').text)==="playerOne") {


    // if (($('[data-cell="0"]').text() === "playerOne" && $('[data-cell="1"]').text() === "playerOne" && $('[data-cell="2"]').text() === "playerOne")){

    // (($('[data-cell="0"]').text() === "playerTwo" && $('[data-cell="1"]').text() === "playerTwo" && $('[data-cell="2"]').text() === "playerTwo") {
    //    console.log('playerTwo');
console.log('WHAT');
return true;


    } else {
      // console.log('playerTwo wins');
      return false;

    }

}

});
});
