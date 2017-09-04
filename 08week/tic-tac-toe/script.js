// 'use strict';
//
// $(document).ready(function() {
  // Put app logic in here

'use strict';

$(document).ready(function() {
  // Put app logic in here
  let playerTurn = 0;
  $('.box').click(function() {
    if (playerTurn %2 === 0){
      $(this).text('X');
    } else {
      $(this).text('O');
    }
    playerTurn++;
  })


  var x = "x";
  var o = "o";
  var turns = 0;

  // Box vars
  var box1 = $('#box1');
  var box2 = $('#box2');
  var box3 = $('#box3');
  var box4 = $('#box4');
  var box5 = $('#box5');
  var box6 = $('#box6');
  var box7 = $('#box7');
  var box8 = $('#box8');
  var box9 = $('#box9');

  $('.box').click(function() {
    if(box1.hasClass('o') && box2.hasClass('o') && box3.hasClass('o')||
    box4.hasClass('o') && box5.hasClass('o') && box6.hasClass('o')||
    box7.hasClass('o') && box8.hasClass('o') && box9.hasClass('o')||
    box1.hasClass('o') && box4.hasClass('o') && box7.hasClass('o')||
    box2.hasClass('o') && box5.hasClass('o') && box8.hasClass('o')||
    box3.hasClass('o') && box6.hasClass('o') && box9.hasClass('o')||
    box1.hasClass('o') && box5.hasClass('o') && box9.hasClass('o')||
    box3.hasClass('o') && box5.hasClass('o') && box7.hasClass('o')

  ){

    //This alert stops the ability to continue clicking after winner is declared.
      alert('O is the Winner!')
      $('#boardgame li').removeClass('disable');
      $('#boardgame li').removeClass('o');
      $('#boardgame li').removeClass('x');

    } else if (box1.hasClass('x') && box2.hasClass('x') && box3.hasClass('x')||
    box4.hasClass('x') && box5.hasClass('x') && box6.hasClass('x')||
    box7.hasClass('x') && box8.hasClass('x') && box9.hasClass('x')||
    box1.hasClass('x') && box4.hasClass('x') && box7.hasClass('x')||
    box2.hasClass('x') && box5.hasClass('x') && box8.hasClass('x')||
    box3.hasClass('x') && box6.hasClass('x') && box9.hasClass('x')||
    box1.hasClass('x') && box5.hasClass('x') && box9.hasClass('x')||
    box3.hasClass('x') && box5.hasClass('x') && box7.hasClass('x')

){
    //This alert stops the ability to continue clicking after winner is declared.
      alert('Winner: X')
      $('.box').removeClass('disable');
      $('.box').removeClass('o');
      $('.box').removeClass('x');

  //If game takes 9 turns call it a tie
    }   else if (turns === 9) {
      alert('Tie Game');
      $('#boardgame li').removeClass('disable');
      $('#boardgame li').removeClass('o');
      $('#boardgame li').removeClass('x');
      turns = 0;

  //Add .addClass(disable) because turn has been taken

    } else if ($(this).hasClass('disable')) {
      alert('This spot is occupied, try another.');
    } else if (turns%2 === 0) {
      turns++;
      $(this).text(o);
      $(this).addClass('disable o');
      if(box1.hasClass('o') && box2.hasClass('o') && box3.hasClass('o')||
  box4.hasClass('o') && box5.hasClass('o') && box6.hasClass('o')||
  box7.hasClass('o') && box8.hasClass('o') && box9.hasClass('o')||
  box1.hasClass('o') && box4.hasClass('o') && box7.hasClass('o')||
  box2.hasClass('o') && box5.hasClass('o') && box8.hasClass('o')||
  box3.hasClass('o') && box6.hasClass('o') && box9.hasClass('o')||
  box1.hasClass('o') && box5.hasClass('o') && box9.hasClass('o')||
  box3.hasClass('o') && box5.hasClass('o') && box7.hasClass('o')

){
        alert('O is the Winner!');
        turns = 0;
      }
    } else {
      turns++;
      $(this).text(x);
      $(this).addClass('disable x');
      if(box1.hasClass('x') && box2.hasClass('x') && box3.hasClass('x')||
  box4.hasClass('x') && box5.hasClass('x') && box6.hasClass('x')||
  box7.hasClass('x') && box8.hasClass('x') && box9.hasClass('x')||
  box1.hasClass('x') && box4.hasClass('x') && box7.hasClass('x')||
  box2.hasClass('x') && box5.hasClass('x') && box8.hasClass('x')||
  box3.hasClass('x') && box6.hasClass('x') && box9.hasClass('x')||
  box1.hasClass('x') && box5.hasClass('x') && box9.hasClass('x')||
  box3.hasClass('x') && box5.hasClass('x') && box7.hasClass('x')

){
        alert('X is the Winner');
        turns = 0;
      }
    }
  });
//Reset Game
  $('#clear').click(function(){
    $('.box').text('');
    $('.box').removeClass('disable');
    $('.box').removeClass('o');
    $('.box').removeClass('x');
    turns = 0;

  });
});

//   if($('[data-cell="0"]').text() === "X" && $('[data-cell="1"]').text() === "X" && $('[data-cell="2"]').text() === "X") ||
//
// } else {
//
// }($('[data-cell="3"]').text() === "X" && $('[data-cell="4"]').text() === "X" && $('[data-cell="5"]').text() === "X") ||
//
// });
