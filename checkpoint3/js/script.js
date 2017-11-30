 var click = 0;
 var beenClicked = false;
 var canClick = true;
 $("html").click(function() {
   if (window.canClick == true) {

     var colour = '#' + Math.floor(Math.random() * 16777215).toString(16);
     click++;
     timing();
     $(".title").text(click);
     $("body").css({
       backgroundColor: colour
     });
   }
 });

 var sec = $(".timer").text() || 0;

 function timing() {
   if (beenClicked == false) {
     beenClicked = true;
     $(".timer").show();
     var timer = setInterval(function() {
       $(".timer").text(--sec);
       if (sec == 0) {
         $(".timer").fadeOut('fast');
         clearInterval(timer);
         window.canClick = false;
         if (click == 1) {
           $(".title").append(" Click");
         } else {
           $(".title").append(" Clicks");
         }
         $(".sub").show().text("or " + window.click * 6 + " a minute.");
         $("#reset").fadeIn(1000);
       }
     }, 1000);
   }
 }

 $("#reset").click(function(event) {
   event.stopPropagation();
   $("#reset").hide();
   $(".sub").hide();
   $(".title").text("Click Away");
   $(".timer").text("10");
   sec = $(".timer").text() || 0;
   click = 0;
   beenClicked = false;
   canClick = true;
 });