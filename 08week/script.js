// when the document is done loading, run the script inside
$(document).ready(function() {
  var box1 = 0;
  var box10 = 0;
  var box100 = 0;

  var counter1 = $('#counter1');
  var counter10 = $('#counter10');
  var counter100 = $('#counter100');

  $('#box1').click(function(){
   box1++,
    counter1.text(box1);
  });

    $('#box10').click(function(){
   box10 = box10 + 10,
    counter10.text(box10);
  });

  $('#box100').click(function(){
   box100 = box100 + 100,
    counter100.text(box100);
  });
});
