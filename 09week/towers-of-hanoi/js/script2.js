'use strict';

$(document).ready(function () {
  var $block = null;
  let $blocksize = 200;

  let numofdiscs = 4;
  let move = 1;
  let minmoves = 2 ** numofdiscs - 1;
  let factor = 100 / numofdiscs;


  for (let i = 0; i < numofdiscs; i++) {
    let color = rainbow(numofdiscs, i);
    let size = (100 + factor) - (factor * (i + 1));
    $(`[data-stack="1"] > div:nth-child(${i+1})`).css({
      'backgroundColor': `${color}`,
      'height': `${size}px`
    });
  }


  $('[data-stack]').click(function () {
    // If you do not have a disc, pick up a disc
    if (!$block) {
      $blocksize = $(this).children().last().attr('data-block');
      $block = $(this).children().last().detach();

      // If you do have a disc, place it
    } else {
      // test block stacking levels
      let $baseblock = $(this).children().last().attr('data-block');
      // if the stack is blank or the botom disc is larger
      if (!($baseblock) || ($baseblock - $blocksize > 0)) {
        $(this).append($block);
        $block = null;


        //check for win
        if (move > minmoves) {
          let check = $(this).children().length;
          if (check === numofdiscs) {
            $('#announce-game-won').text("won");
          }
        }
        move++;
      };
    };
  });


  function rainbow(numOfSteps, step) {
    // This function generates vibrant, "evenly spaced" colours (i.e. no clustering). This is ideal for creating easily distinguishable vibrant markers in Google Maps and other apps.
    // Adam Cole, 2011-Sept-14
    // HSV to RBG adapted from: http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
    var r, g, b;
    var h = step / numOfSteps;
    var i = ~~(h * 6);
    var f = h * 6 - i;
    var q = 1 - f;
    switch (i % 6) {
    case 0:
      r = 1;
      g = f;
      b = 0;
      break;
    case 1:
      r = q;
      g = 1;
      b = 0;
      break;
    case 2:
      r = 0;
      g = 1;
      b = f;
      break;
    case 3:
      r = 0;
      g = q;
      b = 1;
      break;
    case 4:
      r = f;
      g = 0;
      b = 1;
      break;
    case 5:
      r = 1;
      g = 0;
      b = q;
      break;
    }
    var c = "#" + ("00" + (~~(r * 255)).toString(16)).slice(-2) + ("00" + (~~(g * 255)).toString(16)).slice(-2) + ("00" + (~~(b * 255)).toString(16)).slice(-2);
    return (c);
  }

});
