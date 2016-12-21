$(document).ready(function() {

    $(window).scroll(function() {
        $(".top").css("opacity", 1 - $(window).scrollTop() / 250);
    });
    $(window).scroll(function() {
        $(".top2").css("opacity", 2 - $(window).scrollTop() / 350);
    });
});
