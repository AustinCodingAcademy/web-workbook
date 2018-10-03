"use strict";

// You code here
function addNumber(num) {
  document.querySelector("#results").value += num;
}

function clearResults() {
  document.querySelector("#results").value = "";
}

function addition() {
  let current = document.querySelector("#results").value;
  if (current === "") return;
  document.querySelector("#results").value += "+";
}

function subtraction() {
  let current = document.querySelector("#results").value;
  if (current === "") return;
  document.querySelector("#results").value += "-";
}

function multiply() {
  let current = document.querySelector("#results").value;
  if (current === "") return;
  document.querySelector("#results").value += "*";
}

function divide() {
  let current = document.querySelector("#results").value;
  if (current === "") return;
  document.querySelector("#results").value += "/";
}

function equals() {
  document.querySelector("#results").value = eval(
    document.querySelector("#results").value
  );
}

function deleteLast() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.slice(0, -1);
}

function toggleSign() {
  let current = document.querySelector("#results").value;
  let currentFirstChar = current.slice(0, 1);
  let currentAfterFirstChar = current.slice(1);

  if (
    current === "" ||
    currentAfterFirstChar.includes("+") ||
    currentAfterFirstChar.includes("-") ||
    currentAfterFirstChar.includes("*") ||
    currentAfterFirstChar.includes("/")
  ) {
    alert("invalid input")
    return;
  }

  if (currentFirstChar === "-") {
    document.querySelector("#results").value = current.substr(1);
  } else {
    document.querySelector("#results").value = "-" + current;
  }
}
