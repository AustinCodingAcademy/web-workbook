var op = document.querySelector("#operator").value
var calculate;

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
  document.querySelector("#results" - "#results").value += "-";
}


function equals() {
  document.querySelector("#results").value = eval(document.querySelector("#results").value);
}
/*
function opposite() {
  document.querySelector("#results").value 
}
*/
function deleteLast() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.slice(0, -1);
}
