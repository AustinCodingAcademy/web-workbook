$(function() {
    // CAROUSEL SPEED
    $('.carousel').carousel({
            interval: 3000
        })
        // SMOOTH SCROLLING
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
        // MODAL PLUGIN
    $('#myModal').on('shown.bs.modal', function() {
            $('#myInput').focus()
        })
        // "Hello!" ANIMATION SETTINGS
    $('.animated').click(function() {
        var heading = $(this)
        heading.removeClass('rubberBand');
        setTimeout(function() {
            heading.addClass('rubberBand');
        }, .1);
    });
});
