'use strict';

function primeCheck() {
  var input = document.getElementById("primeField").value;
  let prime = true;
  for (let i = 2; i <= Math.sqrt(input); i++) {
    if (input % i == 0) {
      prime = false;
      break;
    }
  }
  alert(prime);
}

function palindromeCheck() {
  var pCheck = document.getElementById("primeField").value;
  // var pLength = pCheck.length;
  var pArray = pCheck.split();
  var pReverse = pArray.reverse();

  if (pArray === pReverse) {
    alert("Yes!")
  } else {
    alert("No.")
  }
}
