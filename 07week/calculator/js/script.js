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

  function equals() {
    document.querySelector("#results").value = eval(document.querySelector("#results").value);
  }

  function deleteLast() {
    let current = document.querySelector("#results").value;
    document.querySelector("#results").value = current.slice(0, -1);
  }

  function minus() {
    document.querySelector("#results").value += "-";
  }

  function times() {
    document.querySelector("#results").value += "*";
  }

  function div() {
    document.querySelector("#results").value += "/";
  }

  // function posNeg() {
  //     if  (document.querySelector("#results").value = "-" + document.querySelector("#results");)
  //   }
  // }
