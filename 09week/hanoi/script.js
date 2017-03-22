$(function() {
  // Put app logic here
  // let $ringVal = $(this).children().last();
  let $ring = 'null';
  let $length = $(this).length;

  $('[data-stack]').click(function(){

      if($ring === 'null'){
        $ring = $(this).children().last().detach();
        console.log($ring);
        console.log($(this).children().length);
        }

      else {

        if($(this).children().length === 0 || ($ring.data('block') < $(this).children().last().data('block') )) {
          $(this).append($ring);
          $ring = 'null';
        }
        else {

        }
// || ($(this).children().last().data('block') > $ring.data('block') )

      }
      });

    // else {
    //   if($ringVal > $block || $length === 0){
    //     $(this).append($block);
    //   }}
  })
