'use strict';

document.addEventListener("DOMContentLoaded", function(element) {  
    let displayCartQty = document.querySelector('h1');
    displayCartQty.insertAdjacentHTML('afterend', '<h2>You have ' + cartQty() + ' items in your shopping cart.</h2>');
});

// counts number of <li> items inside the first <ul> tag and is called to update when adding or removing items from cart
function cartQty() {
    let listItems = document.getElementsByTagName('li').length;
    return listItems;
}

// adds items to cart
function addToCart() {
    if (document.querySelector("#itemEntry").value !== "") {
        let width = (Math.floor(Math.random() * 50) + 200);
        let height = (Math.floor(Math.random() * 50) + 200);
        let item = document.querySelector("#itemEntry").value;  //stores the string value from the input field
        let product = document.querySelector('ul');     //sets the destination for insertAdjacentHTML
        product.insertAdjacentHTML('beforeend', '<li class="cartItem">' + item + '<img src="https://loremflickr.com/' + width + '/' + height + '/' + item + '" class="prodImg" alt="' + item + '" /></li>');   //inserts the <li> tag and string from 'item' var
        document.querySelector("#itemEntry").value = "";    //clears the itemEntry field
        document.getElementById('removeButton').disabled = false;   //clears 'false' from .disabled on 'removeButton' id
        document.querySelector('h2').innerHTML = 'You have ' + cartQty() + ' items in your shopping cart.';     //updates the carty qty
    }
}

// removes items from the cart
function removeFromCart() {
    if (document.getElementsByTagName('li').length === 0) {
        document.getElementById('removeButton').disabled = true;
    } else {
            document.querySelector('ul li:last-child').remove();
            document.querySelector('h2').innerHTML = 'You have ' + cartQty() + ' items in your shopping cart.';
    }
}

$(document).ready(() => {

    $('#cart').on('mouseenter','.cartItem',function() {
        $(this).find('.prodImg').show().css('display', 'flex').css('flex-direction', 'column');
    }).on('mouseleave','.cartItem', function() {
        $('.prodImg').hide();
    });

});