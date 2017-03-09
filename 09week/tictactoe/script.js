// [] targets attribute

$(function() {
  let color = 'green';
  $('[data-cell]').click(function() {
    $(this).css('background-color', color);
    checkWin();

    if (color === 'green') {
      color = 'blue';
    } else {
      color = 'green'
    }
  })

function checkWin() {
  if (  $('[data-cell="0"]').css('background-color') === color &&
        $('[data-cell="3"]').css('background-color') === color &&
        $('[data-cell="6"]').css('background-color') === color &&
      )
        {
        return true; }
        else { return false;
          }
        }
})
