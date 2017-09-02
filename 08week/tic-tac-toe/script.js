'use strict';

$(document).ready(function() {
  // Put app logic in here
  var turnCount = 0;
  var xwin = "Player 1 Wins";
  var owin = "Player 2 Wins";
 var checkVictory = function(){
  //  top row win
   if($('#0').text() === 'X'){
     if($('#1').text() === 'X'){
       if($('#2').text() === 'X'){
         alert(xwin);
       }
     }

 }
 if($('#0').text() === 'O'){
   if($('#1').text() === 'O'){
     if($('#2').text() === 'O'){
       alert(owin);
     }
   }

}
 //mid row win
 if($('#3').text() === 'X'){
   if($('#4').text() === 'X'){
     if($('#5').text() === 'X'){
       alert(xwin);
     }
   }

 }
 if($('#3').text() === 'O'){
   if($('#4').text() === 'O'){
     if($('#5').text() === 'O'){
       alert(owin);
     }
   }

 }
 //bottom row win
 if($('#6').text() === 'X'){
   if($('#7').text() === 'X'){
     if($('#8').text() === 'X'){
       alert(xwin);
     }
   }
 }
   if($('#6').text() === 'O'){
     if($('#7').text() === 'O'){
       if($('#8').text() === 'O'){
         alert(owin);
       }
     }
   }
     //first column win
     if($('#0').text() === 'X'){
       if($('#3').text() === 'X'){
         if($('#6').text() === 'X'){
           alert(xwin);
         }
       }
     }
     if($('#0').text() === 'O'){
       if($('#3').text() === 'O'){
         if($('#6').text() === 'O'){
           alert(owin);
         }
       }
     }
    //  2nd column win
    if($('#1').text() === 'X'){
      if($('#4').text() === 'X'){
        if($('#7').text() === 'X'){
          alert(xwin);
        }
      }
    }
    if($('#1').text() === 'O'){
      if($('#4').text() === 'O'){
        if($('#7').text() === 'O'){
          alert(owin);
        }
      }
    }
    // 3rd column win
    if($('#2').text() === 'X'){
      if($('#5').text() === 'X'){
        if($('#8').text() === 'X'){
          alert(xwin);
        }
      }
    }
    if($('#2').text() === 'O'){
      if($('#5').text() === 'O'){
        if($('#8').text() === 'O'){
          alert(owin);
        }
      }
    }
    // diagonal win
    if($('#0').text() === 'X'){
      if($('#4').text() === 'X'){
        if($('#8').text() === 'X'){
          alert(xwin);
        }
      }
    }
    if($('#0').text() === 'O'){
      if($('#4').text() === 'O'){
        if($('#8').text() === 'O'){
          alert(owin);
        }
      }
    }
    if($('#2').text() === 'X'){
      if($('#4').text() === 'X'){
        if($('#6').text() === 'X'){
          alert(xwin);
        }
      }
    }
    if($('#2').text() === 'O'){
      if($('#4').text() === 'O'){
        if($('#6').text() === 'O'){
          alert(owin);
        }
      }
    }
 };

  $('.row').find('div').on('click',function(){
    if($(this).text() === ""){
    if(turnCount % 2 === 0){
      $(this).text('X');
      checkVictory('X');
    } else{
      $(this).text('O');
      checkVictory('O');
    }
    turnCount ++;
    console.log(turnCount);
  }
})

  $('body').find('#clear').on('click',function(){
    $('.row').find('div').text("");
  });

});
