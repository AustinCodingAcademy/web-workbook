$('.flight-tab').click(function(){
  $(this).addClass('selected');
  $('.hotel-tab').removeClass('selected');
  $('.car-tab').removeClass('selected');
});

$('.hotel-tab').click(function(){
  $(this).addClass('selected');
  $('.flight-tab').removeClass('selected');
  $('.car-tab').removeClass('selected');
});

$('.car-tab').click(function(){
  $(this).addClass('selected');
  $('.flight-tab').removeClass('selected');
  $('.hotel-tab').removeClass('selected');
});
