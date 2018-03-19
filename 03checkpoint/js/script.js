'use strict';

$(document).ready(function() {

let totalBoxes = 0;

  $('#start').click(function() {
    console.log("start"); //can remove//
    let timer = 3;

    setInterval(function() {
      timer--;
      if (timer >= 0) {
        let currTime = document.querySelector("#seconds");
        console.log(currTime);
        currTime.innerHTML = timer;
      }
      if (timer === 0) {
        console.log('out of time');
        clearInterval(timer);
        totalBoxes = $('.hideBox').length;
        console.log(totalBoxes);
        reportWin (totalBoxes);
      }
    }, 1000);
  });


  $('.box').click(function() {
    $(this).addClass("hideBox")
  });

  $('#playAgainButton').click(function() {
    location.reload();
  });

function reportWin (totalBoxes) {
  let reportWin = $("#reportWinBox");
  reportWin = $("#reportWinBox").css("visibility", "visible");
  console.log(reportWin);
  if (totalBoxes > 5) {
    reportWin.html(`You clicked ${totalBoxes} boxes! <br><button type="button" name="playAgain" id="playAgainButton">Play Again</button>`);
  }
};

});
