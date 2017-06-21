

$(document).ready(function() {

  var $towers = $('[data-stack]');
  var $detached = {};
  var gameover = false;

  $towers.click(move);
  //If the detached block is empty, and grab last-child of clicked tower.
  function move() {
    if (gameover === false) {
      if ($.isEmptyObject($detached)) {
        // If current tower is not empty, detach the last-child of current tower
        if(!($(this).children().length ===0) ) {
          $detached=$(this).children().last().detach();
        }
      }
      else {
        if (dropDetached($(this), $detached)) {
          $detached = {};
        }
      }
      checkForWin();
    }
    else {
      resetGame();
    }
  }

  function dropDetached($towers, $detached) {
    //if able, drop detached
    //if not, do nothing and return
    if (droppable($towers, $detached)) {
      $towers.append($detached);
      return true;
    }
    else {
      return false;
    }
  }

  function droppable($towers, $detached) {
    var $last_block = $towers.children().last();
    if( parseInt($detached.attr("data-block"))<parseInt($last_block.attr("data-block")) || $towers.children().length===0) {
      return true;
    }
    else {
      return false;
    }
  }

  function checkForWin() {
    if($('[data-stack="3"]').children().length===4) {
      $('#announce-game-won').html("Victory!");
      gameover=true;

    }
  }

  function resetGame() {
    $('[data-stack="1"]').html('<div data-block="100"></div><div data-block="75"></div><div data-block="50"></div><div data-block="25"></div>');
    $('[data-stack="2"]').empty();
    $('[data-stack="3"]').empty();
    $('#announce-game-won').empty();
    $detached = {};
    gameover = false;
  }
});
