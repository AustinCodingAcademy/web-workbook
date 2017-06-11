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
