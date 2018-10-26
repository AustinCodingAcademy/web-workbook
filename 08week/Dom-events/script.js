$(document).ready(function() {
    var num = 0;
    var num10 = 10;
    var num100 = 100;
    $('#counter-1').click(function() {
      num++;
      $(this).text(num);
    });
  
  $('#counter-10').click(function() {
      num10=num10+10;
      $(this).text(num10);
    });

  $('#counter-100').click(function() {
      num100=num100+100;
      $(this).text(num100);
    });
    

  
  $('#click-all').click(function() {
      //clickall= $('#counter-1').click
      $('#counter-1').click();
      $('#counter-10').click();
      $('#counter-100').click();
  });
      
});