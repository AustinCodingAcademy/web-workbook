'use strict';

$(document).on('ready', function() {});

  /*When player 1 clicks on a data cell, display an X*/

  /*When player 2 clicks on a data cell, display an O*/

  /*If a player clicks on a data cell that is already occupied
  by another player's marker, alert player to use another cell*/

  /*If all the cells are filled with a marker and no winner
  is definable, alert with a no winner message*/

  /*After player 1 clicks a data cell, player 1 can no longer click
  but player 2 can and vice versa*/

  /*Win arrays are:
  012, 345, 678,
  036, 147, 258,
  246, 048*/

  /*Display a reset button, when clicked clear the board*/

  /*Check the board for win arrays after every turn, if not
  then do not display winner message (unless the board is filled
  then display no winner message), if there is a win, alert
  with a win message*/

var player = 1;
function clickBtn(btn) {
  if (player == 1){
    document.getElementById(btn).value = "X";
    document.getElementById(btn).disabled = "disabled";
      player -= 1;
      winner();
    }else{
      document.getElementById(btn).value = "O";
      document.getElementById(btn).disabled = "disabled";
      player += 1;
      winner();
    }
  }

  function winner(){
  if(
    document.getElementById("btn1").value == "X" &&
    document.getElementById("btn2").value == "X" &&
    document.getElementById("btn3").value == "X" ||
    document.getElementById("btn4").value == "X" &&
    document.getElementById("btn5").value == "X" &&
    document.getElementById("btn6").value == "X" ||
    document.getElementById("btn7").value == "X" &&
    document.getElementById("btn8").value == "X" &&
    document.getElementById("btn9").value == "X" ||
    document.getElementById("btn1").value == "X" &&
    document.getElementById("btn4").value == "X" &&
    document.getElementById("btn7").value == "X" ||
    document.getElementById("btn2").value == "X" &&
    document.getElementById("btn5").value == "X" &&
    document.getElementById("btn8").value == "X" ||
    document.getElementById("btn3").value == "X" &&
    document.getElementById("btn6").value == "X" &&
    document.getElementById("btn9").value == "X" ||
    document.getElementById("btn1").value == "X" &&
    document.getElementById("btn5").value == "X" &&
    document.getElementById("btn9").value == "X" ||
    document.getElementById("btn3").value == "X" &&
    document.getElementById("btn5").value == "X" &&
    document.getElementById("btn7").value == "X"
  ){
  alert("The Winner is X!!!!");
  reset();
  }
  else if(
    document.getElementById("btn1").value == "O" &&
    document.getElementById("btn2").value == "O" &&
    document.getElementById("btn3").value == "O" ||
    document.getElementById("btn4").value == "O" &&
    document.getElementById("btn5").value == "O" &&
    document.getElementById("btn6").value == "O" ||
    document.getElementById("btn7").value == "O" &&
    document.getElementById("btn8").value == "O" &&
    document.getElementById("btn9").value == "O" ||
    document.getElementById("btn1").value == "O" &&
    document.getElementById("btn4").value == "O" &&
    document.getElementById("btn7").value == "O" ||
    document.getElementById("btn2").value == "O" &&
    document.getElementById("btn5").value == "O" &&
    document.getElementById("btn8").value == "O" ||
    document.getElementById("btn3").value == "O" &&
    document.getElementById("btn6").value == "O" &&
    document.getElementById("btn9").value == "O" ||
    document.getElementById("btn1").value == "O" &&
    document.getElementById("btn5").value == "O" &&
    document.getElementById("btn9").value == "O" ||
    document.getElementById("btn3").value == "O" &&
    document.getElementById("btn5").value == "O" &&
    document.getElementById("btn7").value == "O"
  ){
  alert("The Winner is O!!!");
  reset();
  }
  }

  function reset(){
    document.getElementById("btn1").value = "";
    document.getElementById("btn2").value = "";
    document.getElementById("btn3").value = "";
    document.getElementById("btn4").value = "";
    document.getElementById("btn5").value = "";
    document.getElementById("btn6").value = "";
    document.getElementById("btn7").value = "";
    document.getElementById("btn8").value = "";
    document.getElementById("btn9").value = "";
    document.getElementById("btn1").disabled = "";
    document.getElementById("btn2").disabled = "";
    document.getElementById("btn3").disabled = "";
    document.getElementById("btn4").disabled= "";
    document.getElementById("btn5").disabled= "";
    document.getElementById("btn6").disabled = "";
    document.getElementById("btn7").disabled = "";
    document.getElementById("btn8").disabled= "";
    document.getElementById("btn9").disabled = "";
  }
