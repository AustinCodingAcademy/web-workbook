'use strict';

document.addEventListener('DOMContentLoaded', function(event) {
})

function addItem(){
  var ul = document.getElementById('dynamic-list');
  var item = document.getElementById('item');
  var li = document.createElement('li');
  li.setAttribute('id',item.value);
  li.appendChild(document.createTextNode(item.value));
  ul.appendChild(li);

  // alert new items in cart
  alert('Number of Items ' + document.getElementsByTagName('li').length);
  var SubTitle = document.getElementById('UpdatedItems');
  SubTitle.innerHTML = document.getElementsByTagName('li').length;
}

function removeItem(){
  var ul = document.getElementById('dynamic-list');
  var item = document.getElementById('item');
  var item = document.getElementById(item.value);
  ul.removeChild(item);

  // alert new items in cart
  alert('Number of Items ' + document.getElementsByTagName('li').length);
  var SubTitle = document.getElementById('UpdatedItems');
  SubTitle.innerHTML = document.getElementsByTagName('li').length;
}
