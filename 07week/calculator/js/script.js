function addNumber(input){
  document.getElementById("results").value+=input;
}

function clearResults(){
  document.getElementById("results").value = '';
}

function operation(operand){
  document.getElementById("results").value += operand;
}

function equals(){
  document.getElementById("results").value = eval(document.getElementById("results").value);
}

function deleteLast(){
  let current = document.getElementById("results").value;
  document.getElementById("results").value = current.substring(0,current.length-1);
}

function changeSign(){
  document.getElementById("results").value = -1 * eval(document.getElementById("results").value);

}