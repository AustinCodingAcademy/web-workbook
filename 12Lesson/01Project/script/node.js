$('.animated').click(function() {
  var heading =  $(this)
  heading.toggleClass('wobble');
  setTimeout(function() {
    heading.addClass('bounce');
  }, 10);
});
