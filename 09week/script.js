$(function(){
  let playerTurn = 'X';

  $('[data-cell]').click(function(){
    let cell = $(this);
    let state = getState(cell);

    // if(!state) {
    //   console.log("here");
    // }
    $(this).text(playerTurn);
    checkForWin();
    playerTurn = ($(this).text() === 'X') ?  'O' : 'X';

    })
  function checkForWin(){
      if(
        $('[data-cell="0"]').text() === playerTurn &&
        $('[data-cell="3"]').text() === playerTurn &&
        $('[data-cell="6"]').text() === playerTurn
      ){

        $('#announce-winner').text(playerTurn + "Has Won!!");
      }
    }

$('#clear').mouseenter(){
  $('#clear').fadeTo('fast',1);
  $('#clear').click(function() {
      $('[data-cell]').text('');
      playerTurn = 'X';
    });
  })
   function getState(cell){
     if($(cell).text() === ('O') || $(cell).text() === ('X')) {
       console.log('there');
     }
    // else{
    //   console.log('here');
    //
  }
   }
})
