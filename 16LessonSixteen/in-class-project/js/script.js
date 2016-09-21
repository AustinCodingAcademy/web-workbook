$('.animate').hover(function() {
  var heading =  $(this);
  heading.removeClass('pulse');
  setTimeout(function() {
    heading.addClass('pulse');
  }, 10);
});
