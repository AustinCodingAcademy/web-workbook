'use strict'

console.log("javascript is linked");

$('div').click(function(){
  console.log("a div clicked");
})

//attempt pre-class, doesn't utilize a counter
// $(document).ready(function() {
//   alert("Are you ready to count by ones, tens, and hundred?");
//
//   var one = 1;
//   var ten = 10;
//   var hundred = 100;
//
//   $('#counter-1').click(function() {
//     one++;
//     $(this).text(one);
//   })
//
//   $('#counter-10').click(function() {
//     ten = ten + 10;
//     $(this).text(ten);
//   })
//
//   $('#counter-100').click(function() {
//     console.log("in100sfunction");
//     hundred = hundred + 100;
//     $(this).text(hundred);
//   })
//   $('#click-all').click(function() {
//     console.log("inclickallfunction");
//     one++;
//     $('#counter-1').text(one);
//     ten = ten + 10;
//     $('#counter-10').text(ten);
//     hundred = hundred + 100;
//     $('#counter-100').text(hundred);
//   })
// });


$(document).ready(function() {
  alert("Are you ready to count by ones, tens, and hundred?");

  // var countByOne = function() {
  //   console.log("im in the countbyone function and the counter is currently " + current);
  //   var current = $('#counter').text();
  //   var currentAsNumber = parseInt(current);
  //   var onesCounter = currentAsNumber + 1;
  //   $('#counter').text(onesCounter);
  //   // one++;
  // }
  //
  // var countByTen = function() {
  //   console.log("im in the countbyten function and the counter is currently " + current);
  //   var current = $('#counter').text();
  //   var currentAsNumber = parseInt(current);
  //   var tensCounter = currentAsNumber + 10;
  //   $('#counter').text(tensCounter);
  // }
  //
  // var countByHundred = function() {
  //   console.log("im in the countbyhundred function and the counter is currently " + current);
  //   var current = $('#counter').text();
  //   var currentAsNumber = parseInt(current);
  //   var hundredsCounter = currentAsNumber + 100;
  //   $('#counter').text(hundredsCounter);
  // }
  //
  // $('#counter-1').click(countByOne);
  // $('#counter-10').click(countByTen);
  // $('#counter-100').click(countByHundred);
  // $('#click-all').click(function(){
  //     countByOne();
  //     countByTen();
  //     countByHundred();
  // });


  //end first attemtp, where there is a bit of repetition between funcitons
  // begin 2nd way, an attempt to streamline the count functions

  var count = function(x){
    console.log("Im in the count function");
    var counter = $("#counter").text();
    var counterAsNumber = parseInt(counter);

      var onesCounter = counterAsNumber + x;
      $('#counter').text(onesCounter);

  }
  $('#counter-1').click(function(){count(1)});
  $('#counter-10').click(function(){count(10)});
  $('#counter-100').click(function(){count(100)});
  $('#click-all').click(function(){count(111)});

  $('#reset').click(function(){
    console.log("in reset function")
    var resetCounter = 0;
    $('#counter').text(resetCounter);
  });

  //begin 3rd way yousif's example
//   $('.clickable').click(function() {
//     var clickedId = this.id;
//     console.log("the id that was clicked is " + clickedId)
//     var current = $('#counter').text();
//     var currentAsNumber = parseInt(current);
//     var newCounter;
//     if (clickedId === "counter-1"){
//       newCounter = currentAsNumber + 1 ;
//     } else if (clickedId === "counter-10"){
//       newCounter = currentAsNumber + 10;
//     } else if (clickedId === "counter-100") {
//       newCounter = currentAsNumber + 100;
//     } else if (clickedId === "click-all") {
//       newCounter = currentAsNumber + 111;
//     } else if (clickedId === "reset") {
//       newCounter = 0;
//     }
//
//     $('#counter').text(newCounter);
//   })
});
