// global var for computer icon - might get overridden by weapon's choice dialog
var cpuIcon = 'X';
// global var for player icon - might get overridden by weapon's choice dialog
var playerIcon = 'O';
// global var for computer's next move
var AIMove;

//settings for liveBoard: 1 is cpuIcon, -1 is playerIcon, 0 is empty
// pre set all cells before game starts to give user an idea how this looks/works when playing
// live board values are the basis for re-rndering of the board
var liveBoard = [1, -1, -1, -1, 1, 1, 1, -1, -1];
// all possible winning paths
var winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

//UI
// render the current state of the board
// @param board = liveBoard
function renderBoard(board) {
  // iterate over all entries	
  // el = current element of the liveBoard array
  // i = index 0 ... liveBoard.lenght - 1 
  board.forEach(function(el, i) {
    // jquery selector string to find the current square by id
    var squareId = '#' + i.toString(); // i.e. #0, #1, #2 ...
    if (el === -1) { // if value is -1 the square was selected by the player  
      $(squareId).text(playerIcon); // put the player's string into the square as text
    } else if (el === 1) { // if value is 1 it belongs to the computer
      $(squareId).text(cpuIcon); // put the computer's string into the square as text
    }
  });
  // add the respective css class to the squares according to the contained text X or O
  $('.square:contains(X)').addClass('x-marker');
  $('.square:contains(O)').addClass('o-marker');
}

/**
 * animates the winning path when either computer or player won
 */
function animateWinLine(){
  // assign a function to every row inside the winningLines   
  var idxOfArray = winningLines.map(function(winLines) {
	  // i.e. [0, 1, 2]
	// map function to every element inside a winLine and accumulate the values  
	// return the accumulated value of the contents of each winLine  
    return winLines.map(function(winLine) {
		// value i.e. 0 ...
      return liveBoard[winLine]; // current liveBoard value at this index 1, -1 or 0
    }).reduce(function(prev, cur) { // accumulate the values that the liveBoard currently has 
      return prev + cur; // sum values of the current liveBoard states for each winLine and add them to the result array
    });
  });
  // now our idxOfArray contains something like:
  // [ 3, -1, -2, 0, -1, 1, -1, 0 ]
  // find the index where the value = 3 or -3
  // Math.abs() ignores the minus 
  // so we either find the index of value -3 or 3, in this case index is 0  
   var squaresToAnimate = winningLines[idxOfArray.indexOf(Math.abs(3))];
  
  squaresToAnimate.forEach(function(el) {
	  // flash every element of the winning line by fadein/fadeout 5 times
      $('#' + el).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
    });
}

//MODALS
/**
 * show the modal to let the user select his weapon 
 */ 
function chooseMarker() {
  // show modal container	
  $('.modal-container').css('display', 'block');
  // animate the choose modal to visible
  $('.choose-modal').addClass('animated bounceInUp');
  
  // asign a click-handler for the span elements inside the modal's button area
  $('.button-area span').click(function() {
    var marker = $(this).text(); // text of the element the user clicked upon
    playerIcon = (marker === 'X' ? 'X' : 'O'); // assign player icon
    cpuIcon = (marker === 'X' ? 'O' : 'X'); // assign computer icon

	// hide the modal after 700 ms after the user selected his weapon 
    $('.choose-modal').addClass('animated bounceOutDown');
    setTimeout(function() {
		// hied html elements
      $('.modal-container').css('display', 'none');
      $('.choose-modal').css('display','none');
	  // start new game
      startNewGame();
    }, 700); // wait 700 ms before the annonymous function is invoked 
    // remove the click event handler from the span elements
    $('.button-area span').off();
  });
}

/**
 * show message in modal dialog when game is over
 */
function endGameMessage(){
  // get the result of who won	
  var result = checkVictory(liveBoard);
  // set the text depending on result value
  $('.end-game-modal h3').text(result === 'win' ? 'You Lost' : "It's a draw");
  
  // show the modal container
  $('.modal-container').css('display', 'block');
  // remove the animate-out class and assign the animate-in class so it gets visible
  $('.end-game-modal').css('display','block').removeClass('animated bounceOutDown').addClass('animated bounceInUp');
 
  // assign click-event handler to the 'Play again' span element 
  $('.button-area span').click(function() {
    // remove animate-in class and add animate-out class to hide the dialog again
    $('.end-game-modal').removeClass('animated bounceInUp').addClass('animated bounceOutDown');
    
	// hide the modal container after 700ms and start a new game
    setTimeout(function() {
      $('.modal-container').css('display', 'none');
      startNewGame();
    }, 700);
    // remove click-event handler from 'Play again' span element 
    $('.button-area span').off();
  });
}

//GAMEPLAY
/**
 * reset the game board to empty
 * re-render it
 * let the user make his first move
 */   
function startNewGame() {
  // reset board values	
  liveBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  // remove the text contained in tthe squares, remove the css classes from the squares
  $('.square').text("").removeClass('o-marker x-marker');
  renderBoard(liveBoard); // re-render board
  playerTakeTurn(); // player's turn
}

/**
 * player's turn
 */ 
