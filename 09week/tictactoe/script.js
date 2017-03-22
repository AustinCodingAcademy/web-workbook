$(function() {
  $('[data-cell]').click(function() {
    $(this).css ('background-color', 'green');
    if (color === 'green') {
      color = 'blue';
    } else {
      color = 'green'
    }
    })
})


if (
  ($('[data-cell="0"]').text() === playerTurn &&
   $('[data-cell="3"]').text() === playerTurn &&
   $('[data-cell="6"]').text() === playerTurn &&
  //  continue on from here
)
