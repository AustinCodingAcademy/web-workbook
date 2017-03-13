$(function(){
  let playerTurn = 'X';

  $('[data-cell]').click(function(){
    let cell = $(this);
    // var state = getState(cell);

    if($(cell).text() === ('O') || $(cell).text() === ('X')) {
      console.log('Choose Another Square');
      $('#announce-winner').text('Please Choose Another Square');
    }
    else {
      $(cell).text(playerTurn);
      checkForWin(playerTurn);
      playerTurn = ($(this).text() === 'X') ?  'O' : 'X';
    }

})
    $('#clear').click(function(){
      $('#clear').fadeTo('fast',1);
      $('[data-cell]').text('');
      $('#announce-winner').text('');
      playerTurn = 'X';

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
    // if(
    //     for(let r = 0; r < 3; r++){
    //       for(let c = 0; c < 3; c++){
    //
    //       }
    //     }
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
          $('#announce-winner').text(playerTurn + " Has Won!!");
        }
        // tyrying to iterate through the data-cells to see if they are all full to declare a tie

      else if (
        for (var i = 0; i < 9 && $('[data-cell="i"]').text() !==(''); i++) {
          ){
            }


        $('#announce-winner').text('It/"s A Tie!');
      }
      }
