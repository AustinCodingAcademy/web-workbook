'use strict';

$(document).ready(function() {
  let block = null;
  
  $('[data-row]').click(function() {
    let upcomingClick = $(this).children().first().data("size");
    let lastClick = $(block).data("size");
    if ((block) && (upcomingClick == null || Number(lastClick) < Number(upcomingClick))){
      $(this).prepend(block);
      endGame();
      block = null;
    } else if (Number(lastClick) > Number(upcomingClick)){
      alert("Hey idiot, You can't do that");
    } else {
      block = $(this).children().first().detach();
    }
  })


function endGame(){
  if ($(".blue").children().length == 4){
    alert("Fuck yea! You win!");
    reset();
  }
}

// function reset(){
//   for (let i = 4; i >= 1; i--){

//     let butt = i.toString();
//     console.log($(`[data-size=${butt}]`));
//     // $(".white").children().prepend($(`div[data-size=${piece}]`))
//   }
// }

function reset(){
  for (let i = 0; i < 4; i++){

    let block = $(".blue").children().first().detach();
    $(".white").append(block);
  }

}

})
