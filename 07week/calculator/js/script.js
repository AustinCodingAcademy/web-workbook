'use strict';

// document.addEventListener("DOMContentLoaded", function(event) {



function addNumber(num) {
  document.querySelector("#results").value += num;
}

function subtraction() {
  document.querySelector("#results").value += " - ";
}

function clearResults() {
  document.querySelector("#results").value = "";
}

function addition() {
  document.querySelector("#results").value += " + ";
}

function division() {
  document.querySelector("#results").value += " / ";
}



function multiply() {
  document.querySelector("#results").value += " * ";
  lastNumber = '';
}


// my original answer
function posNeg() {
  var current = document.querySelector("#results").value;
  document.querySelector("#results").value = current * -1;
}


function equals() {
  document.querySelector("#results").value = eval(document.querySelector("#results").value);
}



function deleteLast() {
  var current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.substring(0, current.length - 1);
}
// });
