'use strict';

$(document).ready(function() {
  // Put app logic in here
  //make an x and a o function
  let stringToAdd ="x";

  $('data-cell').click(function() {
    addString(stringToAdd, $(this));
    didIWin();
  });
});

function addString(str,elem) {
  console.log("string in element: ", elem.text());
  if (!elem.text()) {
    elem.text(str);
    if (stringToAdd === "x") {
      stringToAdd = "o";
    }else {
      stringToAdd ="x";
    }
  }
}
function didIWin() {
  console.log("winner");
  let rowWin = checkRow();
  let columnWin = checkColumn();
  
}





































});
