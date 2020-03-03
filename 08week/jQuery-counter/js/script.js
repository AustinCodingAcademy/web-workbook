'use strict'


$('.add').click(function(){
  var plus = this.id;
  var plusAsNumber = parseInt(plus);
  var current = $('#counter').text();
  console.log("current counter is " +current);
  var currentAsNumber = parseInt(current);
  var newCounter = currentAsNumber + plusAsNumber;
  //**line 10 is reading the number in HTML "id"**//
  $('#counter').text(newCounter);
})

//** mouse over, double click, multiply, divide**//
