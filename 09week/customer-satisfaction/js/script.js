'use strict'
$( document ).ready(function() {
  let intRating = $('#slideRate')[0].defaultValue;
  let $form = $('#collectorForm'),
      url = 'https://script.google.com/macros/s/AKfycby8d9cfTIayB0iStTtUi7sUcO8DrxMQ_fKqAkAr_c9SbY0q8Jk/exec'
  $('#getVal').html(intRating);
  $('#submit-form').on('click', function(e) {
    e.preventDefault();
    let jqxhr = $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: $form.serialize()
    })
    .done(function(){
      alert("Your response has been collected. Thanks!");
      $('#collectorForm').each(function(){
        $('#getVal').html(intRating);
        this.reset();
      });
    });
  })
$('#slideRate').change(
function slideValue (){
  let rating = $('#slideRate')[0].value;
  $('#getVal').html(rating);
  if (Number(rating) < 50) {
    $('#getVal').css({"color": "red"});
  }else{
      $('#getVal').css({"color": "green"});
    }

  
})

$('#reset-form').click(function(){
  $('#getVal').html(intRating);
})



});
