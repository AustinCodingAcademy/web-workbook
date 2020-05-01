var itemCount = 0;

$('.add').click(function (){
  itemCount ++;
  $('#itemCount').html(itemCount).css('display', 'block');
  $(this).siblings('.itemDetails').clone().appendTo( "#cartItems" ).append('<button class="removeItem">Remove Item</button>');
}); 

$('.clear').click(function() {
  itemCount = 0;
  $('#itemCount').html('').css('display', 'none');
  $('#cartItems').html('');
}); 

$('i').click(function(){
  $('#shoppingCart').toggle();
});

$('#shoppingCart').on('click', '.removeItem', function(){
    $(this).parent().remove();  
    itemCount --;
    $('#itemCount').html(itemCount);
  
    if (itemCount === 0) {
      $('#itemCount').html('').css('display', 'none');
      $('#shoppingCart').css('display', 'none');
    }
});


