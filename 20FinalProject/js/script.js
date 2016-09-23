$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        margin: 5,
        items: 4,
        nav: true,
        responsive: {
            480: {
                items: 2
            },
            620: {
                items: 3
            },
            810: {
                items: 4
            },
            1400: {
                items: 6
            }
        }
    });
});
