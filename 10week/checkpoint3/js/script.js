
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

// didnt ever figure out how to make the below work
// function buyClickStocking(){
// 	var stockingCost = Math.floor(coal - 25);
// 	if (coal >= clickStocking){
// 		cpc++;
// 		coal -= clickStocking;
// 		document.getElementById('clickStocking').innerHTML = clickStocking;
// 	}
// 	var nextCost = Math.floor(25 * Math.pow(1, cpc));
// 	document.getElementById('clickBiggerStocking').innerHTML = nextCost;
// }
//
// function buyBad(){
// 	var badCost = Math.floor(coal - 100);
// 	if (coal >= badCost){
// 		bad += 1;
// 		cps += 1;
// 		coal -= badCost;
// 		document.getElementById('coal').innerHTML = (coal);
// 		document.getElementById('coalPerSecond').innerHTML = (cps);
// 	}
// 	var nextCost = Math.floor(50 * Math.pow(3, bad));
// 	document.getElementById('badCost').innerHTML =(badCost);
// }


})
