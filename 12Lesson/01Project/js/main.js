$('.animated').click(function() {
  var heading =  $(this)
  heading.removeClass('slideOutRight');
  setTimeout(function() {
    heading.addClass('slideOutRight');
  }, 10);
});
