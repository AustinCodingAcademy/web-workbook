$(function(){
  let playerTurn = 'X';
  $('[data-cell]').click(function(){
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
// $('#clear').click('[data-cell]').text('');
})
