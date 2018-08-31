'use strict';

document.addEventListener("DOMContentLoaded", function() {  
    let displayCartQty = document.querySelector('h1');
    displayCartQty.insertAdjacentHTML('afterend', '<h2>You have ' + cartQty() + ' items in your shopping cart.</h2>');
});

let increaseCart = 0;

function addToCart() {
    if (document.getElementById("itemEntry").value !== "") {
        let item = document.getElementById("itemEntry").value;
        let product = document.querySelector('ul');
        product.insertAdjacentHTML('beforeend', '<li>' + item + '</li>');
        document.getElementById("itemEntry").value = "";
        increaseCart++;
    }
}

function cartQty() {
    let listItems = document.getElementsByTagName('li').length;
    return listItems;
}