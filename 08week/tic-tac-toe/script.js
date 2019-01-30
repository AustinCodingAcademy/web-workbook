'use strict';

$(document).ready(function() {
  // Put app logic in here
  
  //need var player1, player2
  //function for clear board
  //function to append as x or o on clicked element

  
  //calculate a win
  let dataCell = $('div[data-cell]');
  let play = 'X'
  let playArray= [];
  dataCell.click(function(){
    let attrVal = $(this).attr('data-cell')

    if(play === 'X' && $(this).is(':empty') && $('#announce-winner').is(':empty')){
      $(this).append('X')
      playArray[attrVal] = play;
      victory()
      play = 'O'
      $('#turn').text("O's Turn")
    }
    else if(play === 'O' && $(this).is(':empty') && $('#announce-winner').is(':empty')){
      $(this).append('O')
      playArray[attrVal] = play;
      victory()
      play = 'X'
      $('#turn').text("X's Turn")
    }
    // console.log(playArray)
    readDataCellValue($(this))
    
  })

  function readDataCellValue(cell){
    let attrVal = cell.attr('data-cell')
    // console.log(cell.attr('data-cell'))
  }

  $('#clear').click(function(){
    dataCell.empty()
    $('#announce-winner').empty()
    playArray = []
    play = 'X'
    $('#turn').text("X's Turn")
  })
  dataCell.draggable();
  function victory(){
  //determine a winner by data-cell {0,1,2}, {3,4,5}, {6,7,8}, {0,3,6}, {1,4,7}, {2,5,8}, 
  //diagnols{0,4,,8}, {2,4,6}
    let winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    console.log(playArray)
    console.log(winConditions[1][1])
    console.log(playArray[winConditions[1][1]])
    for(let i=0; i < winConditions.length; i++){
      if(playArray[winConditions[i][0]] && playArray[winConditions[i][0]] === playArray[winConditions[i][1]] && playArray[winConditions[i][2]] === playArray[winConditions[i][0]]){
        $('#announce-winner').text(play + " is the winner!")
      }
    }
  }

});

