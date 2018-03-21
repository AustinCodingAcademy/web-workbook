'use strict';

$(document).ready(function() {

  let totalBoxes = 0;
  let started = false;

  function start() {
    hideStartBox ();
    started = true;
    let timer = 10;
    setInterval(function() {
      timer--;
      if (timer >= 0) {
        let currTime = document.querySelector("#seconds");
        currTime.innerHTML = timer;
      }
      if (timer === 0) {
        clearInterval(timer);
        totalBoxes = $('.flip').length;
        reportWin(totalBoxes);
      }
    }, 1000);
  };

  function hideStartBox () {
    $("#startBox").addClass("hideBox")
  };

  function reportWin(totalBoxes) {
    let reportWin = $("#reportWinBox");
    reportWin = $("#reportWinBox").css("visibility", "visible");
    $("#reportWinBox").prepend(`<p>You flipped ${totalBoxes} boxes!</p>`);
    // if (totalBoxes < 5) {
    //   $("#reportWinBox").prepend(`<p>you can do better</p>`);
    // }
  };

  $('.box').click(function() {
    if (!started) {
      start()
    };
    $(this).addClass("flip")
  });

  $("#reportWinBox").click(function() {
    location.reload();
  });

});
