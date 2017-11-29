'use strict'

var count=0;
var divData=document.getElementById("showCount");

function countDoggos(){
  count=parseInt(count)+parseInt(1);
  var divData=document.getElementById("showCount");
  divData.innerHTML=(count);
}
$(document).ready(function() {

  //click //
  $('#getButton').click(function() {

  // generate popup //
  alert ('You saved a doggo!');

  // reset game //
  });
  $('#resetButton').click(function() {
      divData.innerHTML=('0');
  S});
});
