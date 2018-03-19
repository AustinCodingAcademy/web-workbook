'use strict';

$(document).ready(function() {

var data = {
  totalRevs:360,
  totalCurrent:0,
  totalRPS: 0
};

setInterval(goGo,1000);

function goGo() {
  var audio2 = $("#mysoundclip2")[0];
  data.totalRevs += data.totalRPS;
  data.totalCurrent += data.totalRPS;
  $('#kick').css({ 'transform': 'rotate(' + data.totalRevs + 'deg)'});
  updateReport();
  audio2.play();

}


function updateReport() {
  $("#currentTotal").text(Math.floor(data.totalCurrent));
  $("#rps").text((data.totalRPS/70.4).toFixed(6));
}


$("#kick").click(function (){
  var audio = $("#mysoundclip")[0];
  var audio2 = $("#mysoundclip2")[0];
  data.totalRevs ++;
  data.totalCurrent ++;
  updateReport();
  audio.play();
  pulse();
  // if $("#currentTotal").text < 100 {
  //   audio.play();
  // } else {
  //   audio2.play();
  // }
})


$(".button").click(function (){
  var addVal = $(this).data( "cost" );
  if ($(this).data( "cost" ) < data.totalCurrent ) {
    data.totalCurrent -=  parseFloat($(this).data( "cost" ).toPrecision(2));
    data.totalRPS += parseFloat($(this).data( "val" ));
    $( this ).children("span").html( parseInt($( this ).children("span").html()*1.15));
    $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) );
  }
  updateReport();
})


})
