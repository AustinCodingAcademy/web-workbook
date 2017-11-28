'use strict';

document.addEventListener("DOMContentLoaded", function(event) {

    var listOfItems = document.getElementsByTagName('li');

    alert('Number of items ' + listOfItems.length);

    var subtitle = '<h2>You have ' + listOfItems.length + ' items in your shopping cart</h2>';

    var d1 = document.getElementById('title');
    d1.insertAdjacentHTML('afterend', subtitle);


});



function addItem() {
  var newitem = prompt ('Enter new item');
  //format my newitem as a list item element
  newitem = '<li>' +newitem + '</li>';
  var list = document.getElementById('list');
  var listItem = list.lastElementChild;
  listItem.insertAdjacentHTML('afterend', newitem);
}

//recalculate the items in the list
funchtion subtitle() {
  var listOfItems = document.getElementsByTagName('li');
  alert('Number of items ' + listOfItems.length);
  var subtitleText = '<h2 id="subtitle">You have ' + listOfItems.length + ' items in your shopping cart</h2>';

  var d1 = document.getElementById('title');
  var subtitlePresent = document.getElementById('subtitle');
  if (subtitlePresent == ""){
    d1.insertAdjacentHTML('afterend', subtitleText);
  } else {
    subtitlePresent.innerHTML = subtitleText;
  }


}


//    var title = document.getElementsByTagName('h1');

//    title += '<h2>You have ' + listOfItems.length + ' items in your shopping cart</h2>';
