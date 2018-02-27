'use strict';

function addition() {
  document.querySelector("#results").value += "+";
}
function subtraction() {
  document.querySelector("#results").value += "-";
}
function multiplication() {
  document.querySelector("#results").value += "*";
}
function division() {
  document.querySelector("#results").value += "/";
}

function negative() {
  document.querySelector("#results").value += "-";
}
function equals() {
  document.querySelector("#results").value = eval(document.querySelector("#results").value);
}
