'use strict';

$(document).ready(function() {
  let $block = null;
  let $size = null;

  $('[data-stack]').click(function() {
  let $tower = parseInt($(this).attr('data-stack'));
  let $previousBlock = parseInt($(this).children().first().attr('data-block'));
  let $stack = parseInt($(this).children().length);
  console.log("in the click function. $previousBlock: " + $previousBlock);
  console.log("$tower: " + $tower + " stack: " + $stack);

     if ($block && ($size > $previousBlock) && ($previousBlock !== null)) {
         alert("That's against the rules, ya cheater!");
       } else if ($block) {
         $(this).prepend($block);
         $size = parseInt($block.attr('data-block'));
         console.log("elseif statement ran. $size: " + $size + " $tower: " + $tower + " $previousBlock: " + $previousBlock);
         if ($size === 25 && $tower === 3 && $stack === 3) {
           console.log("it's a win!")
           $('#announce-game-won').add("<h1>YOU WON!</h1>").appendTo('#announce-game-won');
         } else {
           $block = null;
         }
       } else {
           $block = $(this).children().first().detach();
           $size = parseInt($block.attr('data-block'));
           console.log("else statement ran. $size: " + $size + " $tower: " + $tower + " $previousBlock: " + $previousBlock);
       }
 })
});
