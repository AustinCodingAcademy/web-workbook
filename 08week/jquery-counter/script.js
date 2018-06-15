'use strict'

console.log("i do have javascript");

$("#countByOne").click(function(){
  var current= $(this).text();
  parseInt(current);
  current++
 $(this).text(current);
  console.log(current);
})

$("#countByten").click(function(){
  var current= $ ("#counter").text();
  console.log("current counteris"+current);
  var currentAsNumber = parseInt(current);
  var newCounter = currentAsNumber+10;
  $("#counter").text(newCounter);
})

$("#countByHundred").click(function(){
  var current= $ ("#counter").text();
  console.log("current counteris"+current);
  var currentAsNumber = parseInt(current);
  var newCounter = currentAsNumber+100;
  $("#counter").text(newCounter);
})

$("#button").click(function(){
  console.log("clickwork")
  $("#countByOne").trigger("click")
})
