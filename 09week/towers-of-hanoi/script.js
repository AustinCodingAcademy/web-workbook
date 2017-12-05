'use strict';

$(document).ready(function() {
  //making element draggable
  $('[data-block]').draggable({
    // helper: 'clone'
  });

//making element drop into another data-stack
  $('[data-block]').droppable({
    drop: function(event,ui) {
      $(ui.draggable).detach([data-stack]).css({float: left}).appendTo([data-stack]);
    }
  })


});
