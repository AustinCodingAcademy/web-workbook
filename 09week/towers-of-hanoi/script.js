'use strict';

$(document).ready(function() {

// ====================================
//    Variables
// ====================================
  let $block = null,
      $gameBoard = ("#gameBoard"),
      $b100 = ('[data-block="100"]'),
      $b75 = ('[data-block="75"]'),
      $b50 = ('[data-block="50"]'),
      $b25 = ('[data-block="25"]'),
      $tower1 = ('[data-stack="1"]'),
      $tower2 = ('[data-stack="2"]'),
      $tower3 = ('[data-stack="3"]');
  // alert('Welcome to Towers of Hanoi\nCan you form the tower on top in the same manner on the bottom?')
// ====================================
//    Block Movement
// ====================================
  $('[data-stack]').click(function() {

    win();

    if (!$block) {
      $block = $(this).children().last().detach();
    } else {
      $(this).append($block);
      $block = null;
    }
  });
// ====================================
//    Game Logic
// ====================================
  function blockWeight(){

  }
// ====================================
//    Win Condition
// ====================================
  function win(){
    if ($(tower2).children().length === 4){
      $("#announce-game-won").html('You Win')
      console.log('Winner');
    } else if ($(tower3).children().length === 4){
      $("#announce-game-won").html('You Win')
      console.log('Winner');
    }
  }


});

// Board*
// Rings*
// Ring movement*
// Cant place big rings on small
// Win condition, if length = 4*
// Reset game
