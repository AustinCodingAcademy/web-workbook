var openMenu = $(".menu-button");
var closeMenu = $(".close");
var menuLinks = $(".menu-link");
var opacity = $(".opacity");
const WAIT = 250;

window.onload = function(){
  var posY = 39;
  menuLinks.each(function(){
    $(this)
    .css("top", posY + "px")
    .css("left", "-250px");

    posY += $(this).outerHeight(true);
  });

  openMenu.click(menuOpen);
  closeMenu.click(menuClose);

}

function menuOpen(){
  opacity.css("display", "block").animate({opacity: "1"});
  $(".menu").animate({width: "250px"});

  var delay = WAIT;
  menuLinks.each(function(){
    $(this)
    .delay(delay)
    .animate({left: "0px"});

    delay += WAIT;
  });
}

function menuClose(){
  var delay = WAIT * menuLinks.length;
  menuLinks.each(function(){
    $(this)
    .delay(delay)
    .animate({left: "-250px"});

    delay -= WAIT;
  });

  $(".menu")
  .delay(WAIT * (menuLinks.length + 1))
  .animate({width: "0px"});
  opacity
  .delay(WAIT * (menuLinks.length + 2))
  .animate({opacity: "0"}, function(){
    opacity.css("display", "none");
  });
}
