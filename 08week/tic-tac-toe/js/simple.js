'use strict';

var Turn = "X";

$("[data-cell]").click(function(){

  $(this).html(Turn);
  if (Turn=="X"){
    Turn="O";
    }else{
      Turn="X";
    }
});

$("#clear").click(function(){
  $("[data-cell]").html("");
});

//from class

//$(document).ready(function(){
//$('#test').click(function(){
//  this.innerHtml = 'X';
//  setTimeout(function(){
//    alert('Ther ia an X here')
//  }, 300);
//});
//});
