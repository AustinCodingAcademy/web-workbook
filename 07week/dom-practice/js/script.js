'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  // You code here
  //alert(there are[document.getElementByTagName(li) length] on the page)
  //var listNumber = document.getElementsByTagName("li").length;
  let listNumber = $("li").length;

  alert('There are ' + listNumber + ' items on the page');


  //add a <h2> to the page that says "You have _ items in your cart" where "_" is the number in the cart.

  // var node = document.createElement("h2");
  // var textnode = document.createTextNode('There are ' + listNumber + ' items in your cart');
  // node.appendChild(textnode);
  // document.getElementById('cartTitle').appendChild(node);

  $("h1").after('<h2>There are ' + listNumber + ' items in your cart</h2>')

  //Create the ability to add more items to the list using javascrips.

  // let addProduct = document.querySelectorAll(".addProduct");
  // for (let i = 0; i < addProduct.length; i++) {
  //   addProduct[i].onclick = function(e) {
  //     let myLi = document.createElement("li");
  //     let t = document.createTextNode(e.target.innerHTML);
  //     myLi.appendChild(t);
  //     let myList = document.getElementsByTagName('ul')[0];
  //     myList.appendChild(myLi);
  //   }
  // }

  $(".addProduct").click(function() {
    let newItem = $("<li class='newLi'>" + $(this).text() + "</li>");
    $("ul").append(newItem);
  });

  // Creat the ability to remove an item from the shapping cart using javascript.

  $("li").click().remove(this);

});