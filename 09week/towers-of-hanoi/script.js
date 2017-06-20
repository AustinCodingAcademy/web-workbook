$(document).ready(function() {
var gameArray = [
  [0,1,2,3],
  [],
  [],
];
var save = false;
block();

$("[data-stack='1']").on('click', function() {
  // var newElement = gameArray[0].pop()
  if (save === false) {
    if (gameArray[0].length >= 1) {
      save = gameArray[0].pop();
    }
  } else {
    if (gameArray[0].length === 0 || gameArray[0][gameArray[0].length - 1] < save) {
      gameArray[0].push(save);
      save = false;
    }
  }
  block();
  console.log('Cam is cool')
});

$("[data-stack='2']").on('click', function() {
  // var newElement = gameArray[0].pop()
  if (save === false) {
    if (gameArray[1].length >= 1) {
      save = gameArray[1].pop();
    }
  } else {
    if (gameArray[1].length === 0 || gameArray[1][gameArray[1].length - 1] < save) {
      gameArray[1].push(save);
      save = false;
    }
  }
  block();
  console.log('Bryan is cool')
});

$("[data-stack='3']").on('click', function() {
  // var newElement = gameArray[0].pop()
  if (save === false) {
    if (gameArray[2].length >= 1) {
      save = gameArray[2].pop();
    }
  } else {
    if (gameArray[2].length === 0 || gameArray[2][gameArray[2].length - 1] < save) {
      gameArray[2].push(save);
      save = false;
    }
  }
  block();
  console.log('Cam is cool')
});

function block() {
  console.log(gameArray)
  $("[data-stack='1']").html("");
  $("[data-stack='2']").html("");
  $("[data-stack='3']").html("");
  for (var i=0; i<=3; i++) {
    if (gameArray[0][i] >= 0) {
      var blockNum = 100;
      if (gameArray[0][i] === 1) {
        blockNum = 75;
      } else if (gameArray[0][i] === 2) {
        blockNum = 50;
      } else if (gameArray[0][i] === 3) {
        blockNum = 25;
      }
      $("[data-stack='1']").append("<div data-block='" + blockNum + "'></div>");

    }
    if (gameArray[1][i] >= 0) {
      var blockNum = 100;
      if (gameArray[1][i] === 1) {
        blockNum = 75;
      } else if (gameArray[1][i] === 2) {
        blockNum = 50;
      } else if (gameArray[1][i] === 3) {
        blockNum = 25;
      }
      $("[data-stack='2']").append("<div data-block='" + blockNum + "'></div>");

    }
    if (gameArray[2][i] >= 0) {
      var blockNum = 100;
      if (gameArray[2][i] === 1) {
        blockNum = 75;
      } else if (gameArray[2][i] === 2) {
        blockNum = 50;
      } else if (gameArray[2][i] === 3) {
        blockNum = 25;
      }
      $("[data-stack='3']").append("<div data-block='" + blockNum + "'></div>");

    }
  }
  win();
}

function win() {
  if (gameArray[2].length === 4){
    alert("Congratulations, Keith! It looks like you have had some practice!")
  }
}







});
