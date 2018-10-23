'use strict';
function addNumber(num) {
  document.querySelector("#results").value += num;
}

function multiplication(num) {
  document.querySelector("#results").value += "*";
}

function division(num) {
  document.querySelector("#results").value += "/";
}

function subtraction(num) {
  document.querySelector("#results").value += "-";
}

function clearResults() {
  document.querySelector("#results").value = "";
}

function addition() {
  document.querySelector("#results").value += "+";
}

function equals() {
  document.querySelector("#results").value = eval(document.querySelector("#results").value);
}

function deleteLast() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.slice(0, -1);
}