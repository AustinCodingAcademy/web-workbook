// $('a[href*=#]:not([href=#myCarousel]').click(function () {
//     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
//         location.hostname == this.hostname) {
//
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//         if (target.length) {
//             $('html,body').animate({
//                 scrollTop: target.offset().top
//             }, 1000);
//             return false;
//         }
//     }
// });


var carousel = $(".carousel"),
    currdeg = 0;

$(".next").on("click", {
    d: "n"
}, rotate);
$(".prev").on("click", {
    d: "p"
}, rotate);

function rotate(e) {
    if (e.data.d == "n") {
        currdeg = currdeg - 60;
    }
    if (e.data.d == "p") {
        currdeg = currdeg + 60;
    }
    carousel.css({
        "-webkit-transform": "rotateY(" + currdeg + "deg)",
        "-moz-transform": "rotateY(" + currdeg + "deg)",
        "-o-transform": "rotateY(" + currdeg + "deg)",
        "transform": "rotateY(" + currdeg + "deg)"
    });
}
