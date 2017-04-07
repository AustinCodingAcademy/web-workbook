$(function(){
    $("#menu").menu();
    // $('#menu').click('expand');

  // $('.flexmiddle').hover(function(){
  //     $('.flexleft').animate({
  //       width: '100%', color: 'blue'}, 'slow', 'linear');
  //     $('.flexleft').animate({
  //         height: '200px', }, 'slow', 'linear');
  //     $('.flexmiddle').animate({
  //       width: '600px',  }, 2000, 'linear');
  //     $('.flexmiddle').animate({
  //       height: '700px', }, 2000, 'linear');
  //     })

    $('#weeknum').change(function(){
      location.href = $(this).val();
    });

    $('#gamenum').change(function(){
      location.href = $(this).val();


    })
  })
