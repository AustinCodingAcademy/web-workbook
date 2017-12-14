
$(document).ready(function() {

// variable names
  var data = {
    coalOwned: 0,
    cps: 0,
    clicks: 0,
    stocking: 0,
    bad: 0,

  };

// how many coals clicked
$('#coal').click(coalClicked);


function coalClicked() {
  data.coalOwned ++;
  updateCoal();
}

// Tells you how many coal you have left based on coal clicked
function updateCoal() {
  if (data.coalOwned === 1) {
    $('#currentTotal').text(data.coalOwned + ' coal!');
  } else {
    $('#currentTotal').text(data.coalOwned + ' lumps of coal!');
  }
}

$("button").click(function (){
  var addVal = $(this).data( "cost" );
  if ($(this).data( "cost" ) < data.coalOwned ) {
    data.coalOwned -=  parseFloat($(this).data( "cost" ));
    data.totalCPS += parseFloat($(this).data( "val" ));

  }
  updateCoal();
})

// this was my first attempt i did on codepen and didnt know how to fix it
// var coal = 0;
// var bad = 0;
// var cpc = 1;
// var coalPerSecond = 0;
// var clicks = 0;
// var maxClicks = 101;
//
// function coalClick(){
// coal += cpc;
// clicks += 1;
//
// }
//
// function cps(){
// 	coal += coalPerSecond;
// 	document.getElementById('coal').innerHTML = prettify(coal);
// 	document.getElementById('coalPerSecond').innerHTML = prettify(coalPerSecond);
// }
//
// function buyClickStocking(){
// 	var stockingCost = Math.floor(coal*(100));
// 	if (coal >= clickBiggerStocking){
// 		cpc++;
// 		coal -= clickBiggerStocking;
// 		document.getElementById('buyBiggerStocking').innerHTML = clickBiggerStocking;
// 	}
// 	var nextCost = Math.floor(100 * Math.pow(1, cpc));
// 	document.getElementById('clickBiggerStocking').innerHTML = nextCost;
// }
//
// function buyBad(){
// 	var badCost = Math.floor(coal - 50);
// 	if (coal >= badCost){
// 		bad += 1;
// 		coalPerSecond += 1;
// 		coal -= badCost;
// 		document.getElementById('coal').innerHTML = prettify(coal);
// 		document.getElementById('coalPerSecond').innerHTML = prettify(coalPerSecond);
// 	}
// 	var nextCost = Math.floor(50 * Math.pow(3, bad));
// 	document.getElementById('badCost').innerHTML = prettify(badCost);
// }
//
// window.setInterval(cps, 1000);
//
//
//
// var maxClicks = 101;
//
// function clicks(){
// 	if(clicks == maxClicks){
// 		alert("YOU'VE BEEN BAD THIS YEAR");
// 	}
// }

window.setInterval(clicks, 1);
