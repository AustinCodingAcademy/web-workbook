'use strict';

$(document).ready(function() {
  var data = {
  totalRevs: 360,
  totalCurrent: 0,
  totalRPS: 0
};

setInterval(goGo,1000);

// rotate function

function goGo() {
  data.totalRevs += data.totalRPS;
  data.totalCurrent += data.totalRPS;
  $("#woodWheel").css({ 'transform': 'rotate(' + data.totalRevs + 'deg)'});
  updateReport();
}

// Totals

function updateReport() {
  $("#speedTotal").text(Math.floor(data.totalCurrent));
  $("#rps").text((data.totalRPS/70.4).toFixed(3));
}

//The wooden wheel image click

$("#woodWheel").click(function (){
  data.totalRevs ++;
  data.totalCurrent ++;
  updateReport();
})

//intervals

$(".button").click(function (){
  var addVal = $(this).data( "cost" );
  if ($(this).data( "cost" ) < data.totalCurrent ) {
    data.totalCurrent -=  parseFloat($(this).data( "cost" ).toPrecision(2));
    data.totalRPS += parseFloat($(this).data( "val" ));
    $( this ).children("span").html( parseInt($( this ).children("span").html()*1.10));
    $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.10) );
  }
  updateReport();



})

});
