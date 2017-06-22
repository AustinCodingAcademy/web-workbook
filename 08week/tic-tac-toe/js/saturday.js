$(document).ready(function() {
    var player = 1;
    $('.html').on('click', function(event) {
      //  alert('add symbol here');
        var boxSelected = $(this);

        if (boxSelected.hasClass('exes') || boxSelected.hasClass('ohs')) {
            alert('You cant do that! Nice try');
        } else {
            if (player == 1) {
                boxSelected.addClass('exes');
                if (checkIfPlayerWon('exes')) {
                    alert('Congrats! Player ' + player + 'has won the game!');
                } else {
                    player = 2;
                }
            } else {
                boxSelected.addClass('ohs');
                if (checkIfPlayerWon('ohs')) {
                    alert('Congrats! Player ' + player + 'has won the game!');
                } else {
                    player = 1;
                }
            }
        }
    });

    function checkIfPlayerWon(symbol) {
      if ($('div [data-cell="0"]').hasClass(symbol) && $('div [data-cell="1"]').hasClass(symbol) && $('div [data-cell="2"]').hasClass(symbol)) {
  return true;
} else if ($('div [data-cell="3"]').hasClass(symbol) && $('div [data-cell="4"]').hasClass(symbol) && $('div [data-cell="5"]').hasClass(symbol)) {
            return true;
        } else if ($('div [data-cell="6"]').hasClass(symbol) && $('div [data-cell="7"]').hasClass(symbol) && $('div [data-cell="8"]').hasClass(symbol)) {
            return true;
        } else if ($('div [data-cell="0"]').hasClass(symbol) && $('div [data-cell="3"]').hasClass(symbol) && $('div [data-cell="6"]').hasClass(symbol)) {
            return true;
        } else if ($('div [data-cell="1"]').hasClass(symbol) && $('div [data-cell="4"]').hasClass(symbol) && $('div [data-cell="7"]').hasClass(symbol)) {
            return true;
        } else if ($('div [data-cell="2"]').hasClass(symbol) && $('div [data-cell="5"]').hasClass(symbol) && $('div [data-cell="8"]').hasClass(symbol)) {
            return true;
        } else if ($('div [data-cell="2"]').hasClass(symbol) && $('div [data-cell="4"]').hasClass(symbol) && $('div [data-cell="6"]').hasClass(symbol)) {
            return true;
        } else if ($('div [data-cell="0"]').hasClass(symbol) && $('div [data-cell="4"]').hasClass(symbol) && $('div [data-cell="8"]').hasClass(symbol)) {
            return true;
        } else if ($('div [data-cell="2"]').hasClass(symbol) && $('div [data-cell="4"]').hasClass(symbol) && $('div [data-cell="6"]').hasClass(symbol)) {
            return true;
        } else {
            return false;
        }
    }
});
