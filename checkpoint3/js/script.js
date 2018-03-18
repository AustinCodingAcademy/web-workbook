'use strict';

$(document).ready(function() {

  var data = {
    totalBurgers:0,
    // currentBurgers:0,
    currentMoney:0,
    totalBPS:0
  };

  function makeBurger() {
    data.totalBurgers += data.totalBPS;
    data.currentMoney += data.totalBPS;
    // data.currentBurgers += data.totalBPS;
    updateReport();
  };

  function updateReport() {
    $('#currentTotal').text(Math.floor(data.currentMoney));
    // $('#currentTotal').text(Math.floor(data.currentBurgers));
    $('#bps').text((data.totalBPS/60).toFixed(2));
  };

  $('#burgerdone').click(function() {
    data.totalBurgers ++;
    // data.currentBurgers ++;
    data.currentMoney ++;
    updateReport();
  })

  $(".button").click(function (){
  var addVal = $(this).data( "cost" );
  if ($(this).data( "cost" ) < data.currentBurgers) {
    data.currentBurgers -=  parseFloat($(this).data( "cost" ).toPrecision(2));
    data.totalBPS += parseFloat($(this).data( "val" ));
    $(this).children("span").html( parseInt($( this ).children("span").html()*1.15));
    $(this).data( "cost", parseInt($(this).data( "cost" ) * 1.15) );
  }
  updateReport();
})



});
