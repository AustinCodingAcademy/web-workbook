var data = {
  totalChange:360,
  totalCurrent:0,
  totalPiggy: 0
};

setInterval(fillPiggy,100);

function fillPiggy() {
  data.totalChange += data.totalPiggy;
  data.totalCurrent += data.totalPiggy;
  updateReport();
}

function updateReport() {
  $("#currentTotal").text(Math.floor(data.totalCurrent));
  $("#piggy").text((data.totalPiggy/2).toFixed(2));
}


$("#bank").click(function (){
  data.totalChange ++;
  data.totalCurrent ++;
  updateReport();
})

$(".button").click(function (){
  var addVal = $(this).data( "cost" );
  if ($(this).data( "cost" ) < data.totalCurrent ) {
    data.totalCurrent -=  parseFloat($(this).data( "cost" ).toPrecision(2));
    data.totalPiggy += parseFloat($(this).data( "val" ));
    $( this ).children("span").html( parseInt($( this ).children("span").html()*1.15));
    $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) );
  }
  updateReport();
})
