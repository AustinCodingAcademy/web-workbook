'use strict';

$(document).ready(function() {

var $mark = "X"

yourTurn();

function yourTurn() {  $('[data-cell]').one('click', function(){
    // console.log(this);
    $(this).text($mark);
    checkForWinner();
    if ($mark === "X") {
        $mark = "O";
    } else {
      $mark = "X";
    }
  })
}


function checkForWinner(){
  console.log("start checkForWinner");
  var $tl = $('[data-cell="0"]').text()
  var $tc = $('[data-cell="1"]').text()
  var $tr = $('[data-cell="2"]').text()
  var $cl = $('[data-cell="3"]').text()
  var $cc = $('[data-cell="4"]').text()
  var $cr = $('[data-cell="5"]').text()
  var $bl = $('[data-cell="6"]').text()
  var $bc = $('[data-cell="7"]').text()
  var $br = $('[data-cell="8"]').text()

  if ($tl === $mark && $tc === $mark && $tr === $mark) {
    console.log("wins");
    $('#announce-winner').html('Player '+ $mark + ' wins!');
  }
  if ($cl === $mark && $cc === $mark && $cr === $mark) {
    console.log("center row");
    $('#announce-winner').html('Player '+ $mark + ' wins!');
  }
  if ($bl === $mark && $bc === $mark && $br === $mark) {
    console.log("bottom row");
    $('#announce-winner').html('Player '+ $mark + ' wins!');
  }
  if ($tl === $mark && $cl === $mark && $bl === $mark) {
    console.log("left column");
    $('#announce-winner').html('Player '+ $mark + ' wins!');
  }
  if ($tc === $mark && $cc === $mark && $bc === $mark) {
    console.log("center column");
    $('#announce-winner').html('Player '+ $mark + ' wins!');
  }
  if ($tr === $mark && $cr === $mark && $br === $mark) {
    console.log("right column");
    $('#announce-winner').html('Player '+ $mark + ' wins!');
  }
// diagonals
  if ($tl === $mark && $cc === $mark && $br === $mark) {
    console.log("right diag");
    $('#announce-winner').html('Player '+ $mark + ' wins!');
  }
  if ($tr === $mark && $cc === $mark && $bl === $mark) {
    console.log("left diag");
    $('#announce-winner').html('Player '+ $mark + ' wins!');
  }
}

clearBoard()

function clearBoard() {
  $('#clear').on('click', function(){
    location.reload();
      console.log("clear board end");
  })

}



    })
