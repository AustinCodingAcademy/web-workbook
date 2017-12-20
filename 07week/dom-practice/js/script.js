'use strict';

// Alert the user to how many list items there are on the page.

var myNodelist = document.querySelectorAll("li");

alert("list items on this page " + myNodelist.length);


//add h2 underneath h1

var headingTwo = document.createElement("h2");
var node = document.createTextNode("You have ___ items in your cart!");
headingTwo.appendChild(node);

var element = document.getElementById("listy");
var child = document.getElementById("list");
element.insertBefore(headingTwo, child);

//attempt at adding items to list

function addItem(){
        var li = document.createElement("LI");
        var input = document.getElementById("add");
        li.innerHTML = input.value;
        input.value = "gjgkfk";

        document.getElementById("faves").appendChild(li);
    }
