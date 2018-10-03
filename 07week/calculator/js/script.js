"use strict";

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
  let currentFirstChar = current.slice(0, 1); // first char of results
  let currentAfterFirstChar = current.slice(1); // everything after first char of results

  // check for cases where adding/removing a negative sign wouldn't make sense
  if (errorHandler(current, currentAfterFirstChar)) return;

  if (currentFirstChar === "-") {
    // remove "-" from current results
    document.querySelector("#results").value = current.substr(1);
  } 
  else {
    // add "-" to current results
    document.querySelector("#results").value = "-" + current;
  }
}

// Function that checks if str1 is empty or str2 contains a "+", "-", "*", or "/"
function errorHandler(str1, str2) {
  if (
    str1 === "" ||
    str1 === "0" ||
    str2.includes("+") ||
    str2.includes("-") ||
    str2.includes("*") ||
    str2.includes("/")
  )
    return true;
  
    else 
    return false;
}
