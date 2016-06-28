var animatedElements = $('.animated');

$(window).on('scroll', function () {

    var windowHeight = $(window).height();
    var windowTop = $(window).scrollTop();
    var windowBottom = windowTop + windowHeight;

    $.each(animatedElements, function() {

        var element = $(this);

        var elementHeight = element.outerHeight();
        var elementTop = element.offset().top;
        var elementBottom = elementHeight + elementTop;

        if(elementBottom >= windowTop && elementTop <= windowBottom) {

            element.addClass('the-animation');
        }
        else {
            element.removeClass('the-animation');
        }

    });
});

$(function() {
  var animateOnScroll = $("#flash");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 400) {
      animateOnScroll.addClass("shake");
    }
  });
});
