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

function plusMinus() {
  let input = document.querySelector("#results").value;
  console.log("input");

    let newInput = -1*input;
    document.querySelector("#results").value = newInput;
  }
}

function equals() {
  document.querySelector("#results").value = eval(document.querySelector("#results").value);
}

function deleteLast() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.slice(0, -1);
}
