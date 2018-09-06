'use strict';

document.addEventListener("DOMContentLoaded", function(event) {

 function addItems () { 
  let moreItems = ["The Sparrow by Mary Russell", "Code by Charles Petzold", "ATP Luminometer"]; 
  for (let i = 0; i < moreItems.length; i ++) {
    let itemtext = moreItems[i];
    let listItems = document.createElement("li");                 
    listItems.innerHTML = itemtext;         
    document.querySelector("ul").appendChild(listItems);
  }
 }

 addItems();

 


function deleteItem (){
  let remove = document.querySelector('ul');
  remove.removeChild(remove.querySelector('li'));
  }

deleteItem ();
deleteItem ();


let list = document.querySelectorAll('li').length; 
alert("You have " + list + " items in your shopping cart");
document.querySelector("h1").insertAdjacentHTML("afterend", "<h2>1</h2>");
document.querySelector("h2").innerHTML = "You have "+ list + " items in your shopping cart";

  



    

  


});






