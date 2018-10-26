"use strict";
$(document).ready(function(){
  var move = 1;

  $("[data-cell]").click(function() {
    if ($(this).text()==="") {
      if ((move%2)===1) { $(this).append("X"); } 
      else { $(this).append("O"); }
      move++;
    }
  });
  $("#clear").click(function() {
    var boxes = $("[data-cell]");
    for (var i = 0; i < boxes.length; i++) {
      $(boxes[i]).text("");
  }
  move = 1;
  });

});