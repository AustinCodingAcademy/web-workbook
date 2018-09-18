
$(document).ready(function(){

  $('#robotCounter').click(function() { //couldn't get my original idea to work. This is just a numeric counter that displays some text.
    $('.count').html(function(i, val) { return val*1+1 });
    Materialize.toast('You punched a robot in the face!', 2000)
    });

  });
