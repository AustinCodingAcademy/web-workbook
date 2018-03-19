'use strict';
$(document).ready(function() {

  var data = {
    money: 0,
    totalCurrent: 0,
    totalBPS: 0
  };

setInterval(makeBurger,1000);

  function makeBurger() {
    data.totalCurrent += data.totalBPS;
    updateReport();
  }

  function sellBurgers() {
  data.totalCurrent += data.money;
  $("money").text(data.money);
  }



  function updateReport() {
    $("#currentTotal").text(Math.floor(data.totalCurrent));
    $("#bps").text((data.totalBPS*100).toFixed(2));
  }

console.log(totalBurgers.data);

  $("#burger").click(function (){

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

    });

  //   $("button").click(function() {
  //     $("#money").text(data.money);
  // })
});
