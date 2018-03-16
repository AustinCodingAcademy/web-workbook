'use strict';

$(document).ready(function() {
  var $block = null;
    $('[data-stack]').click(function() {
        if ($block !== null && Number($block.attr('data-block')) < Number($(this).children().last().attr('data-block') )) {
            console.log($block.attr('data-block'));

            $(this).append($block);
            $block = null;
        }
        else if ()

        else {
            $block = $(this).children().last().detach();
        }

    })
});
