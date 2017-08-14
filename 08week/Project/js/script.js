
$(document).ready(function() {
alert('Are you ready to count by ones, tens, and hundred?');
})

$("#box-1").click(function() {
var counterValue = $("#counter-1").text() === "" ? 0 : $("#counter-1").text();
var num = parseInt(counterValue) + 1;
$("#counter-1").text(num);
});

$("#box-10").click(function() {
var counterValue = $("#counter-10").text() === "" ? 0 : $("#counter-10").text();
var num = parseInt(counterValue) + 10;
$("#counter-10").text(num);
});

$("#box-100").click(function() {
var counterValue = $("#counter-100").text() === "" ? 0 : $("#counter-100").text();
var num = parseInt(counterValue) + 100;
$("#counter-100").text(num);
});

// $("#button").click(function(){
// var counterValue = $("#counter-1 #counter-10 #counter-100").text() === "" ? 0 :
// $("#counter-1 #counter-10 #counter-100").text();
// var num = parseInt(counterValue) + 1 + 10 + 100;
// $("#counter-1 #counter-10 #counter-100").text(num);
// });


$("#click-all").click(function(){
  $("#box-1, #box-10, #box-100").trigger("click");
});
