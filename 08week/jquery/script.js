// when the document is done loading, run the script inside
$(document).ready(function() {

  alert("Are you ready to count by ones, tens, and hundreds?");

  var num = 0;
  $('#counter-1').click(function() {
    num++;
    $(this).text(num);
  })
  $('#counter-10').click(function() {
    var num2 = Number($(this).text());
    num2 += 10;
    $(this).text(num2);
  })
  $('#counter-100').click(function() {
    var num3 = Number($(this).text());
    num3 += 100;
    $(this).text(num3);
  })

  document.querySelector('#counter-100').insertAdjacentHTML('afterend', '<div class="box" id="all" style="display: flex; justify-content: center; align-items: center;">Click All</div>');
  $('#all').click(function() {
    $('#counter-1, #counter-10, #counter-100').click();
  })

  $(function() {
    $("#sortable").sortable();
    $("#sortable").disableSelection();
  });

});
