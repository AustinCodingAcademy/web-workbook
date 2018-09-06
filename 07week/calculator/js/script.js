

  function addNumber(num) {
    document.getElementById("results").value += num;
  }

  function addOperation(num) {
    //if first value in string ==isNan, leave alone //else
    document.getElementById("results").value += num;
  }
  
  function clearResults() {
    document.getElementById("results").value = "";
  }
  
  function equals() {
    if (document.getElementById("results").value == ""){
      document.getElementById("results").value = "";
    } else
    document.getElementById("results").value = 
      eval(document.getElementById("results").value);
  }
  
  function posNeg() {
    // document.getElementById("results").value *= "-1";

    // let firstChild = document.getElementById("results").value;
    // document.getElementById("results").insertBefore('-',firstChild);
    if (document.getElementById("results").value === ""){
      document.getElementById("results").value = "-";
    }else (document.getElementById("results")[0] == "-"){
      document.getElementById("results").value*="-1";
    }
  }
       // document.getElementById("results").shift = document.getElementById("results").value;
    
        // let firstChild = document.getElementById("results")[0];
        // document.getElementById("results").value.insertBefore('-',firstChild);

      //make substring and put the '-' before it
      // document.getElementById("results").value = -1 * document.getElementById("results").value;
   


    // else {
    //   let stringLength = document.getElementById("results").value
    //   for(let i=stringLength.length; i===isNaN; i--){
    //       //insert '-' after NaN
    //   }
    

  

  function deleteLast() {
    let current = document.getElementById("results").value;
    document.getElementById("results").value = current.substring(0,current.length-1);
  }

