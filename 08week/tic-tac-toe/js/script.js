'use strict';

$(document).ready(function() {
  let $thistic = "ticx";
  let turn = 1;
  let win = "none"
  $('div[data-cell]').on('click', function() {
    if ((turn < 10) && (win === "none")) {
      $(this).addClass(`${$thistic}`);
      if ($thistic === "ticx") {
        $thistic = "tico";
      } else {
        $thistic = "ticx";
      }
      turn++
      // check for win
      if ((turn > 5) && (turn < 10)) {
        checkforwin();
      }
      if (turn > 9) {
        checkforstalemate();
      }
    }
  });

  function checkforwin() {
    let $testxwin = 0;
    let $testowin = 0;

    let $testxwinr = 0;
    let $testowinr = 0;
    let $testxwinl = 0;
    let $testowinl = 0;

    // testing rows
    for (let i = 1; i < 4; i++) {
      $testxwin = $(`.row:nth-child(${i}) > div[class~="ticx"]`).length;
      $testowin = $(`.row:nth-child(${i}) > div[class~="tico"]`).length;
      if ($testxwin === 3) {
        turn = 10;
        console.log('x has won');
      }
      if ($testowin === 3) {
        turn = 10;
        console.log('o has won');
      }

      //testing columns

      //testing diagonals
      $testxwinr = $('div[data-cell="0"][class~="ticx"],div[data-cell="4"][class~="ticx"],div[data-cell="8"][class~="ticx"]').length;
      $testxwinl = $('div[data-cell="2"][class~="ticx"],div[data-cell="4"][class~="ticx"],div[data-cell="6"][class~="ticx"]').length;


      $testowinr = $('div[data-cell="0"][class~="tico"],div[data-cell="4"][class~="tico"],div[data-cell="8"][class~="tico"]').length;
      $testowinl = $('div[data-cell="2"][class~="tico"],div[data-cell="4"][class~="tico"],div[data-cell="6"][class~="tico"]').length;

      if (($testxwinr === 3) || ($testxwinl === 3)) {
        turn = 10;
        console.log('x has won');
      }
      if (($testowinr === 3) || ($testowinl === 3)) {
        turn = 10;
        console.log('o has won');
      }
    }
  };

  function checkforstalemate() {
    console.log('we are checking for stalemate');
  };

  // clear Board
  //<button id="clear">
  $('#clear').on('click', function() {
    $('div[data-cell]').removeClass();
    turn = 1;
  });
});