function playerTakeTurn() {
  // assign hover function only to so far empty squares	
  $('.square:empty').hover(function() { // hover-in handler
    // for the empty square set players icon as text and set cursor to pointer 
    $(this).text(playerIcon).css('cursor', 'pointer');
  }, function() { // hover-out handler
    $(this).text(''); // remove player's icon from the square
  });

  // assign click-event handler to empty squares
  $('.square:empty').click(function() {
    $(this).css('cursor', 'default'); // reset cursor to pointer
	// assign players value to the liveBoard at the index of the clicked square
    liveBoard[parseInt($(this).attr('id'))] = -1; 
	// re-render the board as one of it's values has changed
    renderBoard(liveBoard);
    
	// check if the user won
    if (checkVictory(liveBoard)) {
      // if 'win' invoke endGameMessage after 700ms otherwise set timeout to 100ms  		
      setTimeout(endGameMessage,(checkVictory(liveBoard) === 'win') ? 700 : 100);
    } else {
	  // if not won let computer play after 100ms	
      setTimeout(aiTakeTurn, 100);
    }
	// remove click-event handler from all squares
    $('.square').off();
  });
}

/**
 * computer's turn
 */
function aiTakeTurn() {
  // compute computer's next move or if game is over return integer and don't set AIMOve to new value	
  miniMax(liveBoard, 'aiPlayer');
  liveBoard[AIMove] = 1; // set the liveBoard value to 1 at this index
  renderBoard(liveBoard); // re-render liveBoard
  if (checkVictory(liveBoard)) { // if won animate the winning line
    animateWinLine();
    // if 'win' invoke endGameMessage after 700ms otherwise set timeout to 100ms  		
    setTimeout(endGameMessage, checkVictory(liveBoard) === 'win' ? 700 : 100);
  } else {
	// if not won let player play after 100ms	
    playerTakeTurn();
  }
}

//UTILITIES
/**
 * check if computer or player won
 */
function checkVictory(board) {
  // sum up all board absolute values
  var squaresInPlay = board.reduce(function(prev, cur) {
    return Math.abs(prev) + Math.abs(cur);
  });

  // sum the current absolute values of each winLine
  // and only return a value if it equal 3 (or -3)
  var outcome = winningLines.map(function(winLines) {
    return winLines.map(function(winLine) { // map function to each winline
      return board[winLine]; // return the board values for this winline
    }).reduce(function(prev, cur) {
      // sum up the values		
      return prev + cur;
    });
  }).filter(function(winLineTotal) {
	// return only if absolute value = 3  
    return Math.abs(winLineTotal) === 3;
  });
  
  // outcome array will either contain 1 or zero elements 
  if (outcome[0] === 3) { // computer won
    return 'win';
  } else if (outcome[0] === -3) { // player won
    return 'lose';
  } else if (squaresInPlay === 9) { // all squares are filled so just be draw
    return 'draw';
  } else { // neither won and not all squares are filled - continue playing
    return false;
  }
}

/**
 * return all still empty squares 
 */ 
function availableMoves(board) {
  // map function to the board array	
  return board.map(function(el, i) { // element and array index
    if (!el) { // if value is 0 which is synonym for false add this index to the result
      return i;
    }
  }).filter(function(e) { // stop when element does not exist otherwise this will loop forever -> timeout  
    return (typeof e !== "undefined");
  });
}

//AI
//minimax algorithm - explanation here: http://http://neverstopbuilding.com/minimax
/**
 * @param state - the current liveBoard
 * @player - the current player we want to calculate the next move for
 */ 
function miniMax(state, player) {
  //base cases: check for an end state and if met - return the score from the perspective of the AI player.  
  var rv = checkVictory(state);
  
  // check if game is already over and in this case return and don't re-calculate AIMove
  if (rv === 'win') {
    return 10;
  }
  if (rv === 'lose') {
    return -10;
  }
  if (rv === 'draw') {
    return 0;
  }

  var moves = [];
  var scores = [];
  //for each of the available squares: 
  // recursively make moves and push the score + accompanying move to the moves + scores array
  availableMoves(state).forEach(function(square) {
	// set the value of the liveBoard either to 1 or -1 depending of computer or player   
    state[square] = (player === 'aiPlayer') ? 1 : -1;
	// recursively calculate the score when upper move was made and save it to the score array
    scores.push(miniMax(state, (player === 'aiPlayer') ? 'opponent' : 'aiPlayer'));
    moves.push(square); // save the move in the moves array
    state[square] = 0; // reset the square to empty as we just want to test the moves and not really play them
  });

  //calculate and return the best score gathered from each of the available moves. track the best movein the AIMove variable

  if (player === 'aiPlayer') {
	// for the computer find the maximum score inside scores and save the associated next move in AIMove var 
    AIMove = moves[scores.indexOf(Math.max.apply(Math, scores))];
    return Math.max.apply(Math, scores); // return max score to continue recursively
  } else {
	// for the payler find the minimum score inside scores and save the associated next move in AIMove var 
    AIMove = moves[scores.indexOf(Math.min.apply(Math, scores))];
    return Math.min.apply(Math, scores); // return min score to continue recursively
  }
}

// reset board
renderBoard(liveBoard);
// let user select his weapon
chooseMarker();