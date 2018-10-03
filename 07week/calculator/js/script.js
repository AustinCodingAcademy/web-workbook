'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  // You code here
});

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

function equals() {
  document.querySelector("#results").value = eval(document.querySelector("#results").value);
}

function deleteLast() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.slice(0, -1);
}

function switchSign() {
  document.querySelector("#results").value = document.querySelector("#results").value * -1;
  
}

function exponent() {
  document.querySelector("#results").value = document.querySelector("#results").value * document.querySelector("#results").value;
}

function squareRoot() {
  document.querySelector("#results").value = Math.sqrt(document.querySelector("#results").value);
}

function percentage() {
  document.querySelector("#results").value = Math.round(document.querySelector("#results").value);
}

function addDecimal(){
  document.querySelector("#results").value += ".";
}

function isNumberKey(evt){
  var charCode = (evt.which) ? evt.which : event.keyCode
  if (charCode > 31 && (charCode != 46 &&(charCode < 48 || charCode > 57)))
  {
    return false;
  }     
  return true;
}
