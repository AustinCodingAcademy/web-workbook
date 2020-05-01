'use strict';
document.addEventListener("DOMContentLoaded", function(event) {
  let list = document.getElementsByTagName("li");
  let title = document.querySelector("h1");
  let newlist = document.querySelector('#lastitem');
  title.insertAdjacentHTML('afterend', '<h2>You have ' + list.length + ' items in your shopping cart</h2>');
  newlist.insertAdjacentHTML('afterend', '<button>Add Items HERE</button>');
});
$(document).ready(function(){
    $("li").remove();});
