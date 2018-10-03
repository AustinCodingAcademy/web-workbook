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

function  subtraction() {
  document.querySelector("#results").value += "-";
}

function  multiply() {
  document.querySelector("#results").value += "*";
}
function  division() {
  document.querySelector("#results").value += "/";
}
function  addsub() {
  var resultValue = document.querySelector("#results").value;
  var firstInput = resultValue.slice(0,1)
  if (firstInput === "-") {
    document.querySelector("#results").value = resultValue.substring(1)
  
  } else {
    document.querySelector("#results").value = "-" + resultValue
  } 
  

}

function equals() {
  document.querySelector("#results").value = eval(document.querySelector("#results").value);
}

function deleteLast() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.slice(0, -1);
}
