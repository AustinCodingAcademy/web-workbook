'use strict';
//
// $(document).click(function() {
//   $("#pinwheel").toggle("bounce", {
//     times: 3
//   }, "slow");
// });

var data = {
  totalRevs: 100,
  totalCurrent: 0,
  totalRPS: 10
};

setInterval(spin, 1000);

function spin() {
  data.totalRevs += data.totalRPS;
  data.totalCurrent += data.totalRPS;
  $("#pinwheel").css({
    'transform': 'rotate(' + data.totalRevs + 'deg)'
  });
  updateReport();
}

function updateReport() {
  $("#Total").text(Math.floor(data.totalCurrent));
  $("#rps").text((data.totalRPS / 100).toFixed(3));
}


$("#pinwheel").click(function() {
  data.totalRevs++;
  data.totalCurrent++;
  updateReport();
})

$(".button").click(function() {
  var addVal = $(this).data("cost");
  if ($(this).data("cost") < data.totalCurrent) {
    data.totalCurrent -= parseFloat($(this).data("cost").toPrecision(2));
    data.totalRPS += parseFloat($(this).data("val"));
    $(this).children("span").html(parseInt($(this).children("span").html() * 1.5));
    $(this).data("cost", parseInt($(this).data("cost") * 2));
  }
  updateReport();
})