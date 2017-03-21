$(function() {
  // Put app logic here
  let $ringVal = $(this).children().last();
  let $block = 'null';
  let $length = $(this).length;

  $('[data-stack]').click(function(){
      if(!$block){
        $block = $(ringVal);
        console.log($block);
      }

    else {
      if($ringVal > $block || $length === 0){
        $(this).append($block);
      }}
    }  )})
