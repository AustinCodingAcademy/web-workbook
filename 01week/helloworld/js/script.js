// $('h1').click(function(){
//   $(this).animate({
//     opacity: .25
//   });
// });


$(document).ready(function(){
  $('h1').animate({
    opacity: 1,
    top: "+=25"
  }, {
    duration: 1000
  });
});
