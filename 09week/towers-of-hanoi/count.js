// window.onload = function() {
//  $("#resetGame").hide();
// }

var count = 0;

function checkForWin() {
  if ($('[data-stack="3"]').children().length === 4) {
    $('#announce-game-won').html("You Won!");
    $("#resetGame").show();
    }
}


// var total=0;
// var limit = 10;
//
// for ( i = 0; i < 10; i++){
//    total += i;
// }
//   console.log(total);

$("#resetGame").click(function() {
    $('[data-stack="1"]').html('<div data-block="100" ondragstart="dragBlock(event)"></div><div data-block="75"  ondragstart="dragBlock(event)"></div>    <div data-block="50"  ondragstart="dragBlock(event)"></div>   <div data-block="25" draggable="true" ondragstart="dragBlock(event)"></div>');
    $('[data-stack="2"]').empty();
    $('[data-stack="3"]').empty();
    $('#announce-game-won').empty();
    count = '0';
    $("#counter").html("Moves: "+count);
    $("#resetGame").hide();
  });

$("#update").click(function() {
    count++;
    $("#counter").html("Moves: "+count);
});

// $("#update").click(function() {
//     count++;
//     $("#counter").html("My current count is: "+count);
//     alert("erer")
// });
