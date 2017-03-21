$(function() {
    let tictac = 'X';
    $('[data-cell]').click(function() {
        $(this).text(tictac);

        if (checkWin()) {
          $('#announce-winner').text(`${tictac} wins!`);
        } else {
          if (tictac === 'X') {
              tictac = 'O';
          } else {
              tictac = 'X';
          }
        }
    })

    function checkWin() {
        if (
            ($('[data-cell="0"]').text() === tictac &&
                $('[data-cell="3"]').text() === tictac &&
                $('[data-cell="6"]').text() === tictac) ||

            ($('[data-cell="1"]').text() === tictac &&
                $('[data-cell="4"]').text() === tictac &&
                $('[data-cell="7"]').text() === tictac) ||

            ($('[data-cell="2"]').text() === tictac &&
                $('[data-cell="5"]').text() === tictac &&
                $('[data-cell="8"]').text() === tictac) ||

            ($('[data-cell="0"]').text() === tictac &&
                $('[data-cell="1"]').text() === tictac &&
                $('[data-cell="2"]').text() === tictac) ||

            ($('[data-cell="3"]').text() === tictac &&
                $('[data-cell="4"]').text() === tictac &&
                $('[data-cell="5"]').text() === tictac) ||

            ($('[data-cell="6"]').text() === tictac &&
                $('[data-cell="7"]').text() === tictac &&
                $('[data-cell="8"]').text() === tictac) ||

            ($('[data-cell="0"]').text() === tictac &&
                $('[data-cell="4"]').text() === tictac &&
                $('[data-cell="8"]').text() === tictac) ||

            ($('[data-cell="2"]').text() === tictac &&
                $('[data-cell="4"]').text() === tictac &&
                $('[data-cell="6"]').text() === tictac)

        ) {
            return true;
        } else {
            return false;
        }
    }

})
