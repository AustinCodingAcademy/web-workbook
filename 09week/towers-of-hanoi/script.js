'use strict';

$(document).ready(function() {
  var pegClicked = ""
  $("[data-peg]").click(function() {
    console.log("clicked")
  if (pegClicked == "") {
    pegClicked = $(this).data( "peg" );
    console.log( "firstClick " + pegClicked );
    console.log($( this ).first().css( "width" ));
  } else if ( $( this ).children().length = 0 ) {
    console.log("secondClick");
  }
  /*  $( "peg1" ).data( "peg" );*/
  })

});


// $( "[data-peg='" + pegClicked + "']" ).first().css("width") > $( this ).first().css( "width" ) |
