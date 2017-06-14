'use strict';

$(document).ready(function() {

  var start = true;


  var toggle = function(){
      if (!this.innerHTML) {
        if(start){
          $(this).text('x');
        } else{
          $(this).text('o');
        }
        start = !start;
      } else{
        alert('You already checked this box, choose another!!!')
      }
  }
  $('.square').click(function(event){
    var squareSelected = $(this);
    //Adding a class to $this each time user clicks
    //used to check for winner
    if(start){
      squareSelected.addClass('x');
      if(checkIfPlayerWon('x')){
        alert('Player One has won the game!');
      }

    } else{
      squareSelected.addClass('o');
      if(checkIfPlayerWon('o')){
        alert('Player Two has won the game!');


      }
    }


  });

  $('.square').click(toggle);

  $('#clear').click(function(){
    //Remove Classes to start game over on click!
    $('.square').empty().removeClass('o');
    $('.square').empty().removeClass('x');

    if(!start){
      return start;
    }


  //What is the difference between clear(), remove() and empty(). Found it in next weeks prep

});

  //Check for Winner
  function checkIfPlayerWon(symbol) {
    if($('.sq0').hasClass(symbol) && $('.sq1').hasClass(symbol) && $('.sq2').hasClass(symbol)) {
      return true;
    } else if ($('.sq3').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq5').hasClass(symbol)){
      return true;
    } else if ($('.sq6').hasClass(symbol) && $('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol)){
      return true;
    } else if($('.sq0').hasClass(symbol) && $('.sq3').hasClass(symbol) && $('.sq6').hasClass(symbol)){
      return true;
    } else if ($('.sq1').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq7').hasClass(symbol)){
      return true;
    } else if ($('.sq2').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq8').hasClass(symbol)){
      return true;
    } else if ($('.sq0').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq8').hasClass(symbol)){
      return true;
    } else if ($('.sq2').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq6').hasClass(symbol)){
      return true;
    } else {
      return false;
    }
  }
  });
