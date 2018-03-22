'use strict';

$(document).ready(function() {

  let totalBoxes = 0;
  let started = false;

  function start() {
    hideStartBox();
    started = true;
    let timer = 15;
    setInterval(function() {
      timer--;
      if (timer >= 0) {
        let currTime = document.querySelector("#seconds");
        currTime.innerHTML = timer;
      }
      if (timer === 0) {
        $('.box').unbind("click");
        clearInterval(timer);
        totalBoxes = $('.flip').length;
        reportWin(totalBoxes);
      }
    }, 1000);
  };

  function hideStartBox() {
    $("#startBox").addClass("hideBox")
  };

  function reportWin(totalBoxes) {
    let reportWin = $("#reportWinBox");
    reportWin = $("#reportWinBox").css("visibility", "visible");
    if (totalBoxes === 1) {
      $("#reportWinBox").prepend(`<p>You flipped ${totalBoxes} box!</p>`);
    } else {
      $("#reportWinBox").prepend(`<p>You flipped ${totalBoxes} boxes!</p>`);
    }
  };

  $('.box').click(function() {
    if (!started) {
      start()
    };
    $(this).addClass("flip")
  });

  $("#playAgainButton").click(function() {
    location.reload();
  });

});
