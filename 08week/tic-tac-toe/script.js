'use strict';

$(document).ready(function() {
  let color = "X";
  var last = "O";
  $('.row div').click(function() {
    var theXO = $(this).attr('data-cell');
    var hasX = $(this).text();
    if (last == "O") {
      var x = add();
      this.appendChild(x);
      last = "X";
      console.log("last move...", last);
    } else {
      var x = add();
      this.appendChild(x);
      last = "O";
      console.log("last move...", last);
    }
    //**console.log("I am checked", theXO);
  });

  function add() {
    let div = document.createElement("div");
    let text = last;
    console.log("Hi");
    let textNode = document.createTextNode(text);
    div.appendChild(textNode);
    return div;
  }
});
