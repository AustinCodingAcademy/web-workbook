'use strict';

$(document).ready(function() {
  let $pieceHolder = null;
  $('[data-stack]').click(function() {
    let currentClick=$(this).children().last().attr('data-block');
    let lastClick= $($pieceHolder).attr('data-block');
    if($pieceHolder){  
        if(!currentClick || Number(currentClick)>Number(lastClick)){
            $(this).append($pieceHolder);
            $pieceHolder = null;
        }
        else{
            alert("Bad user, bad!")
        }
    }
    else{
        $pieceHolder= $(this).children().last().detach();
    }
    if(($(".winner div").length)==4){
        $("#announce-game-won").text("YOU WON MOTHERA FUCKAA, click herr to reset, idiot");
        resetGame();
    }
  })
});


function resetGame(){
    
}