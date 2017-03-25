$(document).ready(function(){
  $('audio').stop("true").delay('200').queue(function() {
                   $(this).html('<audio autoplay="autoplay"><source src="misc/Shall-we-play-a-game.mp3" type="audio/mp3" /></audio>');
               });


            $('#typewriter').typewriter({
             	prefix : ": ",
             	text : ["Shall we play a game? "],
             	typeDelay : 100,
             	waitingTime : 500000,
             	blinkSpeed : 200,
            });



  var playerTurn = "X";
  $('[data-cell]').on('click', function(){
    if($(this).text()=== '') {
      $(this).text(playerTurn);
      checkForWin();
      if(playerTurn === 'X') {
        playerTurn = 'O';
      } else {
        playerTurn = 'X';
      }
    }
    //clear the board and reset playerTurn
    $('#clear').on('click', function(){
      $('[data-cell]').text('');
      $('#typewriter').text('Shall we play again?').effect('highlight', {color: '#92A2BB'}, 300);
      $('audio').stop("true").delay('200').queue(function() {
                       $(this).html('<audio autoplay="autoplay"><source src="misc/Shall-we-play-a-game.mp3" type="audio/mp3" /></audio>');
                     });

      playerTurn = 'X';
    });

  });

  function checkForWin() {
    if(
      ($('[data-cell="0"]').text() === playerTurn &&
      $('[data-cell="3"]').text() === playerTurn &&
      $('[data-cell="6"]').text() === playerTurn)
      ||
      ($('[data-cell="1"]').text() === playerTurn &&
      $('[data-cell="4"]').text() === playerTurn &&
      $('[data-cell="7"]').text() === playerTurn)
      ||
      ($('[data-cell="2"]').text() === playerTurn &&
      $('[data-cell="5"]').text() === playerTurn &&
      $('[data-cell="8"]').text() === playerTurn)
      ||
      ($('[data-cell="0"]').text() === playerTurn &&
      $('[data-cell="1"]').text() === playerTurn &&
      $('[data-cell="2"]').text() === playerTurn)
      ||
      ($('[data-cell="3"]').text() === playerTurn &&
      $('[data-cell="4"]').text() === playerTurn &&
      $('[data-cell="5"]').text() === playerTurn)
      ||
      ($('[data-cell="6"]').text() === playerTurn &&
      $('[data-cell="7"]').text() === playerTurn &&
      $('[data-cell="8"]').text() === playerTurn)
      ||
      ($('[data-cell="0"]').text() === playerTurn &&
      $('[data-cell="4"]').text() === playerTurn &&
      $('[data-cell="8"]').text() === playerTurn)
      ||
      ($('[data-cell="2"]').text() === playerTurn &&
      $('[data-cell="4"]').text() === playerTurn &&
      $('[data-cell="6"]').text() === playerTurn)
    ) {
      $('#typewriter').text(`Player ${playerTurn} Wins!`).effect('pulsate');
      $('audio').stop("true").delay('20').queue(function() {
                       $(this).html('<audio autoplay="autoplay"><source src="misc/applause3.mp3" type="audio/mp3" /></audio>');
                     });
    }
  }
});
