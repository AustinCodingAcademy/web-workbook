'use strict';
// 1.Create a JS file and write code the will do the following:
// 2.Alert the user to how many list items there are on the page.
// 3.Add a <h2> to the page under the title that says 'You have _ items in your shopping cart'. Do not use html to do this. Use JavaScript.
// 4.Create the ability to add more items to the list using JavaScript.
// 5.Create the ability to remove an item from the shopping cart using javascript.
// Extension Challenge: Create the ability to display a picture of the product when the mouse hovers over the name of the project.
console.log('i need some gum')
var listItems = document.querySelectorAll('li'); 
//create new element
var addH2 = document.createElement('h2')
//creates text for element
var content = document.createTextNode("you have " + listItems.length + " items in your shopping cart")
//grabs h2 element and appends
addH2.appendChild(content)
// get element by tag: h1
  var shoppingElement = document.querySelector('h1')
  //appends addh2 under (as child) shoppingElement
  shoppingElement.appendChild(addH2)
// alert('there are ' + listItems.length + ' list items on your page')

//.3 create input, user types list item, submit, add to list
var inputDiv = document.createElement('div')
//create input
var listInput = document.createElement('input')
//put input inside div
inputDiv.appendChild(listInput)
// grab element we want to place div under
var h2Element = document.querySelector('h2')
// append div to h2 elemnt
h2Element.appendChild(inputDiv);
//create buttokn
var button = document.createElement('button')
//append button to inputDiv 
inputDiv.appendChild(button)

var buttonText = document.createTextNode('Add list item')
// append text to button
button.appendChild(buttonText)
// append text in button
// button.onclick = 'addListItems()'
function addListItem () {
  var getInput = document.querySelector('input')
  var inputValue = getInput.value
  var createdLi = document.createElement('li')
  var liText = document.createTextNode(inputValue)
  createdLi.appendChild(liText)
  ulList.appendChild(createdLi)
  getInput.value = ''
  console.log('inputValue:', inputValue)
}

button.onclick = 'addListItem'

button.setAttribute("onClick" , 'addListItems()')
