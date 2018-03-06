'use strict';


let items = document.querySelectorAll("li");
alert('There are ' + items.length + ' list items on this page.');

  // let makeH2 = document.createElement("H2");        // Create a <h2> element
  // let itemCount = document.createTextNode('You have ' + listItems.length + ' items in your shopping cart.'); // Create a text node
  // makeH2.appendChild(itemCount);            // Append the text to <h2>
  // document.body.appendChild(makeH2);

document.querySelector('h1').insertAdjacentHTML('afterend', `
  <h2>You have ${items.length} items in your shopping cart.</h2>
`)

function addItem(){
  let itemName = document.querySelector('input').value
  let itemDescription = document.querySelector('textarea').innerText;
  document.querySelector('ul').insertAdjacentHTML('beforeend', `
    <li>${itemName}</li>
  `)
  document.querySelector('#div').insertAdjacentHTML('beforeend')
}
