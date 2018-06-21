'use strict';

$(document).ready(function() {

var turn ='X';
$('[data-cell]').on('click' ,function (){
  if($(this).text()===''){
    $(this).text(turn);
    wins();
    if(turn ==='O'){
      turn ='X';
    }else{
      turn ='O'
    }
  }
})
