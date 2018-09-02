
  let h1 = document.querySelector('h1');
  h1.insertAdjacentHTML('afterend', '<h2> You have ' + countItems() + ' in your cart!</h2>');
  function countItems(){
    let listItems = document.querySelectorAll('li').length;
    return listItems;
  }
  function addItem(){
    if (document.querySelector("#itemEntry") !== ""){
    let unList = document.querySelector('ul');
    let item = document.querySelector('#itemEntry').value;
    let desc = document.querySelector('div');
    unList.insertAdjacentHTML('beforeend', '<li>'+ item + '</li>');
    document.querySelector('h2').innerHTML = 'you have ' + countItems() + ' in your cart!';
    document.querySelector("#itemEntry").value = "";
    desc.insertAdjacentHTML('beforeend', '<p> stuff stuff stuff</p>');
  }
  }
  function removeItem(){
    document.querySelector('ul li:last-child').remove();
    document.querySelector("#itemEntry").value = "";
    document.querySelector('h2').innerHTML = 'you have '
   + countItems() + ' in your cart!';
   document.querySelector('div p:last-child').remove();
  }
