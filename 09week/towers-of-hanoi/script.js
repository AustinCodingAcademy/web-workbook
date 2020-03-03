'use strict';

$(document).ready(function() {
  let col = null;
  let blocksize = null;
  let child = null;
  let childString = null;
  let blocksizeString = null;
  //console.log(' function blocksize' + blocksize + 'child' + child);
  $('[data-stack]').click(function() {
    console.log('child', $(this).children().last().attr("data-block"));
    childString = $(this).children().last().attr("data-block");
    child = Number(childString);
    if (col) {
      console.log('first if blocksize' + blocksize + 'child' + child);
      if (blocksize > child) {
        console.log('alert' + blocksize + 'child' + child);
        //console.log('bad move');
        alert("Bad Move, Try again.");
      } else {
        console.log('first else blocksize' + blocksize + 'child' + child);
        $(this).append(col);
        checkWin();
        
        col = null;
      }

    } else {

      col = $(this).children().last().detach();
      blocksizeString = $(col).attr("data-block");
      blocksize = Number(blocksizeString);

      console.log('second else blocksize' + blocksize + 'child' + child);
      //console.log('col', col);
      console.log('blocksize', blocksize);
      console.log('block moved');
    }
  });
  $('#reset').click(function(){
    myFunction();
  });

  function myFunction() {
    location.reload();

  }

  function checkWin() {
    if ($('[data-stack=3]').children().length === 4) {
      alert("You win!");
    }
  }
});
