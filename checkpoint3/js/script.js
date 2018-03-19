'use strict';

$(document).ready(function() {
  // var totalBurgers = 0;
  // var currentBurgers = 0;
  // var bps = 0;
  // var buttHead = 0;
  // var chef = 0;
  // var bob = 0;
  // var spongeBob = 0;

// var currentBurgers = 0;
// var totalBurgers = 0;

  var data = {
    totalBurgers:0,
    currentBurgers:0,
    totalBPC:0
  };

  setInterval(makeBurger,1000);

  function makeBurger() {
    data.totalBurgers += data.totalBPC;
    data.currentBurgers += data.totalBPC;
    updateReport();
  };

  function updateReport() {
    $('#currentTotal').text(Math.floor(data.currentBurgers));
    $('#bpc').text((data.totalBPC/25).toFixed(2));
  };

  $('#burgerdone').click(function() {
    data.totalBurgers ++;
    data.currentBurgers ++;
    updateReport();
  })

  $(".button").click(function (){
    var addVal = $(this).data( "cost" );
      if ($(this).data("cost") < data.currentBurgers) {
          data.currentBurgers -=  parseFloat($(this).data( "cost" ).toPrecision(2));
          data.totalBPC += parseFloat($(this).data( "val" ));
          $(this).children("span").html( parseInt($(this).children("span").html() * 2));
          $(this).data("cost", parseInt($(this).data("cost") * 2));
        }
      updateReport();
    });



});
