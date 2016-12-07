$('.animated').hover(function() {
  var heading =  $(this)
  heading.removeClass('bounce');
  setTimeout(function() {
    heading.addClass('bounce');
  }, 10);
});

$('.animatedone').hover(function() {
  var heading =  $(this)
  heading.removeClass('flash');
  setTimeout(function() {
    heading.addClass('flash');
  }, 10);
});
