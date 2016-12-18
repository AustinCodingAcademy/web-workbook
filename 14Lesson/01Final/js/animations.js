$('.animated').mouseover(function() {
  var heading =  $(this)
  heading.removeClass('jello');
  setTimeout(function() {
    heading.addClass('jello');
  }, 10);
});
