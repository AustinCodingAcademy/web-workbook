$(document).ready(function(){

  // Add scrollspy to <body>
  $('body').scrollspy({
    target: ".navbar",
    offset: 5
  });

//Smooth scrollspy
// $('div > ul > li > a, .navbar-brand').bind('click', function() {
//   $('html, body').stop().animate({
//     scrollTop: $($(this).attr('href')).offset().top - 50
//   }, 1500, 'easeInOutExpo');
//   event.preventDefault();
// });
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//flip button

  $('.animated').click(function() {
    var heading =  $(this);
    heading.removeClass('flipInX');
    setTimeout(function() {
      heading.addClass('flipInX');
    }, 10);
  });

  //Owl Carousel
  $("#work").owlCarousel({
    loop:true,
    margin: 0,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        nav:true
      },
      480:{
        items:2,
        nav:true
      },
      800:{
        items:3,
        nav:true,
        loop:false
      },
      1200:{
        items:4,
        nav:true,
        loop:false
      },
      1400:{
        items:5,
        nav:true,
        loop:false
      },
    }
  });

// jot form
window.handleIFrameMessage = function(e) {
    var args = e.data.split(":");
    var iframe = false;
    if (args.length > 2) {
        iframe = document.getElementById("JotFormIFrame-" + args[2]);
    } else {
        iframe = document.getElementById("JotFormIFrame");
    }
    if (!iframe) return;
    switch (args[0]) {
        case "scrollIntoView":
            iframe.scrollIntoView();
            break;
        case "setHeight":
            iframe.style.height = args[1] + "px";
            break;
        case "collapseErrorPage":
            if (iframe.clientHeight > window.innerHeight) {
                iframe.style.height = window.innerHeight + "px";
            }
            break;
        case "reloadPage":
            window.location.reload();
            break;
    }
    var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false;
    if (isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) {
        var urls = {
            "docurl": encodeURIComponent(document.URL),
            "referrer": encodeURIComponent(document.referrer)
        };
        iframe.contentWindow.postMessage(JSON.stringify({
            "type": "urls",
            "value": urls
        }), "*");
    }
};
if (window.addEventListener) {
    window.addEventListener("message", handleIFrameMessage, false);
} else if (window.attachEvent) {
    window.attachEvent("onmessage", handleIFrameMessage);
}
if (window.location.href && window.location.href.indexOf("?") > -1) {
    var ifr = false;
    if (args.length > 2) {
        ifr = document.getElementById("JotFormIFrame-" + args[2]);
    } else {
        ifr = document.getElementById("JotFormIFrame");
    }
    var get = window.location.href.substr(window.location.href.indexOf("?") + 1);
    if (ifr && get.length > 0) {
        var src = ifr.src;
        src = src.indexOf("?") > -1 ? src + "&" + get : src + "?" + get;
        ifr.src = src;
    }
}




}); // end doc ready
