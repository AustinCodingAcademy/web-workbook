//set moves to zero
var moves= 0;

//if the length of stack 3 has 4 children(bars), then announce winner
function checkForWin() {
  if ($('[data-stack="3"]').children().length === 4) {
    $('#announce-game-won').html("You Won in " + moves +" moves!!!");
    $("#resetGame").show();
    $("#moves").hide();
    $('[data-block="25"]').removeAttr("draggable"); //remove attribute from 25 because it is the first block in stack
  }
}


//Reset game.  Empty stacks 2 and 3 and populate stack 1 with data-blocks and attributes
$("#resetGame").click(function() {
    $('[data-stack="1"]').html('<div data-block="100" ondragstart="dragBlock(event)"></div><div data-block="75"  ondragstart="dragBlock(event)"></div>    <div data-block="50"  ondragstart="dragBlock(event)"></div>   <div data-block="25" draggable="true" ondragstart="dragBlock(event)"></div>');
    $('[data-stack="2"]').empty();
    $('[data-stack="3"]').empty();
    $('#announce-game-won').empty();
    $('#count').text('0');
    moves = 0;  //set the counter back to zero
    $("#resetGame").hide(); //hide reset button
    $("#moves").show(); //show move
  });
