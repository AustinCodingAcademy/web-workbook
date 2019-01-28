'use strict';

$(document).ready(function() {
  let player1 = 'x'
  let player2 = 'o'
  let play = 'x'
  let dataCell = $('div[data-cell]')
  let playArray = []

  dataCell.click(function(){
    if (play === 'x') {
      $(this).append('o')
      play = 'o'
      playArray[attrVal] = play

    } else {
      $(this).append('x')
      play = 'x'
      playArray[attrVal] = play
    }
    readDataCellValue($this)
  })
  function readDataCellValue(cell){
    cell
  }
  $('button').on('click', function(){
    let attrVal = cell.attr('data-cell')

    // console.log(cell.attr('data-cell'))

  })
  dataCell.draggable()
  })
  // determine a winner by datacell [0,1,2], [3,4,5], [6, 7, 8]
  //diagonal
  //var player1 = and player2
  // clear board!!!
  // append an x or o 
  //***player can add to many to one square */

  //practice drage and drop

