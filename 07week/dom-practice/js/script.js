'use strict';

document.addEventListener("DOMContentLoaded", function(event) {

  // Alerts the user of number of items in the list
    var listOfItems = document.getElementsByTagName('li');
    alert("Number of Items: " + listOfItems.length);

  //Adds a heading with number of items in list
    var newElement = '<h2 id="list_total">You have ' + listOfItems.length + ' items in your shopping cart.</h2>';
    var notice = document.getElementById('title');
    notice.insertAdjacentHTML('afterend', newElement);

  //Creates the array for the dropdown remove items option
  var node, list;
    list = [];
    for (node = document.getElementById('myList').firstChild; node; node = node.nextSibling) {
          if (node.nodeType == 1 && node.tagName == 'LI') {
              list.push(node.innerHTML);
          }
      }
  var addDropItem = document.getElementById('userInputRemove');
    for (var i = 0; i < list.length; i++) {
      var option = document.createElement("OPTION");
      var txt = document.createTextNode(list[i]);
      option.appendChild(txt);
      addDropItem.insertBefore(option,addDropItem.lastChild);
      }
});

//appends items to the shopping list
function addItems() {
  var newItem = document.getElementById('userInputAdd').value;
  var node = document.createElement("li");
  var textnode = document.createTextNode(newItem);
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
  updateList_Add();
  listArray();
}

//updates the popup and the h2 list_total element
function updateList_Add() {
  var remove = document.getElementById("list_total");
  remove.parentNode.removeChild(remove);
  var listOfItems = document.getElementsByTagName('li');
  alert("Number of Items: " + listOfItems.length);

  //Adds a heading with number of items in list
  var newElement = '<h2 id="list_total">You have ' + listOfItems.length + ' items in your shopping cart.</h2>';
  var notice = document.getElementById('title');
  notice.insertAdjacentHTML('afterend', newElement);
}


function listArray() {
  var node, list;
    list = [];
    for (node = document.getElementById('myList').firstChild; node; node = node.nextSibling) {
          if (node.nodeType == 1 && node.tagName == 'LI') {
              list.push(node.innerHTML);
          }
    }

  console.log(list);
  var addDropItem = document.getElementById('userInputRemove');
  for (var i = list.length - 1; i < list.length; i++) {
    var option = document.createElement("OPTION");
    var txt = document.createTextNode(list[i]);
    option.appendChild(txt);
    addDropItem.insertBefore(option,addDropItem.lastChild);
  }
}

/* Removal Code but does not work as inteneded
function removeItems(){
  var node = document.getElementById("myList");
  node.removeChild(node.lastChild);
  console.log(node);
  updateList_Add();
  listArray();
}


/* Experiment code to deal with removal issues

var node, list;
    list = [];
    for (node = document.getElementById('myList').firstChild; node; node = node.nextSibling) {
          if (node.nodeType == 1 && node.tagName == 'LI') {
              list.push(node.innerHTML);
          }
      }
  var x = document.getElementById('userInputRemove').value;
  var y = document.getElementById('myList');


  if (a > -1) {
    list.splice(a, 1);
  }

  console.log(x);
  var hh = list.indexOf(x);
  console.log(hh);
  if (y.hasChildNodes()) {
    y.removeChild(y.childNodes[0]);
  }

  console.log(y);


}*/
