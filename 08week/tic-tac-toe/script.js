'use strict';

var player = 1;
var playerWon = false;
var PLAYER_X = 'player-x';
var PLAYER_O = 'player-o';
var ROWS = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];

function getPlayerClass() {
  if (player === 1) {
    return PLAYER_X;
  }
  if (player === 2) {
    return PLAYER_O;
  }
}

function nextPlayer() {
  if (player === 1) {
    player = 2;
  } else if (player === 2) {
    player = 1;
  }
}

function hasWonRow(row) {
  for (var i=0; i < row.length; i++) {
    if (!$("div[data-cell='" + row[i] + "']").hasClass(getPlayerClass())) {
      return false;
    }
  }
  return true;
}

function checkIfWon() {
  for (var i=0; i < ROWS.length; i++) {
    if (hasWonRow(ROWS[i])) {
      return true;
    }
  }
  return false;
}

function doClick($el) {
  if (playerWon) {
    return;
  }

  // Determine if box already clicked
  if ($el.hasClass(PLAYER_X) || $el.hasClass(PLAYER_O)) {
    // Abort click
    return;
  }
  // Assign X or O
  $el.addClass(getPlayerClass());

  // Click if won
  if (checkIfWon()) {
    $('#announce-winner').text('Player ' + player + ' has won!');
    playerWon = true;
    return;
  }

  // Change player
  nextPlayer();
}

function getDataCells() {
    return $('body').find('div[data-cell]');
}

$(document).ready(function() {
  var clickAction = function() {
    var $el = $(this);

    $el.click(function() {
      doClick($el);
    });
  };

  var clickClear = function() {
    getDataCells().each(function() {
      var $el = $(this);
      $el.removeClass(PLAYER_O + ' ' + PLAYER_X);
    });
    $('#announce-winner').text('');
    playerWon = false;
  };

  getDataCells().each(clickAction);
  $('#clear').click(clickClear);
});
