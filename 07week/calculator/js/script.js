'use strict';

function addNumber(num) {
  document.getElementById("results").value += num;
}

function clearResults() {
  document.getElementById("results").value = "";
}

function addition() {
  document.getElementById("results").value += "+";
}

function subtraction() {
  document.getElementById("results").value += "-";
}

function multiplication() {
  document.getElementById("results").value += "*";
}

function inverse() {
  document.getElementById("results").value = eval(document.getElementById("results").value);
  document.getElementById("results").value = results.value*-1;
}

function division() {
  document.getElementById("results").value += "/";
}

function equals() {
  document.getElementById("results").value = eval(document.getElementById("results").value);
}

function deleteLast() {
  var current=document.getElementById("results").value;
  document.getElementById("results").value = current.substring(0, current.length-1);
}
