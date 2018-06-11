'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("The page has been loaded.");
});
function addLi(item){
  console.log("Item added!");
  var newLi=document.createElement("li");
  newLi.innerHTML="<h2>"+item+"</h2>";
  var deleteSpan=document.createElement("span");
  deleteSpan.innerHTML="<button onclick=&quot;removeLi()&quot;>Delete</button>";
  newLi.appendChild(deleteSpan);
  // var text=document.createTextNode(addLi);
  // newLi.appendChild(text);

  var theList=document.getElementById("mylist")
  theList.appendChild(newLi);
  console.log(newLi);
  increment();
}
function increment(){
  console.log("in increments");
  var node=document.getElementById("count");
  console.log("the node I just fetched is", node);
  var oldValue=parseInt(node.innerHTML);
  console.log("the old value is", oldValue);
  var newValue=oldValue+1;
  console.log("the new value is", newValue);
  node.innerHTML=newValue;
}
function countList(){
  console.log("in the count list");
  var li_list=document.querySelectorAll("#mylist");
  for(var i=0; 1 < li_list.length; i++) {
    console.log(li_list[i]);
  }
}
$(".deleteButtonClass").click(function(){
  console.log("Delete Button Clicked");
});
countList();
