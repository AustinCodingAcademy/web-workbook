'use strict';

$(document).ready(() => {
  //var arrX = [];
  //  var arrO = [];
  //var winArr = [];
  //var win0 = ['0','3','6'];
  //var win1 = ['1','4','7'];
  //var win2 = ['2','5','8'];
  //var win3 = ['0','1','2'];
  //var win4 = ['3','4','5'];
  //var win5 = ['6','7','8'];
  //var win6 = ['0','4','8'];
  //var win7 = ['2','4','6'];

  //var thisData = '';
  //var thatData = '';
  //var disable = '';
  //var k = '';
  var count = 0;
  var value = '';
  var gameover = false;
  var player = 'X';

  $('div[data-cell]').on('click', function() {

    /*Checks for an invalid Move and alerts user*/
    if ($(this).text().length > 0) {
      $(this).on('click', alert('Invalid Move, Please Try Again'));
      return;
    }
    $(this).append(player);

    //DEBUG CODE
    //thatData = thisData;
    //$(this).unbind('click');
    //var thisData = $(this).attr('data-cell');
    //console.log("Player "+ player + " location is " + thisData);


    /*Switches the player after each click event*/
    if (player === 'O') {
      winner();
      player = 'X';
    } else {
      winner();
      player = 'O';
    }

    /*DEBUG CODE*/
    /*function playerOarray() {
      arrO.push(thisData);
      console.log(arrO);
      check4win(arrO, win0);
      check4win(arrO, win1);
      check4win(arrO, win2);
      check4win(arrO, win3);
      check4win(arrO, win4);
      check4win(arrO, win5);
      check4win(arrO, win6);
      check4win(arrO, win7);
    }*/

    /*function playerXarray() {
      arrX.push(thisData);
      console.log(arrX);
      check4win(arrX, win0);
      check4win(arrX, win1);
      check4win(arrX, win2);
      check4win(arrX, win3);
      check4win(arrX, win4);
      check4win(arrX, win5);
      check4win(arrX, win6);
      check4win(arrX, win7);
    }*/


    /*function check4win(playerChoice, combo) {
      $(combo).each(function(i){
        for (var i = 0; i < combo.length; i++){
          if($.inArray(this, playerChoice) == -1){
            return true;  //must be return true to correctly match combos without respect to order of array items
          }
          console.log('VALID Combo ' + combo);
          //console.log(count);
        }
      });
    }*/


    /*Check for player in valid win combos*/
    function winner() {
      count = 0;
      var check = $('#zero, #three, #six');
      $(check).each(function() {
        value = $(this).text();
        winnerCheck();
      });
      count = 0;
      var check = $('#one, #four, #seven');
      $(check).each(function() {
      value = $(this).text();
      winnerCheck();
      });
      count = 0;
      var check = $('#two, #five, #eight');
      $(check).each(function() {
      value = $(this).text();
      winnerCheck();
      });
      count = 0;
      var check = $('#zero, #one, #two');
      $(check).each(function() {
      value = $(this).text();
      winnerCheck();
      });
      count = 0;
      var check = $('#three, #four, #five');
      $(check).each(function() {
      value = $(this).text();
      winnerCheck();
      });
      count = 0;
      var check = $('#six, #seven, #eight');
      $(check).each(function() {
      value = $(this).text();
      winnerCheck();
      });
      count = 0;
      var check = $('#zero, #four, #eight');
      $(check).each(function() {
      value = $(this).text();
      winnerCheck();
      });
      count = 0;
      var check = $('#two, #four, #six');
      $(check).each(function() {
      value = $(this).text();
      winnerCheck();
      });
    }

    /*If var count == 3 then a win condition is met and alerts the user*/
    function winnerCheck() {
      console.log(value);
      if (value == player) {
        count = count + 1;
        console.log('COUNT is ' + count);
        if (count == 3) {
          alert(player + " WINS!!!!");
          gameOver();
        }
      }
    }

    /*Alert user game is over*/
    function gameOver(){
      alert('GAMEOVER');
      $(this).off('click', alert('Please Clear the Board'));
      return;
    }

    /*Clear the Board and turn off click*/
    $('button').click(function(){
      $('div[data-cell]').empty();
      $('div[data-cell]').off('click');
    });

  });

});
