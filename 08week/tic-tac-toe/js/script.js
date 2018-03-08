'use strict';

$(document).ready(function() {
  $('#clear').html("Clear Board and Play Again")
  let $thistic = "ticx";
  let turn = 1;
  let win = "none"

  // Play tic tac toe
  $('div[data-cell]').on('click', function() {
    if ((turn < 10) && (win === "none")) {
      let checkfield1 = $(this).hasClass("tico");
      let checkfield2 = $(this).hasClass("ticx");

      if ((checkfield1) || (checkfield2)) {
        turn--;
        toggletic($thistic);
      }
      if ((!checkfield1) && (!checkfield2)) {
        $(this).addClass(`${$thistic}`);
      }
      toggletic($thistic);

      // check for win
      if ((turn > 4) && (turn < 10)) {
        checkforwin();
        if (win != "none") {
          $('#announce-winner').html(`Congratulations, ${win}!!   Play again?`);
          turn = 10;
        }
      }
      if ((turn > 8) && (win === "none")) {
        $('#announce-winner').html(`Ended in a stalemate.   Play again?`);
      }

      turn++
    }
  });

  function toggletic() {
    if ($thistic === "ticx") {
      $thistic = "tico";
    } else {
      $thistic = "ticx";
    }
    return ($thistic);
  }

  function checkforwin() {
    let $testxwin = 0;
    let $testowin = 0;


    // testing rows
    for (let i = 1; i < 4; i++) {
      $testxwin = $(`.row:nth-child(${i}) > div[class~="ticx"]`).length;
      $testowin = $(`.row:nth-child(${i}) > div[class~="tico"]`).length;
      if ($testxwin === 3) {
        win = "X";
        return (win);
      }
      if ($testowin === 3) {
        win = "O";
        return (win);
      }

    }

    //testing columns
    $testxwin = 0;
    $testowin = 0;
    for (let j = 1; j < 4; j++) {
      $testxwin = $(`.row > div:nth-child(${j})[class~="ticx"]`).length;
      $testowin = $(`.row > div:nth-child(${j})[class~="tico"]`).length;

      if ($testxwin === 3) {
        win = "X";;
        return (win);
      }
      if ($testowin === 3) {
        win = "O";
        return (win);
      }

    }


    //testing diagonals

    let $testxwinr = 0;
    let $testowinr = 0;
    let $testxwinl = 0;
    let $testowinl = 0;

    $testxwinr = $('div[data-cell="0"][class~="ticx"],div[data-cell="4"][class~="ticx"],div[data-cell="8"][class~="ticx"]').length;
    $testxwinl = $('div[data-cell="2"][class~="ticx"],div[data-cell="4"][class~="ticx"],div[data-cell="6"][class~="ticx"]').length;


    $testowinr = $('div[data-cell="0"][class~="tico"],div[data-cell="4"][class~="tico"],div[data-cell="8"][class~="tico"]').length;
    $testowinl = $('div[data-cell="2"][class~="tico"],div[data-cell="4"][class~="tico"],div[data-cell="6"][class~="tico"]').length;

    if (($testxwinr === 3) || ($testxwinl === 3)) {
      win = "X";
      return (win);
    }
    if (($testowinr === 3) || ($testowinl === 3)) {
      win = "O";
      return (win);
    }

  };



  // clear Board
  $('#clear').on('click', function() {
    $('div[data-cell]').removeClass();
    turn = 1;
    $thistic = "ticx";
    win = "none";
    $('#announce-winner').empty();
  });
});
