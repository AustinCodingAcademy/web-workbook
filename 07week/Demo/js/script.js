'use strict';
document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  var paragraphs = document.querySelectorAll("p");
  console.log("<p> elements with class subPara: " + paragraphs.length);

  for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = 'green'
  }

  //paragraphs[0].style.color = 'green'      all of this is the same as above
  // paragraphs[1].style.color = 'green'
  // paragraphs[2].style.color = 'green'
  // paragraphs[3].style.color = 'green'
  // paragraphs[4].style.color = 'green'
});
