 $(".employeeProf").hide();
window.onload = function(){

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


$(".button").click(function (){
var addVal = $(this).data( "cost" );
if ($(this).data( "cost" ) <= data.totalPaper ) {
data.totalPaper -= parseFloat($(this).data( "cost" ).toPrecision(2));
data.totalPaperSec += parseFloat($(this).data( "val" ));
$( this ).children(".price").html( parseInt($( this ).children(".price").html()*1.3));
$( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.3) );

if ($( this ).children(".level").text()== "HIRE") {
$( this ).children(".level").html("level <span class='lev'>1</span>");
} else {
console.log($( this ).find(".lev").text());
$( this ).find(".lev").text(parseInt($( this ).find(".lev").text())+1);
}
}
updateReport();
})

$("#michael").click(function (){
  if ($(this).data( "cost" ) <= data.totalPaper ) && ($( this ).children(".level").text()== "HIRE") {
    $("#michaelProf").show();
  }
})
} //closing onload
