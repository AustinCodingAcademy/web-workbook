$('.animated').click(function() {
  var heading =  $(this)
  heading.removeClass('slideInUp');
  setTimeout(function() {
    heading.addClass('slideInUp');
  }, 10);
});
