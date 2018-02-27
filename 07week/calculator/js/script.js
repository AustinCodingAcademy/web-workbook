'use strict';

// document.addEventListener("DOMContentLoaded",function(event){

function addNumber(num) {
  document.querySelector("#results").value += num;
}

function clearResults() {
  document.querySelector("#results").value = "";
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

function plusmin() {
  let number = document.querySelector("#results").value;
  let sign = number.substring(0, 1);
  let notsign = number.substring(1);
  if (sign == "+") {
    document.querySelector("#results").value = "-" + notsign;
  } else if (sign == "-") {
    document.querySelector("#results").value = "+" + notsign;
  } else {
    document.querySelector("#results").value = "-" + number;
  }
}

function equals() {
  document.querySelector("#results").value = eval(document.querySelector("#results").value);
}

function deleteLast() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.slice(0, -1);
}
// });
