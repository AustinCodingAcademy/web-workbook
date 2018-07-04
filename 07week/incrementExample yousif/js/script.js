'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("The page has been loaded");

});

function sayHi(){
  console.log("Saying hi");
}

function userIncrement(){
  console.log("inside user increment");
  var userInput = parseInt(document.getElementById('userInput').value);
  increment(userInput);
}

function increment(someWeirdVariableName){
  console.log('in increment');
  var node = document.getElementById("myCounter");
  console.log("the node i just fetched is ", node);
  var oldValue = parseInt(node.innerHTML);
  console.log("the old value is ", oldValue);
  var newValue = oldValue+someWeirdVariableName;
  console.log("the new value is ", newValue);
  node.innerHTML = newValue;
}





function addLi(){
  console.log("I am in addLi")
  var newLi = document.createElement("LI");
  var text = document.createTextNode("water");
  newLi.appendChild(text);

  var theList = document.getElementById("myList");
  theList.appendChild(newLi);
  console.log("end of addLi")
}
