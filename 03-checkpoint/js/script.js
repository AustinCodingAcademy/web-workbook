'use strict';

// set variable
let money = 0;

//Click Function
function oneClick(number) {
  money = money + number;
  document.querySelector('#money').innerHTML = money;
}
