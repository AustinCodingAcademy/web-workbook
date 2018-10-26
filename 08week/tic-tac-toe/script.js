"use strict";
$(document).ready(function() {
  // Put app logic in here

//when user clicks square add X
// how to keep score
// how to know when a user wins


var previousClick = null
var playerOne = "x"
var playerTwo = "o"


  $("div[data-cell]").one( "click", function(){
    // console.log("User clicks", previousClick)

    //determine the value of what's in the data cell

    // var cellNumber=$(this).attr('data-cell')
    // console.log("cellNumber", cellNumber)

    if (previousClick === "x") {
      $(this).text("o");
      previousClick = "o"
      checkIfPlayerWon(this)

    } else if (previousClick === "o") {
      $(this).text("x");
      previousClick = "x" 
      checkIfPlayerWon(this)

    } else {
      $(this).text("x");
      previousClick = "x"
      checkIfPlayerWon(this)
     
    }
  });
  var cellArray = [ 'o','x','o', 'x', 'x', 'x', 'o', 'x', 'x']
      
  function checkIfPlayerWon(cell) {
    var dataCellValue = $(cell).text()
    var cellNumber=$(cell).attr('data-cell')
    if (cellNumber === 1 && cell)
    console.log("cellNumber", cellNumber)
    console.log("dataCellValue", dataCellValue)

  }

//     function checkIfPlayerWon(symbol) {
//       if($('data-cell 1' ).hasClass(symbol) && $('data-cell 2').hasClass(symbol) && $('data-cell3').hasClass(symboll)) {
//         return true;
//     } else if ($('data-cell 4' ).has(symbol) && $('data-cell 5').hasClass(symbol) && $('data-cell6').hasClass(symboll)) {
//         return true;
//     } else if ($('data-cell 7' ).hasClass(symbol) && $('data-cell 8').hasClass(symbol) && $('data-cell 9').hasClass(symboll)) {
//         return true;
//     } else if ($('data-cell 1' ).hasClass(symbol) && $('data-cell 5').hasClass(symbol) && $('data-cell 7').hasClass(symboll)) {
//         return true;
//     } else if ($('data-cell 3' ).hasClass(symbol) && $('data-cell 5').hasClass(symbol) && $('data-cell 8').hasClass(symboll)) {
//         return true;
//     } else if ($('data-cell 2' ).hasClass(symbol) && $('data-cell 5').hasClass(symbol) && $('data-cell 8').hasClass(symboll)) {
//         return true;
//     } else if ($('data-cell 0' ).hasClass(symbol) && $('data-cell 4').hasClass(symbol) && $('data-cell 7').hasClass(symboll)) {
//         return true;
//     }
//     } else
        
        
      

});
