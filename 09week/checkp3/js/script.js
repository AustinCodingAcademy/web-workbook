$(document).ready(function() {
var data = {
    totalClicks:100, 
    totalCurrent:0, 
    totalSpeed: 0
  };
  //sets speed of catnip val increase
  setInterval(goGo,1000);
  
  //adds the values together and updates report within the setInterval method above
  function goGo() {
    data.totalClicks += data.totalSpeed;
    data.totalCurrent += data.totalSpeed;
    updateReport();
  }
  //updates the current total with new data
  function updateReport() {
    $("#currentTotal").text(Math.floor(data.totalCurrent));
    $("#rps").text((data.totalSpeed).toFixed(0));
  }
  //adds value to the current total when the catNip id is clicked
  $("#catNip").click(function (){
    data.totalClicks ++;
    data.totalCurrent ++;
    updateReport();
  })
  //conditional determining whether or not a button value can be applied based on current total and button data value
  $(".button").click(function (){ 
    var addVal = $(this).data( "cost" );
    if ($(this).data( "cost" ) < data.totalCurrent ) {
      data.totalCurrent -=  parseFloat($(this).data( "cost" ).toPrecision(2));
      data.totalSpeed += parseFloat($(this).data( "val" ));
      $( this ).children("span").html( parseInt($( this ).children("span").html()*1.15)); 
      $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) ); 
    }
    updateReport();
  });
// code to add images on button clicks
  $("#fertilizer").click(function () {
      if ($('.fert').children().length === 0){
        $('.fert').prepend('<img src="https://www.orau.org/ptp/collection/consumer%20products/fertilizer.jpg"></img>');
      } else if ($('.fert').children().length === 1){
        $('.fert').children().detach();
        $('.fert').prepend('<img src=https://lda.lowes.com/is/image/Lowes/content-panel-desktop?src=Lowes/DP18-8047_031918_FertilizerWeedControl_dt_cp_2-4_StarterFertilizer></img>')
      }
    });

$("#kitten").click(function (){
    if ($('.kitt').children().length === 0){
        $('.kitt').prepend('<img src=https://t1.pixers.pics/img-1fb6f67c/posters-vue-de-dessus-de-bebe-chat-chaton-sur-fond-blanc.jpg?H4sIAAAAAAAAA3WOS27DMAxEryMDckhZP9sHyDZHMGRLTt36I0hKG_T0pRFkWXBBcoCZefDYs5sDTGEvIcG2eL8GmJeVvtynkJffwJAr1VY9qStDxKo_vkOa0hFZrRSvBWpuhOFa66r_ceTcXPpiH6XE3ANkeYnLk-JoTRmmLUODwgK2oLu2GxvtcTaNGGKdi9u9S54i8dniJe53judUbxSLyO2JUNKyMWI6qKywz3iv4J_C1w3kgusNDIKWgAKMOaXhejOoJQpjBu9Gp5QMk7QWZadHa60btfQSg5GEQy1_T319GzABAAA=></img>')   
    } else if ($('.kitt').children().length === 1){
        $('.kitt').children().detach();
        $('.kitt').prepend('<img src=https://www.royalcanin.com/~/media/Royal-Canin/Content/persian-kittens.ashx></img>')
    }
});

$("#cat").click(function (){
    if ($('.ca').children().length === 0){
    $('.ca').prepend('<img src=https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimages.hellogiggles.com%2Fuploads%2F2015%2F12%2F11083247%2Fcat.jpg&w=700&q=85></img>')
    } else if ($('.ca').children().length === 1){
        $('.ca').children().detach();
        $('.ca').prepend('<img src=https://cdn.lifebuzz.com/images/181017/lifebuzz-f783f9680b8cf64711ac7c40a78a434c-limit_2000.jpg></img>')
    }
});

$("#clowder").click(function (){
    if ($('.clow').children().length === 0){
        $('.clow').prepend('<img src=https://totallycoolpix.com/images/tcp_thumbnails/1527/cats-island__tcp_large.jpg></img>')
    } else if ($('.clow').children().length === 1){
        $('.clow').children().detach();
        $('.clow').prepend('<img src=https://cdn.theatlantic.com/assets/media/img/photo/2015/03/aoshima-japans-cat-island/c01_RTR4RUGT/main_900.jpg?1425394297></img>')
    }
});
});

