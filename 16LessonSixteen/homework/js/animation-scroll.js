
// Slap Animation Setup (toggle)

$(document).ready(function(){
  // gettind the element with the "my_button" class and making something happen when you click it
    $('.my_button').click(function(e){
        e.preventDefault();
        // setting up a variable called "test" and setting it equal to the element attached to the class of "toggle_me"
        var test = $('.toggle_me');
        // giving an if/then/else statement that asks if it already has the "infinite" class.
        if(test.hasClass('infinite')) {
          // if it does, remove that class
            test.removeClass('infinite');
        }else{
          // if it does NOT then add it
            test.addClass('infinite');
        }
    });
});

// Scroll Animation Setup
//
// $(function() {
//   //#stupid_show is the id on the element that we need to animate
//     var animateOnScroll = $("#FadeIn");
//     $(window).scroll(function() {
//         var scroll = $(window).scrollTop();
// // the 800 number is the pixels from the top. that's the point where we want the animation to happen
//         if (scroll >= 800) {
//           // "flash" is the actual animation class that I'm adding the the #stupid_show element
//             animateOnScroll.addClass("FadeIn");
//         }
//     });
// });

// One time Animation Setup
// 
// $(function animationHover(element){
//     element = $('.just_once');
//     var moveIt = $('.one_time_image');
//     element.Hover(
//         function() {
//           // this whole function is setting up a click event for the element attached to the "just_once" class. It then adds the "jello" class to that object, waits for, in this case, 5000 milliseconds and then removes that class.
//             this.addClass('jello');
//             //wait for animation to finish before removing classes
//             window.setTimeout( function(){
//                 this.removeClass('jello');
//             }, 5000);
//
//         });
// });
