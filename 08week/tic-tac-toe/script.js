'use strict';

$(document).ready(function() {
  // Put app logic in here
  var turnCount = 0;
  var availability;
  //  checkVictory('X');
  $('.row').find('div').on('click', function() {
    if (turnCount % 2 === 0) {

      $(this).text('X');
      checkVictory('X');
    } else {
      //player 2's turn (O)
      $(this).text('O');
      //  checkVictory('O');
    }
    turnCount++;
  });



  //if(($('[data-cell="0"]')text()===playerTurn  && $('[data-cell="1"]')text()===playerTurn && $('[data-cell="2"]')text()===playerTurn))

  /*    function checkVictory() {
        $("[data-cell="0"]:contains(X)").console.log("you win");
      }); */

  /*
    $(document).ready(function() {
      $("#reset").click(function() {
        $("article").css("background-color", "white");
      });
    });

  */






});
