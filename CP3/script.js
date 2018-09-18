$(document).ready(function(){

  $('.fist').click(function() {
    /*$('.count').html(function(i, val) {return val++});*/
    $('.count').html(function(i, val) { return val*1+1 });
    Materialize.toast('Ouuu, you hit me!', 2000)
    });

  });