

  function addNumber(num) {
    document.getElementById("results").value += num;
  }
  
  function clearResults() {
    document.getElementById("results").value = "";
  }
  
  function equals() {
    document.getElementById("results").value = 
      eval(document.getElementById("results").value);
  }
  
  function posNeg() {
    document.getElementById("results").value *= "-1";
  }

  function deleteLast() {
    let current = document.getElementById("results").value;
    document.getElementById("results").value = current.substring(0,current.length-1);
  }








