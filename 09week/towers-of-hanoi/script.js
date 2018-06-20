'use strict';

$(document).ready(function() {
  // draggable
  // $('[data-stack="1"]').
  // use draggable="true/false" to lock the blocks and make them draggable.
  // if else statementn and .lastChild.  make the last child of data-stack have draggable="true".

});

// $('[data-block]').draggable()
const blocks = document.querySelectorAll('[data-block]');
const block = document.querySelector('[data-block]');
const stack = document.querySelectorAll('[data-stack]');

for (const block of blocks) {
  block.addEventListener('dragstart', dragStart);
  block.addEventListener('dragend', dragEnd);
  block.addEventListener('dragover', dragOver);
  block.addEventListener('dragenter', dragEnter);
  block.addEventListener('dragleave', dragLeave);
  block.addEventListener('drop', dragDrop);
}

function dragStart() {
  setTimeout(() => (this.className = 'invisible'), 0)
  console.log('start');
}
function dragEnd() {
  this.className = 'block';
  console.log('end');
}
function dragOver(e) {
  e.preventDefault();
  console.log('over');
}
function dragEnter(e) {
  e.preventDefault();
  console.log('enter');
}
function dragLeave() {
  console.log('leave');
}
function dragDrop() {
  this.append(block);
  console.log('drop');
}


// block.addEventListener('dragstart', dragStart);
// block.addEventListener('dragend', dragEnd);
