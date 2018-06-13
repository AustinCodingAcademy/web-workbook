'use strict'
console.log("I do have javascript")

$('.box').click(function(){
  var clickedId=this.id;
  var idAsNumber=parseInt(clickedId);
  var current=$('#counter').text();
  console.log("current counter is "+current);
  var currentAsNumber=parseInt(current);
  var newCounter=currentAsNumber + idAsNumber;
  $('#counter').text(newCounter);
}
)
