'use strict';
document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let list1 = document.getElementsByTagName('li');
  console.log(list1.length);

  let ins = document.getElementsByTagName('h1');
  ins.insertAdjacentHTML('afterend', 'You have _ items in your cart');
});