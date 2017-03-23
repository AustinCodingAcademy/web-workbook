$(function() {
  // Put app logic here
  // let $ringVal = $(this).children().last();
  let $ring = 'null';
  let $length = $(this).children().last().length;

  $('[data-stack]').click(function(){

      if($ring === 'null'){
        $ring = $(this).children().last().detach();
        console.log($ring);
        console.log($(this).children().length);
        }

      else if ($(this).children().length === 0 || ($ring.data('block') < $(this).children().last().data('block') ))
       {
         $(this).append($ring);
         $ring = 'null';
         checkWin();
       }

     })

function checkWin(){
  if ($('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length===4) {
    $('#announce-game-won').text('You\'ve Won!');
  }
}
  });
