'use strict';


document.addEventListener("DOMContentLoaded", function(event) {

    var listOfItems = document.getElementsByTagName('li');
    alert('Number of items ' + listOfItems.length);
})

  function addItem(){
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var li = document.createElement("li");
    li.setAttribute('id',candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);

    // alert new items in cart
    alert("Number of Items " + document.getElementsByTagName("li").length);
    var SubTitle = document.getElementById('UpdatedItems');
    SubTitle.innerHTML = document.getElementsByTagName("li").length;
}

function removeItem(){
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var item = document.getElementById(candidate.value);
    ul.removeChild(item);

    // alert new items in cart
    alert("Number of Items " + document.getElementsByTagName("li").length);
    var SubTitle = document.getElementById('UpdatedItems');
    SubTitle.innerHTML = document.getElementsByTagName("li").length;


}
