'use strict';

var diskInHand = null;
var numDisks = 5;

$(document).ready(function() {
  // Put app logic here

  init();

  $('.tower').click(function() {
    var thisTower = this;
    if (!diskInHand) {
      pop(thisTower);
    }
    else {  //I have a disk!
      push(thisTower);
    }
  });

});

function init() {
  for (var i=numDisks; i>=1; i--) {
    $('.stackA').append('<li class="disk disk'+i+'"></li>');
    // $('.stackB').append('<li class="disk disk'+i+'"></li>');

  }
};

function pop($this) {
  alert('In the pop function');
  if ($(".stack",  $this).children().length > 0) {
    diskInHand = $(".stack", $this).children().first().detach();
  }
  else {
    alert('Hey, there are no disks to select on this tower.  Try again...');
  }

};

function push($this) {
  alert('I am in the push function!');
  if ($(".stack",  $this).children().length === 0) {
    $(".stack",  $this).append(diskInHand);
    diskInHand = null;
  }
  else {
    alert('Sorry Charlie.  Cannot place disk here');
  }


};

function testForWin() {

};
