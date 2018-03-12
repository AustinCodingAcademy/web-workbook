'use strict';

$(document).ready(function() {
  'use strict';

$(document).ready(function() {
  let gamePiece = 'X';
  $('div[data-cell]').click(function() {
    $(this).text(`${gamePiece}`);
    if (gamePiece === 'O') {
      gamePiece = 'X';
    } else {
      gamePiece = 'O';
    };
    checkForX();
  });

// Winning positions //
var horizontalTop = "0,1,2";
var horizontalMid = "3,4,5";
var horizontalBottom = "6,7,8";
var diagonalTopLeft = "0,4,8";
var diagonalTopRight = "2,4,6";
var verticalLeft = "0,3,6";
var verticalMid = "1,4,7";
var verticalRight = "2,5,8";

function checkForX () {
  var allElements = document.querySelectorAll("div[data-cell]");
  var xElementsArray = [];
  var workingArray = [];
  for (var i = 0; i < allElements.length; i++) {
    if (allElements[i].textContent == 'X') {
      xElementsArray.push(allElements[i].dataset.cell);
    }
  }
  console.log(xElementsArray);
  // if (xElementsString.includes("0","1","2") == true) {
  //   // document.querySelector('#clear').insertAdjacentHTML('afterend','<h5 class="red-text">X wins!</h5>');
  //   console.log('X wins');
  for (var i = 0; i < xElementsArray.length; i++) {
    if (horizontalTop.indexOf(xElementsArray[i]) !== -1) {
      workingArray.push(xElementsArray[i]);
    }
    console.log("this" + workingArray);
  }
};



});


//
// function verticalWin() {
// if ($('[data-cell="2"]').text() === 'X' && $('[data-cell="5"]').text() === 'X' && $('[data-cell="8"]').text() === 'X'){
//  console.log('X wins!');
// } else if ($('[data-cell="1"]').text() === 'X' && $('[data-cell="4"]').text() === 'X' && $('[data-cell="7"]').text() === 'X'){
//  console.log('X wins!');
// } else if
});
