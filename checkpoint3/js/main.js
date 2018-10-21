"use strict";
$(document).ready(function() {
  const main = $("main");
  const hammer = $("#hammer");
  const anvil = $("#anvil");
  const sparks = $(".spark");
  const counter = $("#counter");
  var count = 0;

  anvil.mousedown(function() {
    sparks.toggleClass("animate");
    hammer.toggleClass("down");
    anvil.toggleClass("shake");

    count++;
    counter.text(count);
  });

  anvil.mouseup(function() {
    sparks.removeClass("animate");
    hammer.toggleClass("down");
    anvil.toggleClass("shake");
  });

  main.mouseup(function() {
    hammer.removeClass("down");
  });
});
