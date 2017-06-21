

// Player Turn
var players = {
    player1: [],
    player2: []
};
// Winning Combos
var winners = [
    ['.row11', '.row12', '.row13'],
    ['.row21', '.row22', '.row23'],
    ['.row31', '.row32', '.row33'],
    ['.row11', '.row21', '.row31'],
    ['.row12', '.row22', '.row32'],
    ['.row13', '.row23', '.row33'],
    ['.row11', '.row22', '.row33'],
    ['.row13', '.row22', '.row31']
];
var winner = false;

function clicked(whichSquare) {
    if (!winner) {
        if (validatePlay(whichSquare)) {
            if (players.player1.length === players.player2.length) {
                players.player1.push(whichSquare);
                $(whichSquare).text('X');
            } else if (players.player1.length > players.player2.length) {
                players.player2.push(whichSquare);
                $(whichSquare).text('O');
            }

            haveWinner();

            if (players.player1.length === 5 && !winner) {
                alert('You Tied!');
                winner = true;
            }
        }
    }
}

function validatePlay(whichSquare) {
    if (players.player1.indexOf(whichSquare) !== -1) {
        return false;
    }
    if (players.player2.indexOf(whichSquare) !== -1) {
        return false;
    }
    return true;
}

function haveWinner() {
    if (players.player1.length < 3) {
        winner = false;
    }


    winners.forEach(function(item, index, arr) {

        var p1 = _.filter(item, function(val) {
            return players.player1.indexOf(val) !== -1;
        });
        var p2 = _.filter(item, function(val) {
            return players.player2.indexOf(val) !== -1;
        });

        if (_.isEqual(p1, item)) {
            winner = true;
            $('#gameResults').text("Player 1 Wins!");
            $('#gameModal').modal('toggle');
        }

        if (_.isEqual(p2, item)) {
            winner = true;
            $('#gameResults').text("Player 2 Wins!");
            $('#gameModal').modal('toggle');
        }
    })

}
// Clear Board
function clearBoard() {
    $('span').text('');
    winner = false;
    players.player1 = [];
    players.player2 = [];
}
