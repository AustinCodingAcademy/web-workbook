'use strick';

function dragBlock(e) {

  var blockValue = $(e.target).data('block');
  e.dataTransfer.setData('block', blockValue);
  }

function allowDrop(e) {
  e.preventDefault();
}

function dropBlock(e) {
  e.preventDefault();
  var blockValue = e.dataTransfer.getData('block');
  var $block = $('[data-block=' + blockValue + ']');

    if ($(e.target).children().length === 0) {
     $(e.target).append($('[data-block=' + blockValue + ']'));
    }

    else {
     var children = $(e.target).children();
     var length = $(e.target).children().length;
     var topChild = children[length - 1];
     var topChildBlockValue = $(topChild).data('block');

      if(blockValue < topChildBlockValue) {
       $(e.target).append($block);
      }
    }
  toggleDragAttr();
}

function toggleDragAttr() {

  for (var e = 1; e < 4 ; e++) {

  var children= $('[data-stack=' + e + ']').children();

  for (var i=0; i<children.length; i++) {
    $(children[i]).removeAttr('draggable');
  }
  $(children[children.length - 1]).attr('draggable', 'true');
  }
}

//Win condition: Creat alert, 'you win!'
//Create function, 'win'.

  var stack3 = $('[data-stack=3]');
  var dataBlock100 = $('[data-block=100]');
  var dataBlock75 = $('[data-block=75]');
  var dataBlock50 = $('[data-block=50]');
  var dataBlock25 = $('[data-block=25]');

  if(stack3 === dataBlock100 && dataBlock100 === dataBlock75 && dataBlock75 === dataBlock50 && dataBlock50 === dataBlock25)
    alert('You win!');
    dataBlock100.removeAttr('draggable');
    dataBlock75.removeAttr('draggable');
    dataBlock50.removeAttr('draggable');
    dataBlock25.removeAttr('draggable');
//Checkpoint: Able to tell how many moves were made.
//Not able to move pieces when game is over.
