$(function() {
  let color = 'rgb(0, 128, 0)';
  $('[data-cell]').click(function() {
    $(this).text('hello');
    if (checkWin()) {
      console.log(`${color} wins!`)
    } else {
      if(color === 'rgb(0,128, 0)') {
        color = 'rgb(0, 0, 255)';
      } else {
        color = 'rgb(0, 128, 0)'
      }
   }
})

function checkWin() {
  if (
    $('[data-cell="0"]').css ( 'background-color') === color &&
    $('[data-cell="3"]').css ( 'background-color') === color &&
    $('[data-cell="6"]').css ( 'background-color') === color
  ) }
    return true;
  } else {
    return false;
  }
 }
})
