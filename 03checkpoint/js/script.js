'use strict';

$(document).ready(function() {

  var timer;

  $('.box').one('click', function() {
    console.log("start"); //can remove//
    if (!timer) {
      let timer = 10;
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
        }
      }, 1000);
    };
  });

  $('.box').click(function() {
    $(this).detach();
  })

});
