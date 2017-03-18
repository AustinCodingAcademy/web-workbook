$(function(){
  let playerTurn = 'X';
  let numTurn = 0;

  $('[data-cell]').click(function(){
    let cell = $(this);
    // var state = getState(cell);

    if($(cell).text() === ('O') || $(cell).text() === ('X')) {
      console.log('Choose Another Square');
      $('#announce-winner').text('Please Choose Another Square');
    }
    else {
      $('#announce-winner').text('');
      $(cell).text(playerTurn);
      numTurn += 1;
      console.log(numTurn);
      if(numTurn >= 3) {
          if(checkForWin(playerTurn)){
                $('#announce-winner').text(playerTurn + " Has Won!!");
            }
          else if (numTurn === 9) {

             $('#announce-winner').text('It\'s A Tie!');

          }
        }

      playerTurn = ($(this).text() === 'X') ?  'O' : 'X';
    }
  })
    $('#clear').click(function(){
    $('#clear').fadeTo('fast',1);
    $('[data-cell]').text('');
    $('#announce-winner').text('');
    playerTurn = 'X';
    numTurn = 0;
  });
})

function getState(){
   if($(cell).text() === ('O') || $(cell).text() === ('X')) {
     console.log('there');
     return true;
      }
    else {
      return false;
      }
  }

function checkForWin(playerTurn){

  if(
      $('[data-cell="0"]').text() === playerTurn &&
      $('[data-cell="3"]').text() === playerTurn &&
      $('[data-cell="6"]').text() === playerTurn ||

      $('[data-cell="1"]').text() === playerTurn &&
      $('[data-cell="4"]').text() === playerTurn &&
      $('[data-cell="7"]').text() === playerTurn ||

      $('[data-cell="2"]').text() === playerTurn &&
      $('[data-cell="5"]').text() === playerTurn &&
      $('[data-cell="8"]').text() === playerTurn ||

      $('[data-cell="0"]').text() === playerTurn &&
      $('[data-cell="1"]').text() === playerTurn &&
      $('[data-cell="2"]').text() === playerTurn ||

      $('[data-cell="3"]').text() === playerTurn &&
      $('[data-cell="4"]').text() === playerTurn &&
      $('[data-cell="5"]').text() === playerTurn ||

      $('[data-cell="6"]').text() === playerTurn &&
      $('[data-cell="7"]').text() === playerTurn &&
      $('[data-cell="8"]').text() === playerTurn ||

      $('[data-cell="0"]').text() === playerTurn &&
      $('[data-cell="4"]').text() === playerTurn &&
      $('[data-cell="8"]').text() === playerTurn ||

      $('[data-cell="2"]').text() === playerTurn &&
      $('[data-cell="4"]').text() === playerTurn &&
      $('[data-cell="6"]').text() === playerTurn )
      {
          return true;
      }

      else {
        return false;
      }
    }
