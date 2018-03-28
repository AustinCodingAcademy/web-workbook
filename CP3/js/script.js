// When I click the bee image, the counter displays a count of each click.
// when i get to 10 clicks, I can buy a worker bee. The current total is reduced by 10 and the worker bee adds a click automatically every 10 seconds.
// when i reach 100 clicks, then I buy a queen bee and the current total is reduced by 100. the queen bee automatically clicks and adds 10 clicks per 10 seconds.
// when i reach 1000 clicks, then I buy a bee hive and the current total is reduced by 1000. the hive automatically clicks and adds 100 clicks per 10 seconds.



'use strict';

let counter = 0

$(document).ready(function() {
  // Display total
  function updateReport() {
    $("#currentTotal").text(counter);
  }
  // When button is clicked

  $("#add").click(function() {
    //Add 1 to counter
    counter = counter + 1;
    // Display total
    $("#currentTotal").text(counter);
    updateReport();
  });

  // //Subtract
  $("#worker").click(function() {
    if (counter >= 10) {
      counter = counter - 10;
      $("#currentTotal").text(counter);
      updateReport();
    }
  });
  $("#queen").click(function() {
    if (counter >= 100) {
      counter = counter - 100;
      $("#currentTotal").text(counter);
      updateReport();
    }
  });
  $("#hive").click(function() {
    if (counter >= 1000) {
      counter = counter - 1000;
      $("#currentTotal").text(counter);
      updateReport();
    }
  });


});



//

// var add = (function () {
//     var counter = 0;
//     return function () {return counter += 1;}
// })();

// function myFunction(){
//     document.getElementById("currentTotal").innerHTML = add();
// }



// $(".worker").click(function(){
//   counter = counter - 10;
//   $("#currentTotal").text(counter);
// });

// // var subtract1 = (function () {
// //     var counter = counter - 10;
// //     return function () {return counter}
// // })();

// // function myFunction1(){
// //     document.getElementById("currentTotal").innerHTML = subtract1();
// // }


// // for (let i=1; i <= 40; i++) {
// //     if (i % 15 == 0) {
// //     console.log("FizzBuzz");

// var subtract2 = (function () {
//     var counter = 100;
//     return function () {return counter - 100;}
// })();

// function myFunction2(){
//     document.getElementById("currentTotal").innerHTML = subtract2();
// }

// var subtract3 = (function () {
//     var counter = 1000;
//     return function () {return counter - 1000;}
// })();

// function myFunction3(){
//     document.getElementById("currentTotal").innerHTML = subtract3();
// }