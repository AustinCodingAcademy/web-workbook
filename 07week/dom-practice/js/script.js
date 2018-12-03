'use strict';

function plusminus_remove() {

  let plusminuscount = document.querySelectorAll('.plus_minus');

  console.log(plusminuscount);
  for (let i = 0; i < plusminuscount.length; i++) {
    plusminuscount[i].remove();
  }
}

function plusminus_add() {

  let cartCount = document.querySelectorAll("li").length;
  let liLoop = document.querySelectorAll('li'), i;

  for (i = 0; i < cartCount; i++) {
    liLoop[i].insertAdjacentHTML('afterbegin', "<a id='plus_" + i + "' class='plus plus_minus' onclick='plusBtn(event)'>+</a>" + "<a id='minus_" + i + "' class='minus plus_minus' onclick='minusBtn(event)'>-</a>");

    liLoop[i].setAttribute("id", "li_" + i)
  }
}

document.addEventListener("DOMContentLoaded", function (event) {

  let cartCount = document.querySelectorAll("li").length;
  let cartText = "You have " + cartCount + " items in your shopping cart";

  alert(cartText);
  document.querySelector("h1").insertAdjacentHTML('afterend', '<h2>' + cartText + '</h2>');

  //insert plus and minus while adding id
  plusminus_add();

});

function plusminus_remove() {

  let plusminuscount = document.querySelectorAll('.plus_minus');

  console.log(plusminuscount);
  for (let i = 0; i < plusminuscount.length; i++) {
    plusminuscount[i].remove();
  }
}

function plusminus_add() {

  let cartCount = document.querySelectorAll("li").length;
  let liLoop = document.querySelectorAll('li'), i;

  for (i = 0; i < cartCount; i++) {
    liLoop[i].insertAdjacentHTML('afterbegin', "<a id='plus_" + i + "' class='plus plus_minus' onclick='plusBtn(event)'>+</a>" + "<a id='minus_" + i + "' class='minus plus_minus' onclick='minusBtn(event)'>-</a>");

    liLoop[i].setAttribute("id", "li_" + i)
  }
}

function plusBtn() {
  
  let plusSelector = event.target.id;
  let liSelector = Number(plusSelector[plusSelector.length - 1]);
  let plusid = "#li_" + liSelector + "";
  let additemprompt = prompt("Add a new item to the list");

  if (additemprompt == null || additemprompt == "") {
    return;
  } else {

    document.querySelector(plusid).insertAdjacentHTML("afterend", "<li>" + additemprompt + "</li>");
    plusminus_remove();
    plusminus_add();
  }
};

function minusBtn() {
  let minusSelector = event.target.id;
  let numSelector = Number(minusSelector[minusSelector.length - 1]);
  let liSelector = "#li_" + numSelector;
  let liRemove = document.querySelector(liSelector);
  console.log(liRemove);
  liRemove.remove();
}