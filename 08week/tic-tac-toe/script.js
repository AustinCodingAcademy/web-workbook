'use strict';
$(document).ready(function() {
// Put app logic in here
  var turn = true;
  var toggle = function () {
      if (!this.innerHTML) {
        var letter = turn ? 'X' : 'O';
        turn = !turn;
        this.innerHTML = letter;
        checkWin();
      }
    }
    var clearBoard = function () {
      $('.row>div').empty();
      $('#announce-winner').empty();
      turn = true;
    }
    $('div>div').click(toggle);
    $('#clear').click(clearBoard);

// check to see if the game is won
    var checkWin = function() {
      var $0mark = ($('#zero').text()),
          $1mark = ($('#one').text());
      var $2mark = ($('#two').text());
      var $3mark = ($('#three').text());
      var $4mark = ($('#four').text());
      var $5mark = ($('#five').text());
      var $6mark = ($('#six').text());
      var $7mark = ($('#seven').text());
      var $8mark = ($('#eight').text());
    /* horizontal win */
      if (($0mark + $1mark + $2mark === 'XXX') || ($0mark + $1mark + $2mark === 'OOO')) {
        clearBoard();
        $('#announce-winner').html($0mark + "'s win!");
      } else if (($3mark + $4mark + $5mark === 'XXX') || ($3mark + $4mark + $5mark === 'OOO')) {
        $('#announce-winner').html($3mark + "'s win!");
      } else if (($6mark + $7mark + $8mark === 'XXX') || ($6mark + $7mark + $8mark === 'OOO')) {
        $('#announce-winner').html($6mark + "'s win!");
      };

    /*vertical win */
    if (($0mark + $3mark + $6mark === 'XXX') || ($0mark + $3mark + $6mark === 'OOO')) {
      $('#announce-winner').html($0mark + "'s win!");
    } else if (($1mark + $4mark + $7mark === 'XXX') || ($1mark + $4mark + $7mark === 'OOO')) {
      $('#announce-winner').html($1mark + "'s win!");
    } else if (($2mark + $5mark + $8mark === 'XXX') || ($2mark + $5mark + $8mark === 'OOO')) {
      $('#announce-winner').html($2mark + "'s win!");
    };

  /*diagonal win */
    if (($0mark + $4mark + $8mark === 'XXX') || ($0mark + $4mark + $8mark === 'OOO')) {
      $('#announce-winner').html($0mark + "'s win!");
    } else if (($2mark + $4mark + $6mark === 'XXX') || ($2mark + $4mark + $6mark === 'OOO')) {
      $('#announce-winner').html($2mark + "'s win!");
    };
    /* tie */
    if (($0mark && $1mark && $2mark && $3mark && $4mark && $5mark && $6mark && $7mark && $8mark) == ('X' || 'O')) {
      $('#announce-winner').html("It's a tie!");
    }
  };
});
