'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
    // You code here
    var listOFItems = document.getElementsByTagName('li');
    prompt('Number of items'+ listOFItems.length);

    // var subtitle = document.getElementsByTagName('h1');
    // title += '<h2>You have '+listOFItems.length+'items in your shopping cart</h2>';

    var subtitle = '<h2>You have' + listOFItems.length + 'items in your shopping cart</h2>';
    var d1 = document.getElementById('title');
    d1.insertAdjacentHTML('afterend', subtitle);
});

  function addItem(){
    var ul = document.getElementById('list')
    var il = document.createElement('li')
    li.apendChild(li);
  }
   function removeItem(){
     var ul = document.getElementById('list')
     var li = document.removeElement('li')
     li.removeChild(li);
   }

// function addItem(){
//   var newitem = prompt('Enter new item');
//   newitem = '<li>' + newitem + '</li>';
//   var list = document.getElementById('list');
//   var listItem = list.lastElementChild;
//   list.insertAdjacentHTML('afterend', newitem)
//
//   subtitle();
// }
//   function subtitle(){
//     var listOfitems = document.getElementsByTagName()
//     var subtitle = '<h2>You have' + listOFItems.length + 'items in your shopping cart</h2>';
//     var d1 = document.getElementById('title');
//     var subtitlePresent = document.getElementById('subtitle')
//     if(subtitlePresent==""){
//     d1.insertAdjacentHTML('afterend', subtitle);
//     }
//     else{
//     subtitlePresent.innerHTML = subtitle;
//     }
//   }
