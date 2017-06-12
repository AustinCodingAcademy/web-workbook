var winState = [
  // horizontal
  [0,1,2],
  [3,4,5],
  [6,7,8],
  // vertical
  [0,3,6],
  [1,4,7],
  [2,5,8],
  // diagonal
  [0,4,8],
  [2,4,6]
  ];

  function reset () {
  console.log('Game Reset');
  var lis = $('li');
  $.each(lis, function() {
    $(this).text('').removeClass('o').removeClass('x');
  });
}

function clickMe () {
  console.log('clicked');
  $(this).addClass('x').text('X');
  endGame();
   console.log('before Move');
  computerMove();
}

function computerMove () {
    console.log('Computer Turn');
    var pick = '';
    var lis = $('li');
    var noInfLoop = 0;
    while ( (pick == '') || (noInfLoop <= 10) )  {
      var randNum = Math.floor(Math.random() * lis.length);
      console.log('Computer picked: ' + randNum);
      if (lis[randNum].innerText == '') {
        console.log('Its a good pick');
        $(lis[randNum]).addClass('o').text('O');
        pick = 'picked';
      }
      noInfLoop++;
    }
}

function endGame() {
  var lis = $('li');
  console.log('Is the game over?')
  var tally = 0;
  for (var a=0; a<= winState.length-1; a++) {
    tally = 0;
    for (var b=0; b<= winState[a].length-1; b++) {
     console.log(a,b, lis[winState[a][b]].innerText);
    }
  }

}

$('.square').hover(function() {
  if ( $(this).text() == '') {
    $(this).addClass('hover');
  }
  }, function() {
  $(this).removeClass('hover');
});

$('.square').click(clickMe);

$('#reset').click(reset);
