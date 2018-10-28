'use strict';
document.addEventListener('DOMContentLoaded', () => {


 document.querySelector("h1").insertAdjacentHTML("afterend","<h2>You have " + document.querySelectorAll("li").length + " items in your shopping cart </h2>");

document.querySelector("ul").insertAdjacentHTML("afterend" , "<input id='enterText' type='text' value=''>");
document.querySelector("input").insertAdjacentHTML("afterend" , "<input class='button'' type='submit' value='Add Item' onclick='addItem()'>");

document.querySelector(".button").insertAdjacentHTML("afterend" , "<input id='enterText2' type='text' value=''>" +"<input class='deleteButton' type='submit' value='Remove Item' onclick='removeItem()'>");


});


function addItem(){
    let newListItem = document.querySelector('input').value;
    document.querySelector('ul').insertAdjacentHTML("beforeend" , "<li>"+ newListItem +"</li>");
    
}

function removeItem(){
    let itemToRemove = document.querySelector('#enterText2').value;
    let allItems = document.querySelectorAll('li');
    for(let i=0; i < allItems.length; i++){
        if (allItems[i].innerText==itemToRemove){
            allItems[i].remove();
        }
    }
}
