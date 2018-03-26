// when the document is done loading, run the script inside

// alert("Hey!");

$(document).ready(function() {
  var num = 0;
  let num10 = 0;
  $('#counter-1').click(function() {
    num++;
    $("#counter-1").text(num);
  })
  $('#counter-10').click(function() {
    num10 = num10 + 10;
    $('#counter-10').text(num10);
  })
  $('#counter-all').click(function() {
    console.log("all");
    num++;
    num10 += 10;
    $("#counter-1").text(num);
    $('#counter-10').text(num10);
  })
});