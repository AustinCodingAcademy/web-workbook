'use strict';

$(document).ready(function() {
    var player = 1;
    $('.square').on('click', function(event) {
        var squareSelected = $(this);
        if(squareSelected.hasClass('fa fa-times') || squareSelected.hasClass('fa fa-circle-o')) {
          alert('Oops! Select a blank square.');
        } else {
          if(player === 1) {
            squareSelected.addClass('fa fa-times');
            if(announceWinner('fa fa-times')) {
              alert('Congrats! Player ' + player + ' has won!');
            } else {
            player = 2;
          }
        } else {
          squareSelected.addClass('fa fa-circle-o');
          if(announceWinner('fa fa-circle-o')) {
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

$(document).on('click', '#clear', function(){
  location.reload(true);
})
