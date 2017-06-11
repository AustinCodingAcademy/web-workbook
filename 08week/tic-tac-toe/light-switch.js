$(document).ready(function(){
  var start = true;
  var toggle = function (){
    if (start) {
      $('#switch-inner').addClass('bottom');
      $('#light').addClass('lightOn');
    } else {
      $('#switch-inner').removeClass('bottom');
      $('#light').removeClass('lightOn');
    }
    start = !start;
  }

  $('#switch').click(toggle);
});
