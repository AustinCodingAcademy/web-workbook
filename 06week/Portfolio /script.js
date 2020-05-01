"use strict";

$(document).ready(function() {
  //   $(".world").hide();

  $(".work").on("click", () => {
    console.log("Test");
    $(".world").slideToggle(400);
  });

  $(".work").click(function() {
    console.log("Test 2");
  });
  // window.onload = function() {
  // var canvas = document.querySelector(".world");
  // var ctx = canvas.getContext("2d");
  // ctx.fillStyle = "rgb(200, 0 ,0)";
  // ctx.fillRect(10, 10, 50, 50);

  // ctx.fillStyle = "rgba(0, 0 ,200, 0.5)";
  // ctx.fillRect(30, 30, 50, 50);
  //};

  $(function() {
    var state = true;
    $(".contact").on("click", function() {
      if (state) {
        $(this).animate(
          {
            "font-size": "15px"
          },
          1000
        );
      } else {
        $(this).animate(
          {
            "font-size": "45px"
          },
          1000
        );
      }
      state = !state;
    });
  });
});
