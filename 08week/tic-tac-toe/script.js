'use strict';

$(document).ready(function() {
  // Put app logic in here
var xArray = [];
var oArray= [];
var player1turn = true;
  $("div[data-cell]").click(function()
    {
    var squareNumber = $(this).attr("data-cell");
      alert(squareNumber);
    var squareText = executeTurn();
      $(this).text(squareText);
    }
  )
  function executeTurn(squareNumber)
    {
//this funciton is going to create an x for player 1, and a 0 for player two on the passed sqaure
//This function will also change the text of the game instructions
    if(player1turn)
      {
        xArray.push(squareNumber)
        player1turn = false;
        $('.game-insturctions').text('Player 2s turn');
        return "X";
      }
      oArray.push(squareNumber)
      player1turn=true;
        $('.game-insturctions').text('Player 1s turn');
        return "O";
    }
    function CheckForWinner(playerArray)
      {
        if($.inArray("0",playerArray)!=-1 && $.inArray("1",playerArray)!=-1
        && $.inArray("2", playerArray)!=-1);
      }















      }

});
