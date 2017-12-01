'use strict';

$(document).ready(function() {
    var player = 1;
    $('.square').on('click', function(event) {
        var squareSelected = $(this);
        if(squareSelected.hasClass('ex') || squareSelected.hasClass('oh')) {
          alert('Oops! Select a blank square.');
        } else {
          if(player === 1) {
            squareSelected.addClass('ex');
            if(announceWinner('ex')) {
              alert('Congrats! Player ' + player + ' has won!');
            } else {
            player = 2;
          }
        } else {
          squareSelected.addClass('oh');
          if(announceWinner('oh')) {
              alert('Congrats! Player ' + player + ' has won!');
            } else {
          player = 1;
        }
      }
    }
  });



function announceWinner(symbol) {
      if($('.zero').hasClass(symbol) && $('.one').hasClass(symbol) && $('.two').hasClass(symbol)) {
        return true;
    } else if($('.three').hasClass(symbol) && $('.four').hasClass(symbol) && $('.five').hasClass(symbol)) {
      return true;
    }else if($('.six').hasClass(symbol) && $('.seven').hasClass(symbol) && $('.eight').hasClass(symbol)) {
      return true;
    }else if($('.zero').hasClass(symbol) && $('.four').hasClass(symbol) && $('.six').hasClass(symbol)) {
      return true;
    }else if($('.one').hasClass(symbol) && $('.four').hasClass(symbol) && $('.seven').hasClass(symbol)) {
      return true;
    }else if($('.three').hasClass(symbol) && $('.five').hasClass(symbol) && $('.eight').hasClass(symbol)) {
      return true;
    }else if($('.zero').hasClass(symbol) && $('.four').hasClass(symbol) && $('.eight').hasClass(symbol)) {
      return true;
    }else if($('.two').hasClass(symbol) && $('.four').hasClass(symbol) && $('.six').hasClass(symbol)) {
      return true;
    } else {
      return false;
    }
  }
})
