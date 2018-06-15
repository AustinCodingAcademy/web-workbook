'use strict'

function countlist(){
  console.log("i am in count list");
  var li_list= document.querySelectorAll("li");
  for (var i=0; i<li_list.length; i++){
    console.log (li_list[i]);
  }
}

function addItem(item){
  var myDiv= document.createElement("div");
  myDiv.innerHTML ="<h2>"+item+"</h2>";
  var theBody= document.getElementById("body");
  theBody.appendChild(myDiv);
}

countlist();
