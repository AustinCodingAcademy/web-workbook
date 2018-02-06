$(document).ready(function() {

  // Gets the video src from the data-src on each button
  var $imageSrc;
  $('.gallery img').click(function() {
    $imageSrc = $(this).data('bigimage');
    //$imageTitle = $(this).data('data-title');
  });
  console.log($imageSrc);
  //console.log($imageTitle);
  // when the modal is opened autoplay it
  $('#my-modal').on('shown.bs.modal', function(e) {

    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get

    $("#image").attr('src', $imageSrc);
  })

  // reset the modal image
  $('#my-modal').on('hide.bs.modal', function(e) {
    // a poor man's stop video
    $("#image").attr('src', '');
  })

  // document ready
});
