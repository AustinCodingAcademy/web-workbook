$(function() {
    $('.animate').hover(function() {
        var heading = $(this);
        heading.removeClass('rubberBand');
        setTimeout(function() {
            heading.addClass('rubberBand');
        }, 10);
    })
});
