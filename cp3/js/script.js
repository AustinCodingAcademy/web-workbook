var data = {
  totalRevs: 360,
  totalCurrent: 0,
  totalRPS: 0
  // make totalk current and rps to start form zero
};

setInterval(goGo, 1000);

function goGo() {
  data.totalRevs += data.totalRPS;
  data.totalCurrent += data.totalRPS;
  // this is use to make the css work
  updateReport();
}

function updateReport() {
  $("#currentTotal").text(Math.floor(data.totalCurrent));
  $("#rps").text((data.totalRPS / 1).toFixed(0));
  // this is use to keep track of the count of both the current total and rps.
}


$("#pies").click(function() {
  data.totalRevs++;
  data.totalCurrent++;
  updateReport();
  // this is use so you can click the img and it counts
})

$(".button").click(function() {
  var addVal = $(this).data("cost");
  if ($(this).data("cost") < data.totalCurrent) {
    data.totalCurrent -= parseFloat($(this).data("cost").toPrecision(2));
    data.totalRPS += parseFloat($(this).data("val"));
    // this is use so you cand do the click and all the counting with what needs to be done when everything is working.
  }
  updateReport();
})