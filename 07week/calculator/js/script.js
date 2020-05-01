'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  // You code herefunction addNumber(num) {
  document.querySelector("#results").value += num;
}

function clearResults() {
  var x = num;
  document.querySelector("#results").value = "-x";
}

function addition() {
  document.querySelector("#results").value += "+";
}

function subtraction() {
  document.querySelector("#results").value += "-";
}

function multiply() {
  document.querySelector("#results").value += "*";
}

function divide() {
  document.querySelector("#results").value += "/";
}

function sign() {
  let x =
  document.querySelector("#results").value;     document.querySelector("#results").value = x * -1;
}

function equals() {
  document.querySelector("#results").value = eval(document.querySelector("#results").value);
}

function deleteLast() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.slice(0, -1);
}

function clearResults() {
  document.querySelector("#results").value = "";
}
});
