'use strict';

$(document).ready(function()  {

  //grabbing the picture of the llama
  let llamaContainer = $('div.llama-container');
  let llama = llamaContainer.children();

  // creating a function to make the llama bounce on click
  $(function() {
    llama.on('click', function() {
      $(this).animate( {
        paddingBottom: '+= 200'
      });
    });
  });

})
