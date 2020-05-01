'use strict';

$(document).ready(function() {

  let character = "X";
  //This creates a variable named character with a value of X.



  $('[data-cell]').click(function() {//When clicking on any data-cell then call this function.
      let currentText = $(this).text()
      //Create a variable called currentText that will ask for what text there is on the data cell's div that was clicked.
      //Each click will change the value of the character inside this function because it is calling to this.
      //When the last character in the character variable is an X, then it will draw a O. 
      //If the last character is not a O, then it will draw an X.

      if (!currentText) { //If there is no currentText then draw the character that  on the data-cell's div.
        $(this).prepend(`${character}`);
        if (character === 'O') {
          character = 'X';
        } else {
          character = 'O';
        }
      }


      let rows = document.querySelectorAll('.row'); //Create a variable 
      // console.log(rows);
      var rowsy = document.getElementById("rows").innerText;
      console.log(rowsy);
      // function displayWinner {

      // }


  

      });








});
