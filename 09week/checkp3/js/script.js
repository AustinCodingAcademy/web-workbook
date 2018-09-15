$(document).ready(function() {
var data = {
    totalClicks:100, 
    totalCurrent:0, 
    totalRPS: 0
  };
  
  setInterval(goGo,1000);
  
  function goGo() {
    data.totalClicks += data.totalRPS;
    data.totalCurrent += data.totalRPS;
    updateReport();
  }
  
  function updateReport() {
    $("#currentTotal").text(Math.floor(data.totalCurrent));
    $("#rps").text((data.totalRPS/70.4).toFixed(3));
  }
  
  $("#catNip").click(function (){
    data.totalClicks ++;
    data.totalCurrent ++;
    updateReport();
  })
  
  $(".button").click(function (){ 
    var addVal = $(this).data( "cost" );
    if ($(this).data( "cost" ) < data.totalCurrent ) {
      data.totalCurrent -=  parseFloat($(this).data( "cost" ).toPrecision(2));
      data.totalRPS += parseFloat($(this).data( "val" ));
      $( this ).children("span").html( parseInt($( this ).children("span").html()*1.15)); 
      $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) ); 
    }
    updateReport();
  });

  $('#fertilizer').click(function fertilizer() {
    $('.fert').prepend('<img src="https://www.orau.org/ptp/collection/consumer%20products/fertilizer.jpg"></img>');
});
$('#kitten').click(function kitten(){
    $('.kitt').prepend('<img src=https://t1.pixers.pics/img-1fb6f67c/posters-vue-de-dessus-de-bebe-chat-chaton-sur-fond-blanc.jpg?H4sIAAAAAAAAA3WOS27DMAxEryMDckhZP9sHyDZHMGRLTt36I0hKG_T0pRFkWXBBcoCZefDYs5sDTGEvIcG2eL8GmJeVvtynkJffwJAr1VY9qStDxKo_vkOa0hFZrRSvBWpuhOFa66r_ceTcXPpiH6XE3ANkeYnLk-JoTRmmLUODwgK2oLu2GxvtcTaNGGKdi9u9S54i8dniJe53judUbxSLyO2JUNKyMWI6qKywz3iv4J_C1w3kgusNDIKWgAKMOaXhejOoJQpjBu9Gp5QMk7QWZadHa60btfQSg5GEQy1_T319GzABAAA=></img>')
});
$('#cat').click(function cat(){
    $('.ca').prepend('<img src=https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimages.hellogiggles.com%2Fuploads%2F2015%2F12%2F11083247%2Fcat.jpg&w=700&q=85></img>')
});
$('#clowder').click(function clowder(){
    $('.clow').prepend('<img src=https://totallycoolpix.com/images/tcp_thumbnails/1527/cats-island__tcp_large.jpg></img>')
})
});

