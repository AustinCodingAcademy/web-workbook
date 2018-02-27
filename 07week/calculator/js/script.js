'use strict';

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

function multiplication() {
  document.querySelector("#results").value += "*";
}

function division() {
  document.querySelector("#results").value += "/";
}

function posNeg() {
  let current = document.querySelector("#results").value;
  let re = /[\+\*\/-]/;
  let currentList = current.split(re);
  let lastNum = currentList[currentList.length - 1];
  let startString = document.querySelector("#results").value.slice(0, document.querySelector("#results").value.length - lastNum.length);
  if (currentList[currentList.length - 2] === "(") {
    lastNum = currentList[currentList.length - 1].slice(0, -1);
    startString = startString.slice(0, -2)
  } else {
    lastNum = "(-" + lastNum + ")";
  }
  document.querySelector("#results").value = startString + lastNum;
}

function equals() {
  document.querySelector("#results").value = eval(document.querySelector("#results").value);
}

function deleteLast() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.slice(0, -1);
}
