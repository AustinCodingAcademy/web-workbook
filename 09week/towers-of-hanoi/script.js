'use strict';

$(document).ready(function() {
  //   var sound = document.createElement('audio');
  //   sound.setAttribute('src', 'moon.mp3');
  //   $.get();
  //   // Put app logic here
  //   $('[data-stack]').click(function() {
  //     sound.play();
  //     // played = true;
  //     // console.log("Playing");
  // });
  // $('#song').get(0).play();
  $('.draggable').draggable({
    revert: "invalid"
  });
  $('[data-stack]').droppable({
    drop: function(event, ui) {
      var drag = $(ui.draggable).attr('data-block');
      var last = $(this).children().last().attr('data-block');
      if (parseInt(drag) > parseInt(last)) {
        $(ui.draggable).draggable({
          revert: true
        });
        checkWin()

      } else {
        $(ui.draggable).appendTo(this).attr('style', 'position: relative');
        checkWin();

      }
    }

  });

  function checkWin() {
    let $total1 = $('[data-stack="1"]').children().length;
    let $total2 = $('[data-stack="2"]').children().length;
    let $total3 = $('[data-stack="3"]').children().length;
    if ($total1 === 5 || $total2 === 5 || $total3 === 5) {
      $('#announce-game-won').text("The Game has been Won!");
    }
  }

});
