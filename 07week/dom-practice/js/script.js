'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
console.log("The page has been loaded");
});

function sayHI (){
  console.log("SayingHi");
}

function additem(){
  console.log("I am in add item")
  var newitem = document.createElement("Li");
  var text= document.createTextNode("water");
  newitem.appendChild(text);


var thelist= document.getElementById("mylist");
thelist.appendChild(newitem);
console.log("end of addLi")

}
