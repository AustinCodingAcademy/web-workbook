'use strict';

$(document).ready(function() {

  let $defaultStackOne = $('[data-stack]:eq(0)').children(); //Making a copy of the first stack for the reset

  let $detachedBlock = null; //Block that was clicked
  let $detachedBlockSize = null; //Size of the block clicked

  //Array for each of the stacks
  let $stackOne = [100, 75, 50, 25];
  let $stackTwo = [];
  let $stackThree = [];

  $('[data-stack]').click(function() {
    if ($('#announce-game-won').html() === 'Winner!') {
      return alert("Game Over. Reset to Play Again")
    }

    //Grabbing the stack number that was clicked to append or detach a block
    let $stackNumber = $(this).data('stack');

    //Finding out where the detached block came from by searching the arrays for the detached block size
    if ($detachedBlock) {
      let $detachedBlockFrom = null //Variable for storing which stack a block came from
      let inStack1 = $stackOne.find(function(number) {
        return number === $detachedBlockSize
      })
      let inStack2 = $stackTwo.find(function(number) {
        return number === $detachedBlockSize
      })

      let inStack3 = $stackThree.find(function(number) {
        return number === $detachedBlockSize
      })

      //If the block's value is found in an array, return the array
      if (inStack1) {
        $detachedBlockFrom = $stackOne
      } else if (inStack2) {
        $detachedBlockFrom = $stackTwo
      } else {
        $detachedBlockFrom = $stackThree
      }

      // Conditional staments for each stack
      // We check if the current detached block size is larger than the prevous block size in the array
      // If the detached block size is larger than the previous block size in the array, we display an error
      if ($stackNumber === 1) {
        let previousBlockSize = $stackOne[$stackOne.length - 1]
        if ($detachedBlockSize > previousBlockSize) {
          return alert("Block is too big! Choose another stack.")
        } else {
          if ($detachedBlockSize) {
            let index = $detachedBlockFrom.indexOf($detachedBlockSize)
            $detachedBlockFrom.splice(index, 1); //removes block size from previous array
            $stackOne.push($detachedBlockSize) //Adds the block size to the new array
          }
        }
      } else if ($stackNumber === 2) {
        let previousBlockSize = $stackTwo[$stackTwo.length - 1]
        if ($detachedBlockSize > previousBlockSize) {
          return alert("Block is too big! Choose another stack.")
        } else {
          if ($detachedBlockSize) {
            let index = $detachedBlockFrom.indexOf($detachedBlockSize)
            $detachedBlockFrom.splice(index, 1);
            $stackTwo.push($detachedBlockSize)
          }
        }

      } else if ($stackNumber === 3) {

        let previousBlockSize = $stackThree[$stackThree.length - 1]
        if ($detachedBlockSize > previousBlockSize) {
          return alert("Block is too big! Choose another stack.")
        } else {
          if ($detachedBlockSize) {
            let index = $detachedBlockFrom.indexOf($detachedBlockSize)
            $detachedBlockFrom.splice(index, 1);
            $stackThree.push($detachedBlockSize)
          }
        }
      }
      //Append the block to the stack and clear the block size variable
      $(this).append($detachedBlock);
      $detachedBlock = null;
    } else {
      //Detach the block from the stack and capture the block size
      $detachedBlockSize = $(this).children().last().data('block');
      $detachedBlock = $(this).children().last().detach();
    }
    //Testing the values in my array
    console.log('$stackOne ', $stackOne)
    console.log('$stackTwo ', $stackTwo)
    console.log('$stackThree ', $stackThree)


    //Check to see if stack two or three have all the blocks to find a winner
    if ($stackTwo.length === 4 || $stackThree.length === 4) {
      $('#announce-game-won').html('Winner!');
      $stackOne = [100, 75, 50, 25];
      $stackTwo = [];
      $stackThree = [];
    }
  });

  //Reset the game
  $('#reset').click(function() {
    $('#announce-game-won').html('');
    let $detachedBlock = null;
    let $detachedBlockSize = null;
    let $stackOne = [100, 75, 50, 25];
    let $stackTwo = [];
    let $stackThree = [];
    $('div[data-stack]').children().remove();
    $('[data-stack]:eq(0)').append($defaultStackOne);
  });
});
