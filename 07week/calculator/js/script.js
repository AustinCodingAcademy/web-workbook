let lastNumber = '';

function addNumber(num) {
  document.querySelector("#results").value += num;
  lastNumber += num;
  console.log(lastNumber);
}

function clearResults() {
  document.querySelector("#results").value = "";
}

function addition() {
  document.querySelector("#results").value += "+";
  lastNumber = '';   //any time someone hits +, it will clear the last Number and then when someone hits the addNumber function, the last number will be set again
}

function subtract () {
  document.querySelector("#results").value += "-";
}

function multiply() {
  document.querySelector("#results").value += "*";
}

function divide() {
  document.querySelector("#results").value += "/";
}

function switchNegPos() {
  let current = document.querySelector("#results").value;
  if (current.substring(0, 1) == '-') {
    document.querySelector("#results").value = current.substring(1, current.length);
  } else {
    document.querySelector("#results").value = '-' + current;
  }
}

// function plusMinus() {
//   document.querySelector("#results").value =
//   document.querySelector("#results").value.replace(lastNumber, '-${lastNumber}');
//	lastNumber = lastNumber * -1;
// }

function equals() {
  document.querySelector("#results").value = eval(document.querySelector("#results").value);
}

function deleteLast() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.slice(0, -1);
}
