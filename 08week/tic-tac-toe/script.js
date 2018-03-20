'use strict';

$(document).ready(function() {
  // Put app logic in here
  let sign = 'X';
  $('[data-cell]').click(function(){
    if($(this).text() !== ''){
      return;
    }
    $(this).text(sign);
    if(sign==='O'){
      sign = 'X';
    }else{
      sign = 'O';
    }
    var hori1 = [$('[data-cell=0]').text(),$('[data-cell=1]').text(),$('[data-cell=2]').text()];
    var hori2 = [$('[data-cell=3]').text(),$('[data-cell=4]').text(),$('[data-cell=5]').text()];
    var hori3 = [$('[data-cell=6]').text(),$('[data-cell=7]').text(),$('[data-cell=8]').text()];
    var vert1 = [$('[data-cell=0]').text(),$('[data-cell=3]').text(),$('[data-cell=6]').text()];
    var vert2 = [$('[data-cell=1]').text(),$('[data-cell=4]').text(),$('[data-cell=7]').text()];
    var vert3 = [$('[data-cell=2]').text(),$('[data-cell=5]').text(),$('[data-cell=8]').text()];
    var diag1 = [$('[data-cell=0]').text(),$('[data-cell=4]').text(),$('[data-cell=8]').text()];
    var diag2 = [$('[data-cell=6]').text(),$('[data-cell=4]').text(),$('[data-cell=2]').text()];
    var winArray = [hori1, hori2, hori3, vert1,vert2,vert3, diag1, diag2];

    for (let i=0;i<winArray.length;i++) {
      {
        if (winArray[i][0]===winArray[i][1] && winArray[i][1]===winArray[i][2] && winArray[i][0] !== ''){
          //$('body').append(`<div>${}`);
          console.log(`${winArray[i][0]} WINS!!!`);
          alert(`${winArray[i][0]} WINS!!!`);
        }
      }

    }
  });

});
