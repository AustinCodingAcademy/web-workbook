
$(document).ready(function() {
    //navbar and footer can scroll
    $(".navbar a, footer a[href='#homePage']").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // jquery is used to help scroll effect
            // 900 is equal to 9 miliseconds
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function() {

                // hash will be added to url after scrolling
                window.location.hash = hash;
            });
        }
    });

    $(window).scroll(function() {
        $(".slideanim").each(function() {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });
})

var a = $(".navbar-default").offset().top;
$(document).on('scroll', function() {
    if ($(this).scrollTop() > 10) {
        $('.navbar-default').addClass("scrolled");
    } else {
        $('.navbar-default').removeClass("scrolled");
    }
});

$('body').bind('scroll', function() {});
