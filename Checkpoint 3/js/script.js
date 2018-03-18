'use strict';
$(document).ready(function() {

  var data = {
    totalBurgers:0,
    totalCurrent:0,
    totalBPS: 0
  };

setInterval(makeBurger,1000);

  function makeBurger() {
    data.totalBurgers += data.totalBPS;
    data.totalCurrent += data.totalBPS;
    updateReport();
  }

  function updateReport() {
    $("#currentTotal").text(Math.floor(data.totalCurrent));
    $("#bps").text((data.totalBPS/70.4).toFixed(3));
  }


  $("#burger").click(function (){
    data.totalBurgers ++;
    data.totalCurrent ++;
    updateReport();
  })

  $(".button").click(function (){
    var addVal = $(this).data( "cost" );
    if ($(this).data( "cost" ) < data.totalCurrent ) {
      data.totalCurrent -=  parseFloat($(this).data( "cost" ).toPrecision(2));
      data.totalBPS += parseFloat($(this).data( "val" ));
      $( this ).children("span").html( parseInt($( this ).children("span").html()*1.15));
      $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) );
    }
    updateReport();
  })
});
