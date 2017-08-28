$('.panel').hover(function(){
  $(this).css('box-shadow', '0px 5px 30px rgba(0,0,0,.5)');
  $(this).css('transform', 'scale(1.025)')
}, function(){
  $(this).css('box-shadow', '0px 1px 5px rgba(0,0,0,.5)');
  $(this).css('transform', 'scale(1)');
});
