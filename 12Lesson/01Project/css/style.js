$('.animated').hover(function() {
  var heading =  $(this)
  heading.removeClass('bounce');
  setTimeout(function() {
    heading.addClass('bounce');
  }, 10);
});

$('.animated').hover(function() {
  var heading =  $('tada')
  heading.removeClass('tada');
  setTimeout(function() {
    heading.addClass('tada');
  }, 10);
});
