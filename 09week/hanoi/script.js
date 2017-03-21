$(document).ready(function() {
  // Put app logic here
let $block = null;

if(!$block){
  $(['data-stack']).click(function(){
    $block = $(this).children().last().detach();

  });
}

})
