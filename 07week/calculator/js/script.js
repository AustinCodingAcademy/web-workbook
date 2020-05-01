// 'use strict';

// document.addEventListener("DOMContentLoaded", function(event) {
//   // You code here
// });

function addValue(num) {
  document.querySelector("#screen").value += num;

}

function addOp(num) {
  document.querySelector("#screen").value += num;
  document.querySelector("#screen").value = eval(document.querySelector("#screen").value);
}

function clearResults() {
  document.querySelector("#screen").value = "";
}

function deleteLast() {
  let current = document.querySelector("#screen").value;
  document.querySelector("#screen").value = current.slice(0, -1);
}

function equals() {
  if(!(document.querySelector("#screen").value = eval(document.querySelector("#screen").value))) {
    document.querySelector("#screen").value = "";
   } else {
    document.querySelector("#screen").value = eval(document.querySelector("#screen").value);
  }
} 

function morevalue () {
  let change = (document.querySelector("#screen").value);
  document.querySelector("#screen").value = change*(-1);
}

