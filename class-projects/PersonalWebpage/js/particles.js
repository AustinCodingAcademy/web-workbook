var particles = $(".particle");
var colors = ["#FFFFFF", "#B2B59D", "#87AFE0"];
const xMin = 25; const xMax = 75;
const yMin = 40; const yMax = 95;

$(function(){
  particles.each(function(){
    var scale = Math.abs(parseFloat($(this).attr("data-scroll-rate")));
    var randColor = Math.floor(Math.random() * colors.length);
    var randX = Math.random() * (xMax - xMin) + xMin;
    var randY = Math.random() * (yMax - yMin) + yMin;
    $(this).css("background-color", colors[randColor]);
    $(this).css("transform", "scale(" + scale + ")");
    $(this).css("left", randX.toString() + "%");
    $(this).css("top", randY.toString() + "%");

    if(scale < 1){
      $(this).css("z-index", "-1");
    }
  });
});
