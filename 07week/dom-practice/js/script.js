'use strict';

document.addEventListener("DOMContentLoaded", function(event) {

  let cartCount = document.querySelectorAll("li").length;
  let cartText = "You have " + cartCount + " items in your shopping cart";
  
  alert(cartText);
  document.querySelector("h1").insertAdjacentHTML('afterend','<h2>'+cartText+'</h2>');

  //insert plus and minus while adding id
  let liLoop = document.querySelectorAll('li'), i;
  for ( i=0; i<cartCount; i++) {
    liLoop[i].insertAdjacentHTML('afterbegin', "<a id='plus_"+i+"' class='plus plus_minus'>+</a>" + "<a id='minus_"+i+"' class='minus plus_minus'>-</a>");
  }
});

let plusSelector = document.querySelectorAll('.plus');

for (let i=0; i<plusSelector.length; i++){
  let plusSelector = plusSelector[i];
  plusSelector.onclick = function plusbtn(){
    console.log("true");
  }
}

