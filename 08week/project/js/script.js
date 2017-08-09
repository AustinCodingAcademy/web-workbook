$(document).ready(function() {
  alert('Are you ready to count by ones, tens, and hundred?')
});

var num = 0;

$('#box-1').click(function() {
    var counter = $('#counter-1');
    num++;
    counter.text(num);
  });

$('#box-10').click(function() {
    var counter = $('#counter-10');
    num+=10;
    counter.text(num);
  });

  $('#box-100').click(function() {
      var counter = $('#counter-100');
      num+=100;
      counter.text(num);
    });

    $('#new-box').click(function(){
        $('div').click();
    });
