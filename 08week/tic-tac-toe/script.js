'use strict';

$(document).ready(function() {
  // Put app logic in here
  /// determine winner by (0,1,2)
  /// var player1, player 2, count
  /// function for clear board
  /// 


let player1 = 'x'
let player2 = 'o'
let play = 'x'
let dataCell = $('div[data-cell]')

dataCell.click(function(){
if (play === 'x') {
  $(this).append('o')  
  play = '0'
  } else {
    $(this).append('x')
    play = 'x'
  }
  function readDataCellValue(cell){
    let attrVal = cell.attr('data-cell')

  }

})

$('#clear').on('click', function() {
  dataCell.empty()
})


///drag and drop practice
dataCell.draggable()
























})

///drag and drop practice
