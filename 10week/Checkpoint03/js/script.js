
var data = {
  totalPaper:0,
  totalPaperSec: 0,
};

// sells paper every second
setInterval(sellin,1000);

function sellin() {
  data.totalPaper += data.totalPaperSec;
  updateReport();
}

// updates "paper sold" and "paper sold/sec"
function updateReport() {
  $("#piecesPaper").text(Math.floor(data.totalPaper));
  $("#paperSec").text((data.totalPaperSec).toFixed(3));
}

// adds paper to "total paper" when click button
$("#paperButton").click(function (){
  data.totalPaper ++;
  updateReport();
})

// sets variable for leveling system

var michaelLev = 0;
var ryanLev = 0;
var pamLev = 0;
var stanleyLev = 0;
var andyLev = 0;
var phyllisLev = 0;
var jimLev = 0;
var dwightLev = 0;

$("#michael").click(function (){
  var addVal = $(this).data( "cost" );
  if ($(this).data( "cost" ) <= data.totalPaper ) {
    data.totalPaper -=  parseFloat($(this).data( "cost" ).toPrecision(2));
    data.totalPaperSec += parseFloat($(this).data( "val" ));
    $( this ).children(".price").html( parseInt($( this ).children(".price").html()*1.3));
    $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.3) );
			michaelLev++;
		$( this ).children(".level").text("level " + michaelLev);
  }
  updateReport();
})

$("#ryan").click(function (){
  var addVal = $(this).data( "cost" );
  if ($(this).data( "cost" ) <= data.totalPaper ) {
    data.totalPaper -=  parseFloat($(this).data( "cost" ).toPrecision(2));
    data.totalPaperSec += parseFloat($(this).data( "val" ));
    $( this ).children(".price").html( parseInt($( this ).children(".price").html()*1.3));
    $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.3) );
			ryanLev++;
		$( this ).children(".level").text("level " + ryanLev);
  }
  updateReport();
})

$("#pam").click(function (){
  var addVal = $(this).data( "cost" );
  if ($(this).data( "cost" ) <= data.totalPaper ) {
    data.totalPaper -=  parseFloat($(this).data( "cost" ).toPrecision(2));
    data.totalPaperSec += parseFloat($(this).data( "val" ));
    $( this ).children(".price").html( parseInt($( this ).children(".price").html()*1.3));
    $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.3) );
			pamLev++;
		$( this ).children(".level").text("level " + pamLev);
  }
  updateReport();
})

$("#stanley").click(function (){
  var addVal = $(this).data( "cost" );
  if ($(this).data( "cost" ) <= data.totalPaper ) {
    data.totalPaper -=  parseFloat($(this).data( "cost" ).toPrecision(2));
    data.totalPaperSec += parseFloat($(this).data( "val" ));
    $( this ).children(".price").html( parseInt($( this ).children(".price").html()*1.3));
    $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.3) );
			stanleyLev++;
		$( this ).children(".level").text("level " + stanleyLev);
  }
  updateReport();
})

$("#andy").click(function (){
  var addVal = $(this).data( "cost" );
  if ($(this).data( "cost" ) <= data.totalPaper ) {
    data.totalPaper -=  parseFloat($(this).data( "cost" ).toPrecision(2));
    data.totalPaperSec += parseFloat($(this).data( "val" ));
    $( this ).children(".price").html( parseInt($( this ).children(".price").html()*1.3));
    $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.3) );
			andyLev++;
		$( this ).children(".level").text("level " + andyLev);
  }
  updateReport();
})

$("#phyllis").click(function (){
  var addVal = $(this).data( "cost" );
  if ($(this).data( "cost" ) <= data.totalPaper ) {
    data.totalPaper -=  parseFloat($(this).data( "cost" ).toPrecision(2));
    data.totalPaperSec += parseFloat($(this).data( "val" ));
    $( this ).children(".price").html( parseInt($( this ).children(".price").html()*1.3));
    $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.3) );
			phyllisLev++;
		$( this ).children(".level").text("level " + phyllisLev);
  }
  updateReport();
})

$("#jim").click(function (){
  var addVal = $(this).data( "cost" );
  if ($(this).data( "cost" ) <= data.totalPaper ) {
    data.totalPaper -=  parseFloat($(this).data( "cost" ).toPrecision(2));
    data.totalPaperSec += parseFloat($(this).data( "val" ));
    $( this ).children(".price").html( parseInt($( this ).children(".price").html()*1.3));
    $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.3) );
			jimLev++;
		$( this ).children(".level").text("level " + jimLev);
  }
  updateReport();
})

$("#dwight").click(function (){
  var addVal = $(this).data( "cost" );
  if ($(this).data( "cost" ) <= data.totalPaper ) {
    data.totalPaper -=  parseFloat($(this).data( "cost" ).toPrecision(2));
    data.totalPaperSec += parseFloat($(this).data( "val" ));
    $( this ).children(".price").html( parseInt($( this ).children(".price").html()*1.3));
    $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.3) );
			dwightLev++;
		$( this ).children(".level").text("level " + dwightLev);
  }
  updateReport();
})

// $("#ryan").click(function (){
//   var addVal = $(this).data( "cost" );
//   if ($(this).data( "cost" ) <= data.totalPaper ) {
//     data.totalPaper -=  parseFloat($(this).data( "cost" ).toPrecision(2));
//     data.totalPaperSec += parseFloat($(this).data( "val" ));
//     $( this ).children(".price").html( parseInt($( this ).children(".price").html()*1.3));
//     $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.3) );
// 			ryanLev++;
// 		$( this ).children(".level").text("level " + ryanLev);
//   }
//   updateReport();
// })
//
// $("#ryan").click(function (){
//   var addVal = $(this).data( "cost" );
//   if ($(this).data( "cost" ) <= data.totalPaper ) {
//     data.totalPaper -=  parseFloat($(this).data( "cost" ).toPrecision(2));
//     data.totalPaperSec += parseFloat($(this).data( "val" ));
//     $( this ).children(".price").html( parseInt($( this ).children(".price").html()*1.3));
//     $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.3) );
// 			ryanLev++;
// 		$( this ).children(".level").text("level " + ryanLev);
//   }
//   updateReport();
// })
//
// $("#ryan").click(function (){
//   var addVal = $(this).data( "cost" );
//   if ($(this).data( "cost" ) <= data.totalPaper ) {
//     data.totalPaper -=  parseFloat($(this).data( "cost" ).toPrecision(2));
//     data.totalPaperSec += parseFloat($(this).data( "val" ));
//     $( this ).children(".price").html( parseInt($( this ).children(".price").html()*1.3));
//     $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.3) );
// 			ryanLev++;
// 		$( this ).children(".level").text("level " + ryanLev);
//   }
//   updateReport();
// })
