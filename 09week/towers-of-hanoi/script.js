'use strict';

$(document).ready(function() {
    var block;
    //display data
    function checkForWin() {
        var gameWon = false;
        $("[data-stack]").each(function () {
            if ($(this).data("stack") !== 1 && $(this).children().length === 5) {
                gameWon = true;
            }
        });
        return gameWon;
    }
    //move pieces, listen for clicks, check for good move
    $("[data-stack]").on("click", function() {
        if (!block) {
            block = $(this).children().last().detach();
        } else {
            if ( !$(this).children().last().data("block") || $(this).children().last().data("block") > $(block).data("block") ) {
                $(this).append(block);
                block = null;
            }
    //winner announcement
            if (checkForWin()) {
                $("#announce-game-won").text("Winner!");
            }
        }
    });
    FastClick.attach(document.body);
});
