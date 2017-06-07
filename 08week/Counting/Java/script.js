$(document).ready(function() {
  alert("Are you ready to count by ones, tens, and hundreds?");
});

var num1 = 0;
var num2 = 0;
var num3 = 0;
var counter1 = $(".counter1");
var counter2 = $(".counter2");
var counter3 = $(".counter3");

$(".box1, .bigbutton").click(function() {
  num1 = num1 + 1;
  counter1.text(num1);
});

$(".box2, .bigbutton").click(function() {
  num2 = num2 + 10;
  counter2.text(num2);
});

$(".box3, .bigbutton").click(function() {
  num3 = num3 + 100;
  counter3.text(num3);
});
