'use strict'
function sayH1(){
  console.log("saying hi");
}

function userIncrement(){
  console.log("inside user Increment");
  var userInput=
  parseInt(document.getElementById('userinput').value);
  increment(userinput);
}

function increment(someWeirdVariableName) {
  console.log ("in increment");
  var node=document.getElementById("mycounter");
  console.log ("the node i just fetched is", node);
  var oldValue= parseInt(node.innerHTML)
}
