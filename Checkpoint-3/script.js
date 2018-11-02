var data = {
  totalRevs:360, 
  totalCurrent:0, 
  totalRPS: 0
};

setInterval(goGo,1000);

function goGo() {
  data.totalRevs += data.totalRPS;
  data.totalCurrent += data.totalRPS;
  $("#iceCream").css({ 'transform': 'rotate(' + data.totalRevs + 'deg)'});
  updateReport();
}

function updateReport() {
  $("#currentTotal").text(Math.floor(data.totalCurrent));
  $("#rps").text((data.totalRPS/70.4).toFixed(3));
}


$("#iceCream").click(function (){
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
})





































// var data = {

//   totalRev: 360,
//   totalCurrent: 0,
//   totalRPS: 0

// }




// $(".button").click(function (){
//   var addVal = $(this).data( "cost" );
//   if ($(this).data( "cost" ) < data.totalCurrent ) {
//     data.totalCurrent -=  parseFloat($(this).data( "cost" ).toPrecision(2));
//     data.totalRPS += parseFloat($(this).data( "val" ));
//     $( this ).children("span").html( parseInt($( this ).children("span").html()*1.15));
//     $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) );
//   }
// })

// setInterval(goGo,1000);

// function goGo() {
//   data.totalRevs += data.totalRPS;
//   data.totalCurrent += data.totalRPS;
//   $("#wheel").css({ 'transform': 'rotate(' + data.totalRevs + 'deg)'});
//   updateReport();
// }

// function updateReport() {
//   $("#currentTotal").text(Math.floor(data.totalCurrent));
//   $("#rps").text((data.totalRPS/70.4).toFixed(3));
// }


// $("#wheel").click(function (){
//   data.totalRevs ++;
//   data.totalCurrent ++;
//   updateReport();
// })

// $(".button").click(function (){ 
//   var addVal = $(this).data( "cost" );
//   if ($(this).data( "cost" ) < data.totalCurrent ) {
//     data.totalCurrent -=  parseFloat($(this).data( "cost" ).toPrecision(2));
//     data.totalRPS += parseFloat($(this).data( "val" ));
//     $( this ).children("span").html( parseInt($( this ).children("span").html()*1.15)); 
//     $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) ); 
//   }
//   updateReport();
// })








// function incrementValue() {
// var value = parseInt(document.getElementById("currentTotal").value, 10);
// value = isNaN(value) ? 0 : value;
// value++;
// document.getElementById("currentTotal").value = value;

// }


















// var data = {
//   totalCurrent: 0 
// }

// function updateReport() {
//   $("#currentTotal").text(Math.floor(data.totalCurrent));
// }

// $("#iceCream").click(function (){
//   data.totalCurrent ++;
//   updateReport();
// })


// $("#currentTotal").click(function (){ 
//   var addVal = $(this).data( "#currentTotal" );
//   if ($(this).data( "#currentTotal" ) < data.totalCurrent )
// })
