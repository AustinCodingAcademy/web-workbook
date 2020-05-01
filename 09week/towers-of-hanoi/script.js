'use strict';

$(document).ready(function() {
  var $block = null;
  var n = 4
  var Beg = $('#poo').children().last().data('block');
  var Aux = $('#p2').children().last().data('block');
  var End = $('#p3').children().last().data('block');
  var final = $('#p3').children().length();

$('[data-stack]').click(function() {
if ($block) {
  $(this).append($block);
  $block = null;
 } else {
   $block = $(this).children().last().detach();
 })



$('[data-stack]').click(function() {
  if (Beg < Aux) {
  $(this).children().last().detach();
 })






  console.log(Beg);
  console.log(Aux);
  console.log(End);
});


// T(N-1, Beg, End, Aux)
// T(1, Beg, Aux, End)
// T(N-1, Aux, Beg, End)

// N = 3
// Beg = A
// Aux = B
// End = C

// T(3, A, B, C)


// T(2, A, C, B)
// T(1, A, B, C)
// T(2, B, A, C)
//$('[data-stack]').click(function() {
//  var blockSize = $(this).childern().last().data('block');
