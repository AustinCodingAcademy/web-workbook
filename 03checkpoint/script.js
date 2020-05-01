$(document).ready(function() {
  // this is the timer jquery that will count down from 30 seconds
let count=30;
let counter=setInterval(timer, 1000);
function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     return;
  }
}
function timer()
{
  count=count-1;
  if (count <= -1)
  // Alert that timer is up - player 2 should begin playing
  {
     alert("Player 2 Begin!");
     clearInterval(counter);
     return;
  }
  document.getElementById("timer").innerHTML=count + " secs";
}
// jquery for the puzzle begins here
  // First we use there z-index property which specifies the stack order of an element. An element with greater stack order is always in front of an element with a lower stack order.
    // We increment Z index each time that a puzzle piece is moved to change the priority
    let zi = 1;
    // We define an EmptySquare so that there is a place to move the puzzle pieces
    let EmptySquare = 16;
    $.fn.extend({ fifteen:
        function(square_size) {
            // Grab the HTML id element into which we are placing the puzzle piece
            let gameObjectElement = '#' + $(this).attr('id');
            let sqSize = square_size + 'px';
            let boardSize = (square_size * 4) + 'px';
            // Append DIV into puzzle to create the game board
            $(gameObjectElement).html('<div id="board"></div>');
            $('#board').css({ position:'absolute', width: boardSize, height: boardSize, border: '1px solid gray' });
            // Populate the game board with 15 squares
            for (let i = 0; i < 16; i++) {
                $('#board').append("<div style='left: " + ((i % 4) * square_size) + "px; top: " + Math.floor(i / 4) * square_size + "px; width: " + square_size + "px; height: " + square_size + "px; background-position: " + (-(i % 4) * square_size) + "px " + -Math.floor(i / 4) * square_size + "px '></div>");
            }
            // DIV #16 is empty to allow user to move puzzle pieces
            $('#board').children("div:nth-child(" + EmptySquare + ")").css({backgroundImage: "", background: "#ffffff"});
            // Attaching a click event to each square with the puzzle board
            $('#board').children('div').click(function() {
                Move(this, square_size);
            });
        }
    });
// When the squre is clicked, use the Move function
    function Move(clicked_square, square_size) {
        // We need to locate which pieces are moveable based on where the empty square is
        // We can only move the four surrounding squares of the empty square
        let movable = false;
        // Swap x and y between the clicked square and the currently empty square
        let xOld = $('#board').children("div:nth-child(" + EmptySquare + ")").css('left');
        let oldY = $('#board').children("div:nth-child(" + EmptySquare + ")").css('top');
        let xNew = $(clicked_square).css('left');
        let newY = $(clicked_square).css('top');
      // The parseInt() function parses a string and returns an integer.
        // If the clicked puzzle piece is above the empty square, do this
        if (xOld == xNew && newY == (parseInt(oldY) - square_size) + 'px')
            movable = true;
        // If the clicked puzzle piece is below the empty squre, do this
        if (xOld == xNew && newY == (parseInt(oldY) + square_size) + 'px')
            movable = true;
        // If the clicked puzzle piece is to the right of the empty square, do this
        if ((parseInt(xOld) - square_size) + 'px' == xNew && newY == oldY)
            movable = true;
        // If the clicked puzzle piece is to the left of the empty square, do this
        if ((parseInt(xOld) + square_size) + 'px' == xNew && newY == oldY)
            movable = true;
        if (movable) {
            // The Z-index ensures the most recently moved puzzle pieces takes priority
            $(clicked_square).css('z-index', zi++);
            // Move the clicked puzzle piece into the empty space
            // Animate the newly empty square white
            $(clicked_square).animate({ left: xOld, top: oldY }, 200, function() {
                $('#board').children("div:nth-child(" + EmptySquare + ")").css('left', xNew);
                $('#board').children("div:nth-child(" + EmptySquare + ")").css('top', newY);
            });
        }
    }
    $('#puzzle').fifteen(175);
});
