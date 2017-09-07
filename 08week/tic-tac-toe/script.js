'use strict';
$(document).ready(function(){
    var turnCount=0;

      $('.row').find('div').on('click', function(){
            if (turnCount % 2 === 0){
              $(this).text('X');
              checkVictory('X');
            } else {
           //player 2's turn (O)
              $(this).text('O');
              checkVictory('O');
            }
          turnCount++;

      });
//
// $(document).ready(function(){
//     var turnCount=0;
//       $('.row').find('div').on('click', function(){
//             if (turnCount % 2 === 0){
//               $(this).text('X');
//               checkVictory('X');
//             } else {
//            //player 2's turn (O)
//               $(this).text('O');
//               checkVictory('O');
//             }
//           turnCount++;
//
//       });
//
//
//     function checkVictory(player){
//        //top row check
//         if ($('.row').find('#1').text() !== ''){
//             if ($('#board').find('#1').text() == $('#board').find('#2').text()) {
//                 if ($('#board').find('#1').text() == $('#3').text()) {
//                     alert('Game over! '+player+' is the winner!');
//                     $('#newGame').removeClass('invisible');
//     });
//
// });

// if (($(`[data-cell="0"]`)).text()===player turn ++ $
