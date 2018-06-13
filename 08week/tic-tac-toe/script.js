'use strict';

$(document).ready(function() {
  // Put app logic in here
  var turn = 'X';
    $('[data-cell]').on('click', function(){
      // console.log($(this));
      if($(this).text()===''){
        $(this).text(turn);
        // win();
      if(turn === 'O'){
        turn = 'X';
      }else {
        turn = 'O';
      }
    }
  });
function win() {
return 'run win function';
  // let $zero = $('[data-cell="0"]').text();
  // let $one = $('[data-cell="1"]').text();
  // let $two = $('[data-cell="2"]').text();
  // let $three = $('[data-cell="3"]').text();
  // let $four = $('[data-cell="4"]').text();
  // let $five = $('[data-cell="5"]').text();
  // let $six = $('[data-cell="6"]').text();
  // let $seven = $('[data-cell="7"]').text();
  // let $eight = $('[data-cell="8"]').text();
  // if(
  //   $zero === turn &&
  //   $one === turn &&
  //   $two === turn
  //       )
  // ||(
  //   $three === turn &&
  //   $four === turn &&
  //   $five === turn
  //       )
  // ||(
  //   $six === turn &&
  //   $seven === turn &&
  //   $eight === turn
  //       )
  // ||(
  //   $zero === turn &&
  //   $three === turn &&
  //   $six === turn
  //       )
  // ||(
  //   $one === turn &&
  //   $four === turn &&
  //   $seven === turn
  //       )
  // ||(
  //   $two === turn &&
  //   $five === turn &&
  //   $eight === turn
  //       )
  // ||(
  //   $zero === turn &&
  //   $four === turn &&
  //   $eight === turn
  //       )
  // ||(
  //   $two === turn &&
  //   $four === turn &&
  //   $six === turn
  //       )
  // $('#announce-winner').html(`Player ${turn} wins!`);
};
win();
});
// $('[data-cell="0"]').text(); // specific cell
//
// if (
// $('[data-cell="0"]').text() === "X" &&
// $('[data-cell="1"]').text() === "X" &&
// $('[data-cell="2"]').text() === "X"
// );
//
// X wins;
//
// if condition OR (||) condition 2 || condition 3 etc., "X wins" else "O wins"
//
// total of 16 conditions (8 X's and 8 O's)
//
// use "turn" as a variable instead of saying data-cell.text = X or O, instead data-cell.text = turn (eliminates half of the condition)
