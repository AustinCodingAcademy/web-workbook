'use strict';

/*
To-do list:
 - Make discs draggable
 - style dropdown
 - add flair when you win
 - add fade out/fade in effect when resetting board
 - style page
*/


$(document).ready(function () {
  var $block = null;
  let $blocksize = 200;

  let numofdiscs = 4;
  let move = 1;
  let minmoves = 2 ** numofdiscs - 1;
  let factor = 100 / numofdiscs;
  let stop = "";

  $('#discs').on("click", function () {
    event.preventDefault();
    numofdiscs = $(this).find(':selected').text();
    setdiscs(numofdiscs);
  });



  // $('[data-stack]').sortable({
  //   connectWith: '[data-stack]',
  //   handle: '.justone',
  //   containment: 'div',
  //   cursor: 'pointer',
  //   revert: 'true'
  // //  beforeStop: function( event, ui ) {}
  //
  // });
  //





  $('[data-stack]').on("click", function () {
    // If you do not have a disc, pick up a disc
    if ((!stop) && (numofdiscs < 13)) {
      if (!$block) {
        $blocksize = $(this).children().last().attr('data-block');
        $block = $(this).children().last().detach();
        // $block = $(this).children().last().draggable({
        //   containment:"div",
        //   cursor: "pointer",
        //   revert: "invalid"
        // });

        // If you do have a disc, place it
      } else {
        // test block stacking levels
        let $baseblock = $(this).children().last().attr('data-block');
        // if the stack is blank or the botom disc is larger
        if (!($baseblock) || ($baseblock - $blocksize > 0)) {
          $(this).append($block);


          $block = null;
          $('.curmovecount').css("display", "inline");
          $('.curmovecount').text(`Current Moves: ${move}`);

          //check for win
          if (move >= minmoves) {
            let check = $(this).children().length;
            if (check == numofdiscs) {
              let nextdisc = parseInt(numofdiscs) + 1;
              stop = "yes";

              $('.curmovecount').text(`Total Moves: ${move}`);
              $('#announce-game-won').text(`Congratulations!  You  won the ${numofdiscs}-disc tower challenge!`);

              if (nextdisc < 12) {
                $('#announce-game-won').append(`<button>Try the ${nextdisc}-disc challenge</button`);

                // advance to next level
                $('button').on("click", function () {



                  setdiscs(nextdisc);
                  $('#announce-game-won').text(" ");
                  $('button').remove();
                  stop = "";
                });
              } else {
                $('#announce-game-won').after(`<p class="final-win">You are a Tower of Hanoi master</p`);
              }
            }
          }
          move++;
        };
      };
    };
  });



  function setdiscs(howmanydiscs) {
    $('[data-stack]').empty();
    numofdiscs = howmanydiscs;


    $(`#discs > option[value]`).removeAttr("selected");
    $(`#discs > option[value="${numofdiscs}"]`).attr("selected", "selected");
    move = 1;
    minmoves = 2 ** numofdiscs - 1;
    factor = Math.round(100 / numofdiscs);

    $('.minmovecount').text(`Minimum Moves: ${minmoves}`);
    $('.curmovecount').text(`Total Moves: 0`);

    for (let i = 0; i < numofdiscs; i++) {
      let color = rainbow(numofdiscs, i);
      let size = (100 + factor) - (factor * (i + 1));
      /*
        This was a terribly clever selector.  Pity I ended up not using it.
          $(`[data-stack="1"] > div:nth-child(${i+1})`).css({
      */
      $('[data-stack="1"]').append(`<div data-block="${size}"></div>`)
      $(`[data-stack="1"] > div:nth-child(${i+1})`).css({
        'backgroundColor': `${color}`,
        'width': `${size}px`
      });
    }

  }

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
