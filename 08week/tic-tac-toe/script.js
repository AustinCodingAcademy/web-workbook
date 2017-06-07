'use strict';

$(document).ready(function() {
  var turn = true;



  $('body').on('click', function(e) {
    var play = '0';
    var $0mark = ($('#0').text());
    var $1mark = ($('#1').text());
    var $2mark = ($('#2').text());
    var $3mark = ($('#3').text());
    var $4mark = ($('#4').text());
    var $5mark = ($('#5').text());
    var $6mark = ($('#6').text());
    var $7mark = ($('#7').text());
    var $8mark = ($('#0').text());

    if (turn) {
      play = 'O';
    } else {
      play = "X";
    }


    switch (e.target.id) {
      case '0': $('#0').text(play);
        break;
      case '1': $('#1').text(play);
        break;
      case '2': $('#2').text(play);
        break;
      case '2': $('#2').text(play);
        break;
      case '3': $('#3').text(play);
        break;
      case '4': $('#4').text(play);
        break;
      case '5': $('#5').text(play);
        break;
      case '6': $('#6').text(play);
        break;
      case '7': $('#7').text(play);
        break;
      case '8': $('#8').text(play);
        break;
    }
    turn = (!turn);
    /* horizontal win */
  if (($0mark + $1mark + $2mark === 'XXX') || ($0mark + $1mark + $2mark === 'OOO')) {
    alert($0mark + "'s win!'");
  } else if (($3mark + $4mark + $5mark === 'XXX') || ($3mark + $4mark + $5mark === 'OOO')) {
    alert($3mark + "'s win!'");
  } else if (($6mark + $7mark + $8mark === 'XXX') || ($6mark + $7mark + $8mark === 'OOO')) {
    alert($6mark + "'s win!'");
  };

  /*vertical win */

  if (($0mark + $3mark + $6mark === 'XXX') || ($0mark + $3mark + $6mark === 'OOO')) {
    alert($0mark + "'s win!'");
  } else if (($1mark + $4mark + $7mark === 'XXX') || ($1mark + $4mark + $7mark === 'OOO')) {
    alert($1mark + "'s win!'");
  } else if (($2mark + $5mark + $8mark === 'XXX') || ($2mark + $5mark + $8mark === 'OOO')) {
    alert($2mark + "'s win!'");
  };

  /*diagonal win */

  if (($0mark + $4mark + $8mark === 'XXX') || ($0mark + $4mark + $8mark === 'OOO')) {
    alert($0mark + "'s win!'");
  } else if (($2mark + $4mark + $6mark === 'XXX') || ($2mark + $4mark + $6mark === 'OOO')) {
    alert($2mark + "'s win!'");
  };

  });








  $('button').on('click', function(){
    $('.row > div').empty();
  });





});
