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
    document.querySelector("#results").value += "+";
    lastNumber = '';
  }

  function equals() {
    document.querySelector("#results").value = eval(document.querySelector("#results").value);
  }

  function deleteLast() {
    let current = document.querySelector("#results").value;
    document.querySelector("#results").value = current.slice(0, -1);
  }

  function minus() {
    document.querySelector("#results").value += "-";
  }

  function times() {
    document.querySelector("#results").value += "*";
  }

  function div() {
    document.querySelector("#results").value += "/";
  }

  function posNeg() {
    document.querySelector("#results").value =
    document.querySelector("#results").value.replace(lastNumber, `-${lastNumber}`);
  }
