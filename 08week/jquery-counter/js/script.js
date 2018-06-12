"use strict"

$(document).ready(function() {
  alert('Are you ready to count by ones, tens, and hundred?');
});


$('div').click(function(){
  var current = $('#counter').text();
  var currentAsNumber = parseInt(current);
  var newCounter;
  var x = $(this);
  if (x.attr('id') === "countByOne"){
    newCounter = currentAsNumber +1;
    console.log("the number is " +newCounter);
  } else if (x.attr('id') === "countByTen"){
    newCounter = currentAsNumber +10;
    console.log("the number is " +newCounter);
  } else if (x.attr('id') === "countByHundred"){
    newCounter = currentAsNumber +100;
    console.log("the number is " +newCounter);
  } else if (x.attr('id') === "clickAll"){
    newCounter = currentAsNumber +1 +10 +100;
    console.log("the number is " +newCounter);
  }
  $('#counter').text(newCounter);
})

$(function() {
   $( ".draggable" ).draggable();
 } );
