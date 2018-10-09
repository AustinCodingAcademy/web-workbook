
document.addEventListener("DOMContentLoaded", function(event) {
  // You code here

  // Alert the user to how many list items there are on the page
  // * first i want to select all of the "li" on the page
  
});

var liList = document.getElementById("list").getElementsByTagName("li");
// * next i want to alert the user with a popup that says "there are X number of items on the page"
var shopItems = liList.length

alert("There are " + shopItems + " items on this page");

// Add a <h2> to the page under the title that says "Youhave_items in your shopping cart'. Do not use html to dothis. Use JavaScript. 
let div = document.createElement('h2');
div.innerHTML = "This is an h2 tag";
document.body.appendChild(div);
// Create the ability to add more items to the list usingJavaScript. 

var inputText = document.getElementById("txt"),
  items = document.querySelectorAll("#list li"),
  tab = [], index;
// get the selected li index with an array
// populate array with li values
for(var i = 0; i < items.length; i++) {
  tab.push(items[i].innerHTML);
}
// get li index onclick
for(var i = 0; i < items.length; i++) {
  items[i].onclick = function() {
    index = tab.indexOf(this.innerHTML);
    console.log(this.innerHTML + " INDEX = " + index);
    // set the selected li value into put text
    inputText.value = this.innerHTML;
  };
}
function refreshArray() {
  tab.length = 0;
  items = document.querySelectorAll("#list li");
  for(var i = 0; i < items.length; i++){
    tab.push(items[i].innerHTML);
  }
}
function addLI() {

  var listNode = document.getElementById("list");
  textNode = document.createTextNode(inputText.value);
  liNode = document.createElement("LI");
  liNode.appendChild(textNode);
  listNode.appendChild(liNode);
  refreshArray();
  // add event to the new LI
  liNode.onclick = function() {
    index = tab.indexOf(liNode.innerHTML);
    console.log(liNode.innerHTML + " INDEX = " + index);
    inputText.value = liNode.innerHTML;
  }
}
function editLI() {
  // edit the selected li using input text
  items[index].innerHTML = inputText.value;
  refreshArray();
}
function deleteLI() {
  items[index].parentNode.removeChild(items[index]);
  inputText.value = "";
}

/* var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span); 
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.display = "none";
  }
}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("shopcartul").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNote("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
} */
// Create the ability to remove an item from the shoppingcart using javascript.
// Extension Chanllenge: Create the ability to display apicture of the product when the mouse hovers over the nameof the project. 