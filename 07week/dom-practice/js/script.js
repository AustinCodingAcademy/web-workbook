'use strict';
document.addEventListener('DOMContentLoaded', () => {
  alert("You have " + document.querySelectorAll("li").length + " items in the list");
  document.querySelector("h1").insertAdjacentHTML("afterend", "<h2> You have "+ document.querySelectorAll("li").length + " items in your shopping cart</h2>");
  document.querySelector("ul").insertAdjacentHTML("afterend",'<input type="text" id="textBox"/><input type="submit" onclick="additem()")/>')
  addremovebuttons();
});


function addremovebuttons() {
  let itemcontainer=document.querySelectorAll("li");
  for (let i=0; i<itemcontainer.length; i++){
  itemcontainer[i].insertAdjacentHTML("beforeend", "<input type='submit' value='x' class='removebutton' onclick='deleteitem("+i+")'/>");
  }
}

function deleteitem(location){
let itemcontainer=document.querySelectorAll("li");
itemcontainer[location].remove();
reindexbuttons();
}

function additem(){
let itemname = document.querySelector("#textBox").value;
document.querySelector("ul").insertAdjacentHTML("beforeend", "<li>" + itemname + "</li>");
addoneremovebutton();
}

function addoneremovebutton() {
  let itemcontainer=document.querySelectorAll("li");
  document.querySelector("ul").lastChild.insertAdjacentHTML("beforeend", "<input type='submit'class='removebutton' value='x'  onclick='deleteitem("+(itemcontainer.length-1)+")'/>" );
}

function reindexbuttons() {
  let allremovebuttons=document.querySelectorAll(".removebutton");
  for (let i=0; i<allremovebuttons.length; i++){
    allremovebuttons[i].insertAdjacentHTML("afterend", "<input type='submit'class='removebutton' value='x'  onclick='deleteitem("+i+")'/>" );   
    allremovebuttons[i].remove();
  }
}