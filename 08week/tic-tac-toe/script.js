$(document).ready(function () {
  selectElements();
  $(".cell").on("click", clickCell);
  $(".reset").on("click", resetAll);
});

var data = {
  players: [
      {sign: 'x', score: 0},
      {sign: 'o', score: 0}
  ],
  playing: false,
  turn: 0,
  current: {player: {}},
  cells: {}
};

var view = {
  cell: {},
  cells: {},
  gameboard: {},
  current: {player: {}},
  scores: {x: {}, o: {}}
};

function selectElements() {
  view.cells = $(".cell");
  view.gameboard = $(".gameboard");
  view.scores.x = $(".player-x .score");
  view.scores.o = $(".player-o .score");
  view.current.player = $(".player-current span");
}

function clickCell() {
  if (!data.playing) { initGame(); }
  view.cell = $(this);
  if (putSign()) {
      if (hasGameEnded()) { resetBoard(); }
      nextTurn();
  }
}

function initGame() {
  data.playing = true;
  data.current.player = data.players[data.turn % 2];
}

function putSign() {
  if (view.cell.text() == "") {
      view.cell.addClass(data.current.player.sign);
      view.cell.text(data.current.player.sign);
      return true;
  }
  return false;
}

function hasGameEnded() {
  var cells = mapCells();
  if (checkWin(cells)) {
      updateScore();
      alert("Player "+data.current.player.sign.toUpperCase()+" won!");
      return true;
  } else if (checkDraw(cells)) {
      alert("Draw!");
      return true;
  } else {
      return false;
  }
}

function mapCells() {
  for (var i = 1; i <= 9; i++) { data.cells["c"+i] = $("#cell-"+i).text(); }
  return data.cells;
}

function checkWin(c) {
  var s = data.current.player.sign;
  if (
      (s == c.c1 && s == c.c2 && s == c.c3) || // Horizontals
      (s == c.c4 && s == c.c5 && s == c.c6) ||
      (s == c.c7 && s == c.c8 && s == c.c9) ||

      (s == c.c1 && s == c.c4 && s == c.c7) || // Vertical
      (s == c.c2 && s == c.c5 && s == c.c8) ||
      (s == c.c3 && s == c.c6 && s == c.c9) ||

      (s == c.c1 && s == c.c5 && s == c.c9) || // Oblique
      (s == c.c3 && s == c.c5 && s == c.c7)
  ) {
      return true;
  } else {
      return false;
  }
}

function updateScore() {
  data.current.player.score++;
  view.scores[data.current.player.sign].text(data.current.player.score);
}

function checkDraw(c) {
  for (var prop in c) { if (c[prop] == "") { return false; } }
  return true;
}

function resetBoard() {
  view.cells.each(function () {
      $(this).text("").removeClass("o x");
  });
}

function nextTurn(turn) {
  data.turn++;
  data.current.player = data.players[data.turn % 2];
  view.current.player
      .removeClass()
      .addClass(data.current.player.sign)
      .text(data.current.player.sign);
}

function resetAll() {
  resetBoard();

  data.players[0].score = 0;
  view.scores.x.text("0");
  data.players[1].score = 0;
  view.scores.o.text("0");

  data.turn = 0;
  data.current.player = data.players[data.turn % 2];

  view.current.player
      .removeClass()
      .addClass(data.current.player.sign)
      .text(data.current.player.sign);
}
