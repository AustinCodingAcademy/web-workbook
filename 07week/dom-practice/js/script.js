'use strict';

// Add a <h2> to the page under the title that says 'You have _ items in your shopping cart'. Do not use html to do this. Use JavaScript.
// Create the ability to add more items to the list using JavaScript.
// Create the ability to remove an item from the shopping cart using javascript.
// Extension Challenge: Create the ability to display a picture of the product when the mouse hovers over the name of the project.
var listItems = document.querySelectorAll('li');
var addH2 = document.createElement('h2')
var content = document.createTextNode("you have _ items in your shopping cart"); 
addH2.appendChild(content)
var shoppingElement = document.querySelector('h1')
console.log('shoppingElement:', shoppingElement)
shoppingElement.appendChild(addH2)
// alert('there are' + listItems.length + 'list items on your page')

var listInput = document.createElement('input')
var inputDiv = document.createElement('div')
inputDiv.appendChild(listInput)
var h2Element = document.querySelector('h2')
h2Element.appendChild(inputDiv)
var button = document.createElement('button')
inputDiv.appendChild(button)
var buttonText = document.createTextNode('Add List Item')
button.appendChild(buttonText)
// inputDiv.onclick = 'addListItem()'
button.onclick = 'addListItems()'
function addListItem () {
  var getInput = document.querySelector('input')
  var inputValue = getInput.value
  var ulList = document.querySelector('ul')
  var createdLi = document.createElement("li")
  var liText = document.createTextNode(inputValue)
  console.log("hello!")
}
button.setAttribute("onclick" , 'addListItem()');