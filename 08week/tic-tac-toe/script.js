'use strict';

$(document).ready(function() {

  var player = 1;

  $("[data-cell]").on('click', function(event) {

    var squareSelected = $(this);

    if(squareSelected.hasClass('ex') || squareSelected.hasClass('oh')) {
      alert('Already Chosen!! Try Again!');
    } else{
      if(player === 1 ) {
        $(this).text('X');
        squareSelected.addClass('ex');
        if (checkIfPlayerWon('ex')) {
          setTimeout(function(){alert('you win' + player);},1000);
        } else {
          player = 2;
        }

      } else {
        if(player === 2) {
          $(this).text('O');
          squareSelected.addClass('oh');
          if (checkIfPlayerWon('oh')) {
            setTimeout(function(){alert('you win' + player);},1000);
          } else {
            player = 1;
          }

        }
      }

    }

  });


  function checkIfPlayerWon(symbol) {
    if($('.0').hasClass(symbol) && $('.1').hasClass(symbol) && $('.2').hasClass(symbol)) {
      return true;
    } else if($('.3').hasClass(symbol) && $('.4').hasClass(symbol) && $('.5').hasClass(symbol)) {
      return true;
    } else if($('.6').hasClass(symbol) && $('.7').hasClass(symbol) && $('.8').hasClass(symbol)) {
      return true;
    } else if($('.0').hasClass(symbol) && $('.3').hasClass(symbol) && $('.6').hasClass(symbol)) {
      return true;
    } else if($('.1').hasClass(symbol) && $('.4').hasClass(symbol) && $('.7').hasClass(symbol)) {
      return true;
    } else if($('.2').hasClass(symbol) && $('.5').hasClass(symbol) && $('.8').hasClass(symbol)) {
      return true;
    } else if($('.0').hasClass(symbol) && $('.4').hasClass(symbol) && $('.8').hasClass(symbol)) {
      return true;
    } else if($('.2').hasClass(symbol) && $('.4').hasClass(symbol) && $('.6').hasClass(symbol)) {
      return true;
    } else if($('.0').hasClass(symbol) && $('.2').hasClass(symbol) && $('.3').hasClass(symbol) && $('.5').hasClass(symbol) && $('.7').hasClass(symbol)) {
      alert('TIE GAME BITCHES!!');
    } else if($('.1').hasClass(symbol) && $('.3').hasClass(symbol) && $('.5').hasClass(symbol) && $('.6').hasClass(symbol) && $('.8').hasClass(symbol)) {
      alert('TIE GAME BITCHES!!');
    } else if($('.0').hasClass(symbol) && $('.1').hasClass(symbol) && $('.5').hasClass(symbol) && $('.6').hasClass(symbol) && $('.7').hasClass(symbol)) {
      alert('TIE GAME BITCHES!!');
    } else if($('.1').hasClass(symbol) && $('.2').hasClass(symbol) && $('.3').hasClass(symbol) && $('.7').hasClass(symbol) && $('.8').hasClass(symbol)) {
      alert('TIE GAME BITCHES!!');
    } else if($('.0').hasClass(symbol) && $('.2').hasClass(symbol) && $('.3').hasClass(symbol) && $('.7').hasClass(symbol) && $('.8').hasClass(symbol)) {
      alert('TIE GAME BITCHES!!');
    } else if($('.1').hasClass(symbol) && $('.2').hasClass(symbol) && $('.3').hasClass(symbol) && $('.6').hasClass(symbol) && $('.8').hasClass(symbol)) {
      alert('TIE GAME BITCHES!!');
    } else if($('.0').hasClass(symbol) && $('.1').hasClass(symbol) && $('.5').hasClass(symbol) && $('.6').hasClass(symbol) && $('.8').hasClass(symbol)) {
      alert('TIE GAME BITCHES!!');
    } else if($('.0').hasClass(symbol) && $('.2').hasClass(symbol) && $('.5').hasClass(symbol) && $('.6').hasClass(symbol) && $('.7').hasClass(symbol)) {
      alert('TIE GAME BITCHES!!');
    } else {
      return false;
    }

  }

  $("button").click(function(){
        $('.row > div').empty();
        $('.row > div').removeClass();
      });
// setTimeout(checkIfPlayerWon(symbol){ alert}, 3500);

});
