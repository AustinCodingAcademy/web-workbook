'use strict'

$(document).ready(function(){

  var newelement = document.createTextNode('Manipulating the DOM!');
  document.body.appendChild(newelement);
})
/*

   var list = document.getElementsByTagName('ol');
   var message = 'this page has' + list[0].children.length + 'list items';


});



   var newelement = document.createElement('h1');
    newelement.innerHTML = 'Manipulating the DOM!';
    document.body.appendChild(newelement);

})


/*
    -Alert the user to how many list items there are on the page.

    -Add a title to the page that says 'Manipulating the DOM!'. Do not use html to do this. Use JS.

    -Add 'Fifth List Item' to the list.

    -Remove 'Paragraph 4'.

*/
