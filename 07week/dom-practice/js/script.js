'use strict';
document.addEventListener('DOMContentLoaded', () => {
alert (document.querySelectorAll ("li").length);

document.querySelector("h1").insertAdjacentHTML("afterend","<h2>You have " + document.querySelectorAll("li").length + " items in your shopping cart </h2>");

document.querySelector("ul").insertAdjacentHTML("afterend", "<input id='enterText' type='text' value=''>" )
document.querySelector("input").insertAdjacentHTML('afterend', "<input class='submitButton' type='submit' value='Add Item' onClick=addItem()>")
reindexDeleteButtonsHack();


});
 