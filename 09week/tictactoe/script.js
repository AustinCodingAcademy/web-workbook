$(function () {
  let color = 'green';
  $('[data-cell]').click(function() {
    $(this).css('background-color', color);
    if (checkWin()) {
      console.log(`${color} wins!`)
    }
    if (color === 'green') {
      color = 'blue';
    } else {
      color = 'green';
    }
  })

  function checkWin() {


let verticalWin = function() {
      if ($('[data-cell="0"]').css('background-color') === color && $('[data-cell="3"]').css('background-color') === color && $('[data-cell="6"]').css('background-color') === color ) {
        console.log(`player ${color}wins`)
    }

    else if
      ($('[data-cell="1"]').css('background-color') === color && $('[data-cell="4"]').css('background-color') === color && $('[data-cell="7"]').css('background-color') === color ) {
        console.log(`player ${color}wins`)
      }

    else if
      ($('[data-cell="2"]').css('background-color') === color && $('[data-cell="5"]').css('background-color') === color && $('[data-cell="7"]').css('background-color') === color ) {
        console.log(`player ${color}wins`)
    }
}


let horizontalWin = function() {
      if ($('[data-cell="0"]').css('background-color') === color && $('[data-cell="1"]').css('background-color') === color && $('[data-cell="2"]').css('background-color') === color ) {
      console.log(`player ${color}wins`)
    }

    else if
      ($('[data-cell="3"]').css('background-color') === color && $('[data-cell="4"]').css('background-color') === color && $('[data-cell="5"]').css('background-color') === color ) {
      console.log(`player ${color}wins`)
    }

    else if
      ($('[data-cell="6"]').css('background-color') === color && $('[data-cell="7"]').css('background-color') === color && $('[data-cell="8"]').css('background-color') === color ) {
      console.log(`player ${color}wins`)
    } else {

    }
}
}
}
