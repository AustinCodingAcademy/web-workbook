var home = $("#home");
var title = $("#title");
var webpages = $(".webpage");
const webpageHeight = 0.16;
const startFade = 0.85;


$(function(){

  //calculate margin between webpage elements
  var margin = $(".col-3").height() * ((1 - (webpageHeight * 5)) / 4);

  //set up position of webpage elements
  $(".col-3").each(function(){
    pos = 0;
    $(this).find(".webpage").each(function(){
      $(this)
      .css("height", (webpageHeight * 100) + "%")
      .css("top", pos+"px");
      pos += $(this).height() + margin;
    });
  });

  $(window).scroll(function(){

    //title animation
    var titleTop = title.offset().top;

    var opacity = (titleTop - (home.height() * startFade)) / (home.height() * (1 - startFade));
    title.css("opacity", -opacity);

  });
});
