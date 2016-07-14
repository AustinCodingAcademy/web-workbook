var items = $(".parallax");

$(function(){
  $(window).on("beforeunload", function(){
    $(window).scrollTop(0);
  });

  var start = $(window).scrollTop();
  $(window).scroll(function(){
    var dy = $(window).scrollTop() - start;
    start = $(window).scrollTop();
    onScroll(dy);
  });
});

function onScroll(dy){
  items.each(function(){
    var rate = $(this).attr("data-scroll-rate");
    var distance = dy * rate;
    $(this).css("top", "-=" + distance);
  });
}
