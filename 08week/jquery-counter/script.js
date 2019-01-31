'use strict'

console.log("I do have javascript");

// $('.box').click(function(){
//   var clickedId = this.id;
//   var current = $('#counter').text();
//   console.log("current counter is " + current);
//   var currentAsNumber = parseInt(current);
//
//   var newCounter;
//   if(clickedId === 'countByOne'){
//     newCounter = currentAsNumber +1;
//   } else if (clickedId === 'countByTen') {
//     newCounter = currentAsNumber +10;
//   } else if (clickedId === 'countByHundred') {
//     newCounter = currentAsNumber +100;
//   }
//
//   $('#counter').text(newCounter);
// })

function one(){
  var current = $('#counter').text();
  console.log("current counter is " + current);
  var currentAsNumber = parseInt(current);
  var newCounter = currentAsNumber + 1;
  $('#counter').text(newCounter);
}

function two(){
  var current = $('#counter').text();
  var currentAsNumber = parseInt(current);
  var newCounter = currentAsNumber + 10;
  $('#counter').text(newCounter);
}

function three(){
  var current = $('#counter').text();
  var currentAsNumber = parseInt(current);
  var newCounter = currentAsNumber + 100;
  $('#counter').text(newCounter);
}

$(function(){
  $('#countByOne').click(one);
  $('#countByTen').click(two);
  $('#countByHundred').click(three);
})

$('button').click(function(){
  one();
  two();
  three();
})

// $('button').click(function(){
//   var current = $('#counter').text();
//   var currentAsNumber = parseInt(current);
//   var newCounter = currentAsNumber + 111;
//   $('#counter').text(newCounter);
// })

// $('button').click(function(){
//   one();
//   two();
//   three();
// })

$('document').ready(function() {
  alert("Are you ready to count by ones, tens, and hundred?");
})

$(function(){
    $("div").draggable();
  });
