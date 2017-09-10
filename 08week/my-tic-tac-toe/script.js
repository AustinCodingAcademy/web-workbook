'use strict';

$(document).ready(function() {
  // alternate turns
  var turn = 0;
  $('#board .box').click(function() {
    if (turn % 2 === 0) {
      $(this).html('<b class="x">X</b>');
      $(this).addClass('x disabled');
      checkVictory();
      // a box cannot be clicked twice
    } else if ($(this).hasClass('disabled')) {
      alert('This spot is already taken.');
    } else {
      $(this).html('<b class="o">O</b>');
      $(this).addClass('o disabled');
      checkVictory();
    }
    turn++;
  });
  // self-explanatory
  function checkVictory() {
    if ($('#box1').hasClass('x') && $('#box2').hasClass('x') && $('#box3').hasClass('x') ||
      $('#box4').hasClass('x') && $('#box5').hasClass('x') && $('#box6').hasClass('x') ||
      $('#box7').hasClass('x') && $('#box8').hasClass('x') && $('#box9').hasClass('x') ||
      $('#box1').hasClass('x') && $('#box4').hasClass('x') && $('#box7').hasClass('x') ||
      $('#box2').hasClass('x') && $('#box5').hasClass('x') && $('#box8').hasClass('x') ||
      $('#box3').hasClass('x') && $('#box6').hasClass('x') && $('#box9').hasClass('x') ||
      $('#box1').hasClass('x') && $('#box5').hasClass('x') && $('#box9').hasClass('x') ||
      $('#box3').hasClass('x') && $('#box5').hasClass('x') && $('#box7').hasClass('x')
    ) {
      alert('Winner: X!');
      turn = 0;
    } else if ($('#box1').hasClass('o') && $('#box2').hasClass('o') && $('#box3').hasClass('o') ||
      $('#box4').hasClass('o') && $('#box5').hasClass('o') && $('#box6').hasClass('o') ||
      $('#box7').hasClass('o') && $('#box8').hasClass('o') && $('#box9').hasClass('o') ||
      $('#box1').hasClass('o') && $('#box4').hasClass('o') && $('#box7').hasClass('o') ||
      $('#box2').hasClass('o') && $('#box5').hasClass('o') && $('#box8').hasClass('o') ||
      $('#box3').hasClass('o') && $('#box6').hasClass('o') && $('#box9').hasClass('o') ||
      $('#box1').hasClass('o') && $('#box5').hasClass('o') && $('#box9').hasClass('o') ||
      $('#box3').hasClass('o') && $('#box5').hasClass('o') && $('#box7').hasClass('o')
    ) {
      alert('Winner: O!');
      turn = 0;
      // tie
    } else if (turn === 8) {
      alert("Cat's Game!");
      turn = 0;
    }
  };
  // reset button
  $("button").click(function() {
    $('#board .box').text('');
    $('#board .box').removeClass('disabled x o');
    turn = 0;
  });

});
