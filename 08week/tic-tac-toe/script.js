'use strict';
$(document).ready(function() {
  // alert('Let\'s Play Tic-Tac-Toe!')
var playerTurn = 0;
var xWin = 'Player One Wins!';
var yWin = 'Player Two Wins!';

var winCondition = function(player) {
  console.log(player);
  if ($('#0').text() === player) {
    if ($('#1').text() === player) {
      if ($('#2').text() === player) {
        alert('win');
      }
    }
  }
};

var winCondition = function(player) {
  console.log(player);
  if ($('#3').text() === player) {
    if ($('#4').text() === player) {
      if ($('#5').text() === player) {
        alert('win');
      }
    }
  }
};

var winCondition = function(player) {
  console.log(player);
  if ($('#6').text() === player) {
    if ($('#7').text() === player) {
      if ($('#8').text() === player) {
        alert('win');
      }
    }
  }
};

var winCondition = function(player) {
  console.log(player);
  if ($('#0').text() === player) {
    if ($('#3').text() === player) {
      if ($('#6').text() === player) {
        alert('win');
      }
    }
  }
};

var winCondition = function(player) {
  console.log(player);
  if ($('#1').text() === player) {
    if ($('#4').text() === player) {
      if ($('#7').text() === player) {
        alert('win');
      }
    }
  }
};

var winCondition = function(player) {
  console.log(player);
  if ($('#0').text() === player) {
    if ($('#1').text() === player) {
      if ($('#2').text() === player) {
        alert('win');
      }
    }
  }
};

var winCondition = function(player) {
  console.log(player);
  if ($('#0').text() === player) {
    if ($('#1').text() === player) {
      if ($('#2').text() === player) {
        alert('win');
      }
    }
  }
};

var winCondition = function(player) {
  console.log(player);
  if ($('#0').text() === player) {
    if ($('#1').text() === player) {
      if ($('#2').text() === player) {
        alert('win');
      }
    }
  }
};

var winCondition = function(player) {
  console.log(player);
  if ($('#0').text() === player) {
    if ($('#1').text() === player) {
      if ($('#2').text() === player) {
        alert('win');
      }
    }
  }
};

var winCondition = function(player) {
  console.log(player);
  if ($('#0').text() === player) {
    if ($('#1').text() === player) {
      if ($('#2').text() === player) {
        alert('win');
      }
    }
  }
};

$('[id]').on('click', function() {
  if ($(this).text() === '') {
    if (playerTurn % 2 === 0) {
      $(this).text('X');
      winCondition('X');
      } else {
      $(this).text('O');
      winCondition('O');
    }
    playerTurn++;

  }
});
});
