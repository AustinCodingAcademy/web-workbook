//= require jquery
//= require_tree .

$(document).ready(function() {

$(document).ready( function(e) {
    $('.WB').mouseenter( function( evt ) {
        $('.WBdetail').toggleClass("animated reveal");
      });
    });
});
function randOrd() {
    return (Math.round(Math.random())-0.5);
}
$(document).ready( function(e) {
    $('.WB').mouseleave( function( evt ) {
        $('.WBdetail').toggleClass("animated out");
    });
});
$(document).ready(function() {
	var klasses = [ 'bounceIn', 'bounceInLeft', 'bounceInRight', 'fadeInUp','fadeInDown', 'fadeInLeft', 'fadeInRight', 'flipInX', 'rotateIn', 'bounceIn', 'fadeInUp','fadeInDown', 'fadeInLeft', 'fadeInRight', 'flipInX', 'rotateIn', 'bounceIn', 'fadeInUp','fadeInDown', 'fadeInLeft', 'fadeInRight', 'flipInX', 'rotateIn', 'bounceIn', 'fadeInUp','fadeInDown', 'fadeInLeft', 'fadeInRight', 'flipInX', 'rotateIn', 'bounceIn', 'fadeInUp','fadeInDown', 'fadeInLeft', 'fadeInRight' ];
    klasses.sort( randOrd );
    $('.WBdetail').each(function(i, val) {
        $(this).addClass(klasses[i]);
    });
});

// JS for animate CSS
(function ($) {

    $.fn.animateCSS = function (effect, delay, callback) {

        // Return this to maintain chainability
        return this.each(function () {

            // Cache $(this) for speed
            var $this = $(this);

            // Check if delay exists or if it's a callback
            if (!delay || typeof delay == 'function') {

                // If it's a callback, move it to callback so we can call it later
                callback = delay;

                // Set the delay to 0 for the setTimeout
                delay = 0;
            }

            // Start a counter so we can delay the animation if required
            var animation = setTimeout(function () {

                // Add the animation effect with classes
                $this.addClass('animated ' + effect);

                // Check if the elemenr has been hidden to start with
                if ($this.css('visibility') == 'hidden') {

                    // If it has, show it (after the class has been added)
                    $this.css({
                        'visibility': 'visible'
                    });

                }

                // If the element is hidden
                if ($this.is(':hidden')) {

                    // Show it
                    $this.show();

                }

                // Event triggered when the animation has finished
                $this.bind('animationend webkitAnimationEnd oAnimationEnd', function () {

                    // Add a callback event
                    if (typeof callback == 'function') {

                        // Execute the callback
                        callback.call(this);

                    }

                });

            // Specify the delay
            }, delay);

        });

    };



})
(jQuery);
