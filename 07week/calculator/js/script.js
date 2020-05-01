function addNumber(num) {
  document.querySelector("#results").value += num;
}

function subNumber(num) {
  document.querySelector("#results").value += "-";
}


function multiNumber(num) {
  document.querySelector("#results").value += "*";
}


function divNumber(num) {
  document.querySelector("#results").value += "/";
}


function swapNumber(num) {
  document.querySelector("#results").value += "* -1";
  equals();
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