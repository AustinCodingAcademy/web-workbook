alert("RUN AWAY!!");

document.title = 'Manipulating the DOM!';


'use strict';
document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  var paragraphs = document.getElementsByClassName("subPara");
  console.log("<p> elements with class subPara: " + paragraphs.length);
});




var options = {
  valueNames: [ 'name', 'born' ]
};

var values = [ {
  name: "Martina Elm",
  born: 1986
}];

var userList = new List('users', options, values);

userList.add({
  name: "fifth",
  born: 1983
});
