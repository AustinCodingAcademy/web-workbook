'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  // You code here
});

function sayHi(){
    console.log("Hi!");
}

function addADiv(){
    console.log("I am adding a div!")
}

var zero = 0;

function addLi(){
    console.log("I am in addLi");
    var newLi = document.createElement("LI");
    var text = document.createTextNode("Water");
    newLi.appendChild(text);
    
    var theList = document.getElementById("myList");
    theList.appendChild(newLi);
    console.log("end of addLi");
}

/* function countList(){
    console.log("I am in countlist");
    var li_list = document.querySelectorAll("li");
    for (var i = 0; i < li_list.length; i++){
        console.log(li_list[i]);
    }
}

countList(); */
/*

function increment(){
    console.log("I am increment");
    document.getElementById("total").innerHTML="NEW TEXT!";
}

increment();
*/

/* Below is some great starter code*/
/*
function userIncrement(){
    console.log("inside user increment");
    var userInput = parseInt(document.getElementById('userInput').valueOf);
    increment(userInput);
}

function increment(someWeirdVariableName){
    console.log('in increment');
    var node = document.getElementById("myCounter");
    console.log("the node I just fetched is ", node);
    var oldValue = parseInt(node.innerHTML);
    console.log("the old value is ", oldValue);
    var newValue = oldValue+someWeirdVariableName;
    console.log("the new value is ", newValue);
    node.innerHTML = newValue;
}
*/

function addItem(item){
    var myDiv = document.createElement("div");
    myDiv.innerHTML = "<h2>" +item+"</h2>";
    var theBody = document.getElementById("body");
    theBody.appendChild(myDiv);
}

