'use strict';

$(document).ready(function() {
  // Put app logic here



var lastChild = ('[data-block]')
var lastchildValue =
var currentValue =
if (!lastChildValue || )


  //drag & drop
$('[data-block]').draggable({ revert: 'invalid' });
$('[data-stack]').droppable({
  drop:function(event, ui) {
$(ui.draggable).appendTo(this).attr('style', 'postition: relative');
  }
});

function checkWinner() {
    if((dataCell0.text() != '') && (dataCell0.text () == dataCell1.text())
     && (dataCell1.text() == dataCell2.text())){

});
