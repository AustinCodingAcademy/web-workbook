$(document).ready(function () {

  $(window).scroll (function () {

    var verticalScroll = $(this).scrollTop();
    if (verticalScroll >= 500) {

          $('#pancakes').addClass('animated flipInX infinite');
        }

    });
    $(window).scroll (function () {

      var verticalScroll = $(this).scrollTop();
      if (verticalScroll >= 600) {

            $('#my_jello').addClass('animated jello');
          }

      });
});
