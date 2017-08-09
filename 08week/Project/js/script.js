// when the document is done loading, run the script inside
$(document).ready(function() {
  var num = 0;
  var counter = $('#counter');
    $('#box-1').click(function(f1) {
    num++;
    counter.text(num);
  })
});

$(document).ready(function() {
  var num = 0;
  var counterten = $('#counterten');
    $('#box-10').click(function() {
    num+=10;
    counterten.text(num);
  })
});

$(document).ready(function() {
  var num = 0;
  var counterhundred = $('#counterhundred');
    $('#box-100').click(function() {
    num+=100;
    counterhundred.text(num);
  })
});

//   $('#box-all').on({
//  'click': function(){
//
//    alert("eeeeeee")}
//  // 'click': function(){alert("eeeeeee")}
// })

 window.onload = function () {
alert("Are you ready to count? by ones, tens, and hundred?");
 }
