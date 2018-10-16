const PLAYER_TOKEN = 'X'
const COMPUTER_TOKEN = '0'
  
$(document).ready(function() {
  const grid = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];

  function isGameOver() {
    //check horizontal game over
    for (var i = 0; i < 3; i++) {
      if (grid[i][0] !== ' ' && 
        grid[i][0] === grid[i][1] &&
        grid[i][0] === grid[i][2]) {
        return grid[i][0]
      }
    }

    //check vertical game over
    for (var j = 0; j < 3; j++) {
      if (grid[0][j] !== ' ' && 
        grid[0][j] === grid[1][j] &&
        grid[0][j] === grid[2][j]) {
        return grid[0][j]
      }
    }

    //check diagonal game over - top left bottom right
    if (grid[0][0] !== ' ' && 
      grid[0][0] === grid[1][1] &&
      grid[0][0] === grid[2][2]) {
      return grid[0][0]
    }

    //check diagonal game over - bottom left top right
    if (grid[2][0] !== ' ' && 
      grid[2][0] === grid[1][1] &&
      grid[2][0] === grid[0][2]) {
      return grid[2][0]
    }

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        if (grid[i][j] === ' ') {
          return false;
        }
      }
    }
    
    return null;
  }

  function moveAI() {
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        if (grid[i][j] === ' ') {
          return {
            i: i,
            j: j
          };
        }
      }
    }
    return null;
  }
  // human X's turn
  $('.col').click(function() {
    $this = $(this);
    $(this).html(PLAYER_TOKEN);
    $(this).css('color', 'black');
    const i = $(this).data('i');
    const j = $(this).data('j');
    grid[i][j] = PLAYER_TOKEN;

    let gameState = isGameOver()
    if (gameState) {
      alert('game over: ' + gameState);
    } else {
      // computer's 0's turn
      const move = moveAI()
      grid[move.i][move.j] = COMPUTER_TOKEN;
      $('.col[data-i=' + move.i +'][data-j=' + move.j + ']').html(COMPUTER_TOKEN).css('color', 'black');
    }

    gameState = isGameOver()
    if (gameState) {
      alert('game over: ' + gameState);
    }
  });

  $('#restart').click(function() {

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        grid[i][j] = ' ';
        $('.col[data-i=' + i +'][data-j=' + j + ']').html('y').css('color', 'white');
      }
    }
  });

});




