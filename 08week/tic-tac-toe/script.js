'use strict';

$(document).ready(function() {

  var playerTurn = 'X';

  $('[data-cell]').on('click', function(event) {
    // $(this).text(playerTurn);
      var cellSelected = $(this).text(playerTurn);

        if(cellSelected.hasClass('X') || cellSelected.hasClass('O')) {
          alert('This square is already selected. Please select another.');
        } else {
          if(playerTurn === 'X') {
            cellSelected.addClass('X');
            if(checkIfPlayerWin('X')) {
                alert('Hurray! Player '+ playerTurn +' you won.')
            } else {
              playerTurn = 'O';
            }
          } else {
            cellSelected.addClass('O');
            if(checkIfPlayerWin('O')) {
                alert('Hurray! Player '+ playerTurn +' you won.')
            } else {
              playerTurn = 'X';
          }
        }
      }
    });

    function checkIfPlayerWin(symbol) {
      if($('[data-cell="1"]').hasClass(symbol) && $('[data-cell="2"]').hasClass(symbol) && $('[data-cell="3"]').hasClass(symbol)) {
        return true;
      } else if ($('[data-cell="4"]').hasClass(symbol) && $('[data-cell="5"]').hasClass(symbol) && $('[data-cell="6"]').hasClass(symbol)) {
        return true;
      } else if ($('[data-cell="7"]').hasClass(symbol) && $('[data-cell="8"]').hasClass(symbol) && $('[data-cell="9"]').hasClass(symbol)) {
        return true;
      } else if ($('[data-cell="1"]').hasClass(symbol) && $('[data-cell="4"]').hasClass(symbol) && $('[data-cell="7"]').hasClass(symbol)) {
        return true;
      } else if ($('[data-cell="2"]').hasClass(symbol) && $('[data-cell="5"]').hasClass(symbol) && $('[data-cell="8"]').hasClass(symbol)) {
        return true;
      } else if ($('[data-cell="3"]').hasClass(symbol) && $('[data-cell="6"]').hasClass(symbol) && $('[data-cell="9"]').hasClass(symbol)) {
        return true;
      } else if ($('[data-cell="1"]').hasClass(symbol) && $('[data-cell="5"]').hasClass(symbol) && $('[data-cell="9"]').hasClass(symbol)) {
        return true;
      } else if ($('[data-cell="3"]').hasClass(symbol) && $('[data-cell="5"]').hasClass(symbol) && $('[data-cell="7"]').hasClass(symbol)) {
        return true;
      } else {
        return false;
      }
    };
// its not a clear fields function but a 'refresh' page function! //

    $('#btn').on('click', function() {
      location.reload();
    });
    // function btn() {
    //   onclick;
    // }
      // $('[data-cell]').text('');
    // });

    // $('#clear').click(function () {
    //   $('#tictactoe').val('');
    // })


    //    if ($('[data-cell="1"]').text() === 'X' && $('[data-cell="4"]').text() === 'X' && $('[data-cell="7"]').text() === 'X'){
    //     console.log('X wins!');
    // } else ($('[data-cell="2"]').text() === 'X' && $('[data-cell="5"]').text() === 'X' && $('[data-cell="8"]').text() === 'X'){
    //     console.log('X wins!');
    // } else ($('[data-cell="3"]').text() === 'X' && $('[data-cell="6"]').text() === 'X' && $('[data-cell="9"]').text() === 'X'){
    //     console.log('X wins!');
    // } else ($('[data-cell="2"]').text() === 'X' && $('[data-cell="5"]').text() === 'X' && $('[data-cell="8"]').text() === 'X'){
    //     console.log('X wins!');
    // } else ($('[data-cell="2"]').text() === 'X' && $('[data-cell="5"]').text() === 'X' && $('[data-cell="8"]').text() === 'X'){
    //     console.log('X wins!');

});
