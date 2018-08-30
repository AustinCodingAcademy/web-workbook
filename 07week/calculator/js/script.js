// 'use strict';

// document.addEventListener("DOMContentLoaded", function(event) {
//   // You code here
// });
function addNumber(num) {
  document.getElementById("results").value += num;
}
function subtraction(){
  document.getElementById("results").value += "-";
}
function division(){
  document.getElementById("results").value += "/";
}
function addition(){
  document.getElementById("results").value += "+";
}
function multiply(){
  document.getElementById("results").value += "*";
}
function equals(){
  document.getElementById("results").value = eval(document.getElementById("results").value);
}
function clr() {
  document.getElementById("results").value = "";
}
function delet(){
  let current = document.getElementById("results").value;
  document.getElementById("results").value = current.substring(0,current.length-1);
}
function plusMinus() {
  let current = document.getElementById("results").value;
  current *= -1;
  document.getElementById("results").value = current;
}
