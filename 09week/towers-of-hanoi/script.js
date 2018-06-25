'use strict';

$(document).ready(function() {

  // $('[data-block]').draggable()
  const blocks = $('[data-block]');
  const stacks = $('[data-stack]');

  var movable = $('[data-block]:last-child');
  movable.addClass('moveable');

  blocks.draggable();

  stacks.droppable({
    accept: '.movable',
    drop: function() {
      $(this).append(movable);
    }
  })
})

//   for (const block of blocks) {
//     block.addEventListener('dragstart', dragStart);
//   }
//
//   for (const stack of stacks) {
//     stack.addEventListener('drop', dragDrop);
//     stack.addEventListener('dragover', dragOver);
//     stack.addEventListener('dragenter', dragEnter);
//   }
//
//   function dragStart() {
//     setTimeout(() => (this.className = 'invisible'), 0);
//     block = this;
//     console.log('start', this);
//   }
//
//   function dragDrop() {
//     this.append(block);
//     // block.className = "block";
//     console.log('drop', this);
//   }
//   // function dragEnd() {
//   //   this.className = 'block';
//   //   console.log('end', this);
//   // }
//   function dragOver(e) {
//     e.preventDefault();
//     // console.log('over', this);
//   }
//   function dragEnter(e) {
//     e.preventDefault();
//   }
//
// });


// function dragLeave() {
//   console.log('leave', this);
// }


// block.addEventListener('dragend', dragEnd);
// block.addEventListener('dragover', dragOver);
// block.addEventListener('dragenter', dragEnter);
// block.addEventListener('dragleave', dragLeave);
// block.addEventListener('drop', dragDrop);

// block.addEventListener('dragstart', dragStart);
// block.addEventListener('dragend', dragEnd);
// can i drag it?
// draggable function
//
// can i drop it here?
// drop place valid function


// draggable
// $('[data-stack="1"]').
// use draggable="true/false" to lock the blocks and make them draggable.
// if else statementn and .lastChild.  make the last child of data-stack have draggable="true".
