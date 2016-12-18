$( document ).ready(function() {
  $('#nav').affix({
      offset: {
          top: $('#nav').offset().top
        }
    });

    $('.carousel').carousel({
		interval: 3000
	})
});
