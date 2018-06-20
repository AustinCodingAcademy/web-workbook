'use strict';

$(document).ready(function() {
  var color = "X";
  var last = "O";
  $('.row div').click(function() {
    var currentValue = $(this).text();
    console.log("currentValue is equal to " + currentValue)
    console.log("currentValue length is " + currentValue.length)
    if (currentValue.length == 0) {
      if (last == "O") {
        $(this).text("X");
        last = "X";
        console.log("last move...", last);
      } else {
        $(this).text("O");
        last = "O";
        console.log("last move...", last);
      }
      //**check after every move**//
      var Box0 = "X";
      var Box1 = "X";
      var Box2 = "X";
      var Box3 = "X";
      var Box4 = "X";
      var Box5 = "X";
      var Box6 = "X";
      var Box7 = "X";
      var Box8 = "X";
      console.log("Hello", last);

      if ((Box0 == Box1 && Box1 == Box2));
      (Box3 == Box4 && Box4 == Box5);
      (Box6 == Box7 && Box7 == Box8);
      (Box0 == Box3 && Box3 == Box6);
      (Box1 == Box4 && Box4 == Box7);
      (Box2 == Box5 && Box5 == Box8);
      (Box0 == Box4 && Box4 == Box8);
      (Box2 == Box4 && Box4 == Box6);
      console.log("win", last);
      //**variables and check values**//
    }
  });
  //function resetButton() {

          //  var button = document.createElement("button");
            //button.innerHTML = "Clear";



          //  button.addEventListener("click", function () {
              //  console.log("Board Reset");
          //  });
  //**clear board**//


});
