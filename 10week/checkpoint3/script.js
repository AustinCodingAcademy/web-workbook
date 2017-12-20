var data = {
  totalRevs:360,
  totalCurrent:0,
  totalRPS: 0
};

setInterval(goGo,1000);

function goGo() {
  data.totalRevs += data.totalRPS;
  data.totalCurrent += data.totalRPS;
  // $("#wheel").css({ 'transform': 'rotate(' + data.totalRevs + 'deg)'});
  updateReport();
}

function updateReport() {
  $("#currentTotal").text(Math.floor(data.totalCurrent));
  $("#rps").text((data.totalRPS/70.4).toFixed(3));
}

$("#wheel").click(function (){
  data.totalRevs ++;
  data.totalCurrent ++;
  updateReport();
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
  var $meter = $('#rps').text();
  console.log($("#rps").text())
  if ($("#rps").text() >= .001 && $("#rps").text() < .01) {
     $('img').attr('src', 'img/2.jpg');
  } else if ($("#rps").text() >= .01 && $("#rps").text() < .1) {
     $('img').attr('src', 'img/3.png');
   } else if ($("#rps").text() >= .1 && $("#rps").text() < 1) {
      $('img').attr('src', 'img/4.jpg');
    } else if ($("#rps").text() >= 1 && $("#rps").text() < 10) {
       $('img').attr('src', 'img/5.jpg');
     } else if ($("#rps").text() >= 10 && $("#rps").text() < 100) {
        $('img').attr('src', 'img/6.png');
      }  else if ($("#rps").text() >= 100) {
         $('img').attr('src', 'img/last.jpg');
       }
})
