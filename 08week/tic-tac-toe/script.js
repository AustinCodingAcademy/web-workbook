'use strict';

$(document).ready(function () {
  var x = "x";
  var o = "o";
var start = true;
 var toggle = function () {
   if (!this.innerHTML){
      if (start) {
    this.innerHTML='o';
  }
  else {
   this.innerHTML='x';
  }
  start = !start; //falsy//
  } else {
    alert ("You can't click here");
  }
}

$('div>div').click(toggle);

function checkForWinner() {
if (cell1 === 'o' && cell2 === 'o' && cell3 === 'o') { return player1; }
else if (cell1 === 'x' && cell2 === 'x' && cell3 === 'x') { return player2; }
else if (cell4 === 'o' && cell5 === 'o' && cell6 === 'o') { return player1; }
else if (cell4 === 'x' && cell5 === 'x' && cell6 === 'x') { return player2; }
else if (cell7 === 'o' && cell8 === 'o' && cell9 === 'o') { return player1; }
else if (cell7 === 'x' && cell8 === 'x' && cell9 === 'x') { return player2; }
else if (cell1 === 'o' && cell4 === 'o' && cell7 === 'o') { return player1; }
else if (cell1 === 'x' && cell4 === 'x' && cell7 === 'x') { return player2; }
else if (cell2 === 'o' && cell5 === 'o' && cell8 === 'o') { return player1; }
else if (cell2 === 'x' && cell5 === 'x' && cell8 === 'x') { return player2; }
else if (cell3 === 'o' && cell6 === 'o' && cell9 === 'o') { return player1; }
else if (cell3 === 'x' && cell6 === 'x' && cell9 === 'x') { return player2; }
else if (cell1 === 'o' && cell5 === 'o' && cell9 === 'o') { return player1; }
else if (cell1 === 'x' && cell5 === 'x' && cell9 === 'x') { return player2; }
else if (cell3 === 'o' && cell5 === 'o' && cell7 === 'o') { return player1; }
else if (cell3 === 'x' && cell5 === 'x' && cell7 === 'x') { return player2; }
 }

$('#clear').click(function(){
  $('[data-cell]').empty();
});

});
