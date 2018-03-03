'use strict';

let lastNumber = '';

function addNumber(num) {
  document.querySelector("#results").value += num;
  lastNumber += num;
}

function clearResults() {
  document.querySelector("#results").value = "";
}

function addition() {
  document.querySelector("#results").value += " + ";
  lastNumber = '';
}

function subtraction() {
  document.querySelector("#results").value += " - ";
  lastNumber = '';
}

function multiplication() {
  document.querySelector("#results").value += " * ";
  lastNumber = '';
}

function division() {
  document.querySelector("#results").value += " / ";
  lastNumber = '';
}

function plusMinus() {
  document.querySelector("#results").value += " * -1 ";
  // document.querySelector("#results").value = document.querySelector("#results").value.replace(lastNumber, `-${lastNumber}`);
    // lastNumber = lastNumber * -1;
}

function equals() {
  document.querySelector("#results").value = eval(document.querySelector("#results").value);
}

function deleteLast() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.slice(0, -1);
}
