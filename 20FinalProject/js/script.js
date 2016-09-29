$(document).ready(function() {

      // IFRAME PHONE SIZE

  $('.phoneFrame').click(function() {
    $("#showcaseFrame").attr({
      "width": "320px",
      "height": "580px"
    });
    $("#showcaseFrame").css({
      "padding-right": "10px",
      "padding-left": "10px",
      "border-top": "15px solid #323232"
    });
    $("#showcaseBox").css({
      "background-image":
      "url(../img/phoneScreen.png)",
      "background-size": "auto",
      "background-position": "center",
      "width": "1150px",
      "height": "600px",
      "border": "none",
      "padding": "0px 15px 0px 15px"
    });
  });



  // IFRAME TABLET SIZE

  $(".tabletFrame").click(function() {
    $("#showcaseFrame").attr({
      "width": "700px",
      "height": "600px",
  });
  $("#showcaseFrame").css({
    "padding-top": "0px",
    "padding-right": "10px",
    "padding-left": "10px",
    "border-top": "15px solid #323232"
  });
    $('#showcaseBox').css({
      "background-image":
      "url(../img/tabletScreen.png)",
      "background-position": "bottom",
      "background-size": "cover",
      "border": "none",
      "width": "780px",
      "height": "650px",
      "padding-top": "0px",
    });
  });



  // IFRAME COMPUTER SIZE

  $(".compFrame").click(function() {
    $("#showcaseFrame").attr({
      "width": "90%",
      "height": "650px",
    });
    $("#showcaseFrame").css({
      "padding-right": "10px",
      "padding-left": "10px",
      "padding-top": "0px",
      "border-top": "none",
    });
    $('#showcaseBox').css({
      "background-image":
      "url(../img/compScreen.png)",
      "background-size": "cover",
      "background-position": "center",
      "border-top": "15px solid #323232",
      "width": "95%",
      "padding-top": "0px",
      "height": "800px"
    });
  });

});



function myFunction() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar")

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
