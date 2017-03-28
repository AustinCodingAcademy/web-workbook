$(document).ready(function(){
    // tictactoe delay
    $("#toebtn").click(function () {
      $('.tictac').hide();
      setTimeout(function(){
        $('.tictac').fadeIn(1000);
        $("#toeframe").attr("src", "https://spazboy.github.io/web-workbook/09week/tictactoe/index.html");
    }, 1000);
  });

  $(".carousel-indicators").click(function(){
           $(".carousel").carousel('prev');
         })
         $(".left").click(function(){
           $(".carousel").carousel('prev');
         })
         $(".right").click(function(){
           $(".carousel").carousel('next');
         });
});
