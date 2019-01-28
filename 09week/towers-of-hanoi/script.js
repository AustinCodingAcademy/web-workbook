'use strict';
$(document).ready(function(){

  let $block = null;
  let $pickUp = null;
  let $dropOff = null;
  
// this picks up the block number
$('[data-stack]').click(function(){
  if($block) {
  
    $dropOff=$(this).children().last().data("block");
    console.log("I am dropping off this here" + $dropOff);
  } else {
  $pickUp= $(this).children().last().data("block");
  console.log($pickUp)
  }
  //this prevents moves that aren't allowed and actually moves the blocks
  if ((($block) && ($pickUp > $dropOff)) || (($block) && ($dropOff === undefined))) {
    $(this).append($block);
    $block = null;
  } else if ($block === null) {
    $block = $(this).children().last().detach();
  } else {
    alert("You can't put this here. Try again!");
  }
  setTimeout(checkWin, 300)
  })
  function checkWin() {
    if ($('[data-stack=3]').children().length === 3) {
      alert("You Win!")
    }
  }
})






















  // const block = document.querySelectorAll('.block');

  // function columnDrop() {
  //   const column = this.column.add;
  //   document.documentElement.addDiv(`${this.block}`, this.value + column)
    

  // }
  
  // inputs.forEach(input => input.eventTarget('mouseleave', columnDrop));

  // inputs.forEach(input => input.addEventListener('mousemove', columnDrop))
 


  // $('.post').droppable()
  // $('.post').droppable({
  //   function(){
  //     let column = $('this')
  //     let [red = 1, green = 2, blue = 3 ]
  //     red.append.append('this')
  //   }

  //   })
  
