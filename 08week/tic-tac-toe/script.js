'use strict';

$(document).ready(function() {
  // Put app logic in here
let firstTurn = 'X';
$('[data-cell]').click(function() {
  if($(this).text() === ''){
   $(this).text(firstTurn);
    checkForWins();
   if(firstTurn === 'X'){
     firstTurn = 'O';
   }else{
     firstTurn = 'X';
   }
  //  checkForWins();
 }
 })


  function checkForWins(){
    if($('[data-cell = "0"]').text() === firstTurn &&
       $('[data-cell = "1"]').text() === firstTurn &&
       $('[data-cell = "2"]').text () === firstTurn||
       $('[data-cell = "3"]').text() === firstTurn &&
       $('[data-cell = "4"]').text() === firstTurn &&
       $('[data-cell = "5"]').text () === firstTurn ||
       $('[data-cell = "6"]').text() === firstTurn &&
       $('[data-cell = "7"]').text() === firstTurn &&
       $('[data-cell = "8"]').text () === firstTurn ||
       //diagonal
       $('[data-cell = "0"]').text() === firstTurn &&
       $('[data-cell = "4"]').text() === firstTurn &&
       $('[data-cell = "8"]').text() === firstTurn ||
       $('[data-cell = "2"]').text() === firstTurn &&
       $('[data-cell = "4"]').text() === firstTurn &&
       $('[data-cell = "6"]').text() === firstTurn||
       //horizontal
       $('[data-cell = "0"]').text() === firstTurn &&
       $('[data-cell = "3"]').text() === firstTurn &&
       $('[data-cell = "6"]').text () === firstTurn ||
       $('[data-cell = "1"]').text() === firstTurn &&
       $('[data-cell = "4"]').text() === firstTurn &&
       $('[data-cell = "7"]').text () === firstTurn ||
       $('[data-cell = "2"]').text() === firstTurn &&
       $('[data-cell = "5"]').text() === firstTurn &&
       $('[data-cell = "8"]').text () === firstTurn){
         $('#announce-winner').text(`Player ${firstTurn} Wins!`);
    }
  }

  

  $('#clear').click(function(){
    $('[data-cell]').empty();
    firstTurn = 'X';
  })

  })










 // function checkForWins(){
 //   if($('[data-cell = "0"]').text() === firstTurn &&
 //      $('[data-cell = "1"]').text() === firstTurn &&
 //      $('[data-cell = "2"]').text () === firstTurn ){
 //     $('#announce-winner').text(`Player ${firstTurn} Wins!`);
 //   }
 // }
 //
 // $('#clear').click(function(){
 //   $('[data-cell]').empty();
 //   firstTurn = 'X';
 // })
 //
 // })
