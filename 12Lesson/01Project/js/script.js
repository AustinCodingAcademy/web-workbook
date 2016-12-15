$('.animated').click(function() {
  var heading =  $(this)
  heading.removeClass('bounce');
  setTimeout(function() {
  heading.addClass('bounce');
  }, 10);
});
