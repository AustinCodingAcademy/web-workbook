// window.onload = function() {
//  $("#resetGame").hide();
// }

var moves= 0;

function checkForWin() {
  if ($('[data-stack="3"]').children().length === 4) {
    $('#announce-game-won').html("You Won!");
    $("#resetGame").show();
    $("#message").text("you've won! in " + moves + " moves");
  }
}

$("#resetGame").click(function() {
    $('[data-stack="1"]').html('<div data-block="100" ondragstart="dragBlock(event)"></div><div data-block="75"  ondragstart="dragBlock(event)"></div>    <div data-block="50"  ondragstart="dragBlock(event)"></div>   <div data-block="25" draggable="true" ondragstart="dragBlock(event)"></div>');
    $('[data-stack="2"]').empty();
    $('[data-stack="3"]').empty();
    $('#announce-game-won').empty();
    $('#count').text('0');
    moves = 0;
    $("#resetGame").hide();
  });
