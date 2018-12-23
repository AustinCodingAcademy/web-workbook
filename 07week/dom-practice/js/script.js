'use strict';

//On load shows alert and adds plus and minus to any li elements
document.addEventListener("DOMContentLoaded", function (event) {

  let cartCount = document.querySelectorAll("li").length;
  let cartText = "You have " + cartCount + " items in your shopping cart";

  alert(cartText);
  document.querySelector("h1").insertAdjacentHTML('afterend', '<h2>' + cartText + '</h2>');

  plusminus_add();
  addImage();
});

//Removes plus and minus signs so that when a item is added there are no dublicate signes
function plusminus_remove() {

  let plusminuscount = document.querySelectorAll('.plus_minus');

  for (let i = 0; i < plusminuscount.length; i++) {
    plusminuscount[i].remove();
  }
};

//Adds new plus and minus sign to each li element and adds id and class names
function plusminus_add() {

  let cartCount = document.querySelectorAll('li').length;
  let lastCount = cartCount + 1;
  let liLoop = document.querySelectorAll('li'), i;

  for (i = 0; i < cartCount; i++) {
    liLoop[i].insertAdjacentHTML('afterbegin', "<a id='plus_" + i + "' class='plus plus_minus' onclick='plusBtn(event)'>+</a>" + "<a id='minus_" + i + "' class='minus plus_minus' onclick='minusBtn(event)'>-</a>");

    liLoop[i].setAttribute("id", "li_" + i);
    liLoop[i].addEventListener("mouseover", imageHover);
    liLoop[i].addEventListener("mouseout", image_hide);
  }
  liLoop[0].insertAdjacentHTML('beforebegin', "<a id='plus_first' class='plus plus_minus' onclick='plusBtn(event)'>+</a>");
};

//Adds functionality to plus button
function plusBtn() {
  
  let plusSelector = event.target.id;
  let liSelector = Number(plusSelector[plusSelector.length - 1]);
  let plusid = "#li_" + liSelector;
  let additemprompt = prompt("Add a new item to the list");

  if (additemprompt == null || additemprompt == "") {
    return;
  }else if ( plusSelector == "plus_first") {
    document.querySelector('#'+plusSelector).insertAdjacentHTML("afterend", "<li>" + additemprompt + "</li>");
    plusminus_remove();
    plusminus_add();  
    image_remove()
    addImage();
  } else {
    document.querySelector(plusid).insertAdjacentHTML("afterend", "<li>" + additemprompt + "</li>");
    plusminus_remove();
    plusminus_add();
    image_remove()
    addImage();
  }
};

//Deletes li element
function minusBtn() {
  let minusSelector = event.target.id;
  let numSelector = Number(minusSelector[minusSelector.length - 1]);
  let liSelector = "#li_" + numSelector;
  let liRemove = document.querySelector(liSelector);

  liRemove.remove();
};

function addImage() {

  let liCount = document.querySelectorAll('li');

  let imageGeneric = "https://source.unsplash.com/150x75/?"
  
  for (let i = 0; i < liCount.length; i++) {
    let liText = liCount[i].textContent
    document.querySelector('#li_'+i).insertAdjacentHTML("beforeend", "<img class='imageclass' id='image_" + i+ "' src=" + imageGeneric + liText + " style='display:none'>");
  }
};

function imageHover(event){

  let imageSelector = event.target.id;
  let numSelector = Number(imageSelector[imageSelector.length - 1]);
  let imgSelector = "#image_" + numSelector;
  document.querySelector(imgSelector).style.display = "block";

};

function image_hide(event){

  let imageSelector = event.target.id;
  let numSelector = Number(imageSelector[imageSelector.length - 1]);
  let imgSelector = "#image_" + numSelector;
  console.log(imgSelector);
  document.querySelector(imgSelector).style.display = "none";

};

function image_remove() {

  let imageCount = document.querySelectorAll('.imageclass');

  for (let i = 0; i < imageCount.length; i++) {
    imageCount[i].remove();
  }
};
