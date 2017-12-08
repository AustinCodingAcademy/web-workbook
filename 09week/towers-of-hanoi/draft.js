let $playerMove = null;
$('data-stack').click(function () {
  if($playerMove === null && $(this).children().length > 0){
    $playerMove = $(this).children().last().detach();
    currentStack = $(this).attr('data-stack');
 } else if (($(this).children().length > 0)){
   if(($(this).children().last().data('block')) < ($playerMove.data('block'))){
     $playerMove
   }

 }

})
