'use strict';
$(document).ready(function(){

  var num1 = 0;  
  // var num2 = 0;
  // var num3 = 0; 
  $('#screen').click(function() {
    num1++;
    $('#points').text(num1);
  });

//   $('.box').click(function() {
//       $(this).css('background-color', 'red');
// });
  
  // $(function() {
  //   for(i=0; i<3; i++) {
  //        $('<div>').css({marginLeft: 20}).appendTo('body');
  //   }
  // });

  // $('#counter-10').click(function(){
  //   num2 += 10;
  //   $(this).text(num2);
  // })
  
  // $('#counter-100').click(function(){
  //   num3 += 100;
  //   $(this).text(num3);
  // })

  // $('#clickall').click(function(){
  //   num1++;
  //   $('#counter-1').text(num1);

  // num2 += 10;
  // $('#counter-10').text(num2);

  // num3 += 100;
  // $('#counter-100').text(num3);
});