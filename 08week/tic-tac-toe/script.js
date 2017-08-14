'use strict';

var token = 'X';
window.onload = function () {
  $("#clear").hide();
  }

$(document).on('ready', function() {

});

$("[data-cell]").click(function() {
    var cell = $(this);
  if (cell.text() === "") {
    cell.text(token);
      isTheGameOver();
      token = token === "X" ? "O" : 'X';
  }
  // if(token==='X')
  //   token = 'O';
  //   else token = 'X';
});

function isTheGameOver() {
  //diagonal winner
  var cell0 = $("[data-cell=0]").text();
  var cell4 = $("[data-cell=4]").text();
  var cell8 = $("[data-cell=8]").text();

  if (cell0 === cell4 && cell4 === cell8 && cell0 !== "" && cell4 !== "" && cell8 !== "") {
    // alert("GAME OVER");
    $("#announce-winner").text("Winner: " + token);
    $("#clear").show();
  }

  var cell2 = $("[data-cell=2]").text();
  var cell4 = $("[data-cell=4]").text();
  var cell6 = $("[data-cell=6]").text();

  if (cell2 === cell4 && cell4 === cell6 && cell2 !== "" && cell4 !== "" && cell6 !== "") {
    // alert("GAME OVER");
    $("#announce-winner").text("Winner: " + token);
    $("#clear").show();
  }
  //rows across winner
  var cell0 = $("[data-cell=0]").text();
  var cell1 = $("[data-cell=1]").text();
  var cell2 = $("[data-cell=2]").text();

  if (cell0 === cell1 && cell1 === cell2 && cell0 !== "" && cell1 !== "" && cell2 !== "") {
    // alert("GAME OVER");
    $("#announce-winner").text("Winner: " + token);
    $("#clear").show();
  }

  var cell3 = $("[data-cell=3]").text();
  var cell4 = $("[data-cell=4]").text();
  var cell5 = $("[data-cell=5]").text();

  if (cell3 === cell4 && cell4 === cell5 && cell3 !== "" && cell4 !== "" && cell5 !== "") {
    // alert("GAME OVER");
    $("#announce-winner").text("Winner: " + token);
    $("#clear").show();
  }

  var cell6 = $("[data-cell=6]").text();
  var cell7 = $("[data-cell=7]").text();
  var cell8 = $("[data-cell=8]").text();

  if (cell6 === cell7 && cell7 === cell8 && cell6 !== "" && cell7 !== "" && cell8 !== "") {
    // alert("GAME OVER");
    $("#announce-winner").text("Winner: " + token);
    $("#clear").show();
  }

  //column winner
  var cell0 = $("[data-cell=0]").text();
  var cell3 = $("[data-cell=3]").text();
  var cell6 = $("[data-cell=6]").text();

  if (cell0 === cell3 && cell3 === cell6 && cell0 !== "" && cell3 !== "" && cell6 !== "") {
    // alert("GAME OVER");
    $("#announce-winner").text("Winner: " + token);
    $("#clear").show();
  }

  var cell1 = $("[data-cell=1]").text();
  var cell4 = $("[data-cell=4]").text();
  var cell7 = $("[data-cell=7]").text();

  if (cell1 === cell4 && cell4 === cell7 && cell1 !== "" && cell4 !== "" && cell7 !== "") {
    // alert("GAME OVER");
    $("#announce-winner").text("Winner: " + token);
    $("#clear").show();
  }

  var cell2 = $("[data-cell=2]").text();
  var cell5 = $("[data-cell=5]").text();
  var cell8 = $("[data-cell=8]").text();

  if (cell2 === cell5 && cell5 === cell8 && cell2 !== "" && cell5 !== "" && cell8 !== "") {
    // alert("GAME OVER");
    $("#announce-winner").text("Winner: " + token);
    $("#clear").show();

}

};

$("#clear").click(function() {
  $("[data-cell]").text("");
  $("#announce-winner").text("");
  $("#clear").hide();
});
