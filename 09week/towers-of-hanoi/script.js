'use strict';

$(document).ready(function() {
    var block;

    function checkForWin() {
        var gameWon = false;
        $('[data-stack]').each(function () {
            if ($(this).data('stack') !== 1 && $(this).children().length === 4) {
                gameWon = true;
            }
        });
        return gameWon;
    }

    $('[data-stack]').on('click', function() {
        if (!block) {
            block = $(this).children().last().detach();
        } else {
            if ( !$(this).children().last().data('block') || $(this).children().last().data('block') > $(block).data('block') ) {
                $(this).append(block);
                block = null;
            }

            if (checkForWin()) {
                $('#announce-game-won').text('Winner!');
            }
        }
    });
    FastClick.attach(document.body);
});
