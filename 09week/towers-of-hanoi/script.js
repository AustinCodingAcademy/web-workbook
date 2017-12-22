'use strict';

$(document).ready(function(){
    let $playerMove = null;
  $('[data-block]').click(function(){
    if ($playerMove === null && $(this).children(). length > 0){
      $playerMove = $(this).children().last().detach();
    } else if (($(this).children().length > 0)){
      if (($(this).children().last().data('block')).eq (currentstack - 1));
      $playerMove = null;
    } else if (($(this).))
  })
