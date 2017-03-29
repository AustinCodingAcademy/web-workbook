$(function() {
    let playerTurn = 'X';
    $('[data-cell]').click(function() {
        $(this).text(playerTurn);
        if (checkWin()) {
            $('#announce-winner').text(`${playerTurn} wins!`)
        } else {
            if (playerTurn === 'X') {
                playerTurn = 'O';
            } else {
                playerTurn = 'X';
            }
        }
    })

    function checkWin() {
        if (
            ($('[data-cell="0"]').text() === playerTurn &&
                $('[data-cell="3"]').text() === playerTurn &&
                $('[data-cell="6"]').text() === playerTurn) ||

            ($('[data-cell="1"]').text() === playerTurn &&
                $('[data-cell="4"]').text() === playerTurn &&
                $('[data-cell="7"]').text() === playerTurn)
        );


        {
            return true;
        } else {
            return false;
        }
    }

})
