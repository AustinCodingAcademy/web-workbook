$(document).ready(function()
{

//  PRE-HIDDEN ELEMENTS

  // $(".timerBox").hide();

//   CLICK FUNCTIONS

  // $("#start").click(function() {
//initiate program    $()

  $(".beginBtn").mousedown(function(){
    // $(this).css('margin-top', 60);
    // $('iframe').css('margin-top', -10);
    // $('.timerBox').css('margin-top', -10);

    });

  $(".beginBtn").mouseup(function(){
    // $(this).css('margin-top', 50);
    // $('iframe').css('margin-top', 0);
    // $('.timerBox').css('margin-top', 0);
    // });

  $("#start").click(function(){
    // $(".timerBox").show("slow");
    // function for timer
  });

//   GIF ANIMATIONS

  $("#jacksAnimate").hover(
      function()
      {
          $(this).attr("src", "img/jacks.gif");
      },
      function()
      {
          $(this).attr("src", "img/jacks-still.gif");
      });

  $("#kickAnimate").hover(
      function()
      {
          $(this).attr("src", "img/kick.gif");
      },
      function()
      {
          $(this).attr("src", "img/kick-still.gif");
      });

  $("#pushAnimate").hover(
      function()
      {
          $(this).attr("src", "img/pushup.gif");
      },
      function()
      {
          $(this).attr("src", "img/pushup-still.gif");
      });

  $("#plankAnimate").hover(
      function()
      {
          $(this).attr("src", "img/plank.gif");
      },
      function()
      {
          $(this).attr("src", "img/plank-still.gif");
      });

  $("#liftAnimate").hover(
      function()
      {
          $(this).attr("src", "img/lift.gif");
      },
      function()
      {
          $(this).attr("src", "img/lift-still.gif");
      });

  $("#chinAnimate").hover(
      function()
      {
          $(this).attr("src", "img/chinup.gif");
      },
      function()
      {
          $(this).attr("src", "img/chinup-still.gif");
      });

  $("#burpAnimate").hover(
      function()
      {
          $(this).attr("src", "img/burpee.gif");
      },
      function()
      {
          $(this).attr("src", "img/burpee-still.gif");
      });

  $("#wiggleAnimate").hover(
      function()
      {
          $(this).attr("src", "img/wiggle.gif");
      },
      function()
      {
          $(this).attr("src", "img/wiggle-still.gif");
      });


      //  TIMER

  function timer(){
    for(i=0;i<=60;i++){
      document.getElementById("timer").innerHTML = i;
    }
  };


  var timoutID = window.setTimeout(timer, 1000)
});
