$(document).ready(function(){
      $(window).scroll(function() {
        if ($(document).scrollTop() > 200) {
          $(".navbar").css("background-color", "rgba(0,0,0,0.25)");
        } else {
          $(".navbar").css("background-color", "transparent");
        }
      });
    });
