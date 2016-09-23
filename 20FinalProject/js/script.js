$(function() {
    $('.carousel').carousel({
        interval: 3000
    })
    $('.click-animate').click(function() {
        var heading = $(this)
        heading.removeClass('flip');
        setTimeout(function() {
            heading.addClass('flip click-animate-activate');
        }, 1);
    })
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    })
    $('#myModal').on('shown.bs.modal', function() {
        $('#myInput').focus()
    })
});
