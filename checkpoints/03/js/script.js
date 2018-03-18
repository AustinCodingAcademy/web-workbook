'use strict';

$(function () {
  var data = {
    scale: 5,
    totalCurrent: 0,
    growthIncrement: 0
  };

  let interval = setInterval(grow, 1000); // call grow() once a second

  function grow() {
    data.scale += data.growthIncrement; // increase tree size by current growthIncrement on each iteration
    data.totalCurrent += data.growthIncrement; // also add growthIncrement to 'available water' in totalCurrent
    if (data.scale > 100) { // maximum size of tree after transformation of scale
      if (data.growthIncrement <= 47) {
        data.scale = 5;
        $("#trees").append('<img src="http://www.freepngimg.com/download/tree/39-tree-png-image.png"  class="tree" style="height:20px;width: 20px">')
      } else {
        $("#trees").append('<img src="http://www.freepngimg.com/download/tree/39-tree-png-image.png"  class="tree" style="height: 350px; width: 350px; margin: -100px">');
        clearInterval(interval)
        interval = setInterval(grow, 1000 - data.growthIncrement)
      }
    } else {
      $("#trees").children().last().css({ 'transform': 'scale(' + data.scale / 5 + ')'});
    }
    updateReport();
  }

  function updateReport() {
    $("#current-total").text(Math.floor(data.totalCurrent));
    $("#growth-rate").text((data.growthIncrement).toFixed(2));
  }

  $("#water-cycle").click(function (){
    data.totalCurrent ++;
    updateReport();
  })

  $(".button").click(function (){
    var addVal = $(this).data("cost");
    if (addVal < data.totalCurrent ) {
      data.totalCurrent -=  parseFloat(addVal.toPrecision(2));
      data.growthIncrement += parseFloat(addVal / 1000);
      $(this).data("cost", parseFloat(addVal + (3 * (addVal / 100))));
      console.log($(this).data("cost"));
      $(this).children("span").html(parseInt($(this).data("cost")));
    }
    updateReport();
  });
});
