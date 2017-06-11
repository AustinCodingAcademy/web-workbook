// when the document is done loading, run the script inside
$(document).ready(function() {
  var num = 0;
  var counter = $('#counter');

  $('#box').click(function() {
    num++;
    counter.text(num);
  })
});
