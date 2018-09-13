'use strict';

$(document).ready(function() {
    let $block = null; //defines what is currently grabbed by click
  
    $('[data-row]').click(function() { //dictates what happens when a div is clicked on
      let $blockValue= $(this).children().first().attr('data-size'); //creates a variable for the data-size value of the div
      if ($block === null) { //if your click is empty, grab the first child in the div and detach from current position
        $block = $(this).children().first().detach();
      } else if ($blockValue < $block.attr('data-size')) {//if the data attribute of the div currently contained in click is larger than the value of the div already in that column, alert shows
        alert("No can do baby girl.");
      } else {  
        $(this).prepend($block); //if the data attribute of the div currently contained in click is not larger than the value of the div already in column/there isn't one currently there, it prepends
        $block = null;  //returns click to empty
      };
       endGame(); //runs end game function
    });
    function endGame(){
      if ($('.green').children().length >= 4){ //if there are more than or equal to 4 divs in the green column the alert shows
      alert('Yassssss queen!');
      }
    };
  });
  function reset(){ //this resets the game
    location.reload();
  };
