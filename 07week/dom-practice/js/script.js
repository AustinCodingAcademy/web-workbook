
  let h1 = document.querySelector('h1');
  h1.insertAdjacentHTML('afterend', '<h2> You have ' + countItems() + ' in your cart!</h2>'); //this adds an h2 after the h1
  function countItems(){ //this adds all items in the UL for a total in the h2
    let listItems = document.querySelectorAll('li').length;
    return listItems;
  } 
  function addItem(){ //this is invoked when user clicks on "add item" button
    if (document.querySelector("#itemEntry") !== ""){
    let unList = document.querySelector('ul');
    let item = document.querySelector('#itemEntry').value;
    let desc = document.querySelector('div');
    unList.insertAdjacentHTML('beforeend', '<li>'+ item + '</li>'); //adds whatever text was put in item entry as a list item
    document.querySelector('h2').innerHTML = 'you have ' + countItems() + ' in your cart!'; //updates the h2 count
    document.querySelector("#itemEntry").value = ""; //resets the item entry input to blank
    desc.insertAdjacentHTML('beforeend', '<p> stuff stuff stuff</p>'); //adds a description of the added item to the div
  }
  }
  function removeItem(){ //this is invoked when the user clocks on the remove item button
    document.querySelector('ul li:last-child').remove(); //removes the last list item 
    document.querySelector("#itemEntry").value = ""; //this resets the item entry to blank
    document.querySelector('h2').innerHTML = 'you have '
   + countItems() + ' in your cart!'; //this updates the h2 after an item is removed
   document.querySelector('div p:last-child').remove(); //this removes the last p in the div when the li is removed
  }
