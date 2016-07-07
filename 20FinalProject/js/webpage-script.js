var height = $(".webpage:visible").height(); //height of a webpage block
var margin = 20; //margin between webpage blocks
var delay = 0; //delay between animations
var fadeDelay = 550; //delay between fade animations

$(function(){

  //hide the content of all of the webpage blocks
  $(".webpage").each(function(){
    $(this).children().hide();
  });

  //set the height of #webpage-list to how high all of the webpage blocks will be after animation
  $(".webpage-col").height($(".webpage-col:first-of-type").children().length * (height + margin));
  onResize();

  //resize page elements when page is resized
  $(window).resize(onResize);

  //apply the animation(s)
  $(".webpage-col").each(function(){
    var pos = 0;
    $(this).find(".webpage").each(function(){
      $(this).delay(delay).animate({top: pos.toString()+"px"});
      $(this).children().delay(fadeDelay).fadeIn();
      pos += height + margin;
    });
    delay += 50;
  });
});

function onResize(){
  $("#webpage-list").height(window.innerWidth < 992 ? $(".webpage").length * (height + margin) : $(".webpage-col:first-of-type").children().length * (height + margin));
}
