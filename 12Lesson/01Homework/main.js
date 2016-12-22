$('.animated').click(function() {
  var heading =  $(this)
  heading.removeClass('fadeInUp');
  setTimeout(function() {
    heading.addClass('fadeInUp');
  }, 10);
});
