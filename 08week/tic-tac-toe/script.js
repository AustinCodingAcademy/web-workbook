'use strict';

$(document).ready(function() {
  let player1 = 'x'
  let player2 = 'o'
  let play = 'x'
  let dataCell = $('div[data-cell]')
  let playArray = []
 
  dataCell.click(function() {
    if (play === 'x') {
      $(this).append('o')
      play = 'o'
    } else {
      $(this).append('x')
      play = 'x'
    }
    readDataCellValue(cell)
  })


  function readDataCellValue(cell) {
    let attrVal = cell.attr('data-cell')
    console.log(cell.attr('data-cell'))
  }
  $('#clear').on('click', function(){
    dataCell.empty()
  })




















});