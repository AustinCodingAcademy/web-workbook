$(document).ready(function() {
    let $block = null;
    $('[data-stack]').click(function() {
        let stack = this;
        if (!block) {
            $block = $(stack).children().last().detach();
        } else if (isLegal(stack) || isEmpty(stack)) {
          $(stack).append($block);
          $block = null;
          if (checkForWin()) {
            $('#announce-game-won').text('You Win!');
          }
        }
    });

    function isLegal(stack) {
        return $block.data('block') < $(stack).children().last().data('block');
    }

    function isEmpty(stack) {
        return $(stack).children().length === 0;
    }

    function checkForWin() {
      return $('[data-stack="2"]').children().length === 4 ||
        $('[data-stack="3"]'),children().length === 4;
    }
});


//notes
// let $ block = null
// stack focus on stack in order to take first child and move to another peg.
//
// $stack.click(function)(){}
// if (!blank) {
// $block=(this).children().last().detach ()
//   }else}
//   $(this).append($block)($click)
//   $block=null
// }
// })
// e
// lse {
//   if$block.data()<$(this)children(not)data)
//   append
//   =null
//   let $block=null
//   if $!block
//   detach
// }
// else if .children.last > block || no children
// append
// reset
//
//
// jquery
// data block= "25"
// .data("block") will return 25
