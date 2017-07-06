// All about jQuery
$(document).ready(function() {
    $('div').hide();
});

$(document).ready(function() {
    $('div').dblclick(function() {
        $('div').fadeOut('fast');
    });
});

$(document).ready(function(){

  $('div').hover(
    function(){
        $(this).addClass('active');
    },
    function(){
        $(this).removeClass('active');
    }
  );

});

$(document).ready(function() {
    $('input').focus(function() {
        $('input').css('outline-color','#ff0000');
    });
});

$(document).ready(function() {
    $(document).keydown(function() {
        $('div').animate({left:'+=10px'},500);
    });
});

$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('img').animate({left: "-=10px"}, 'fast');
				break;
			// Up Arrow Pressed
			case 38:
				$('img').animate({top: "-=10px"}, 'fast');
				break;
			// Right Arrow Pressed
			case 39:
				$('img').animate({left: "+=10px"}, 'fast');
				break;
			// Down Arrow Pressed
			case 40:
				$('img').animate({top: "+=10px"}, 'fast');
				break;
		}
	});
});

// elevator image example
$(document).ready(function(){
    // Fill in the blanks!
    $('img').animate({top:'+=100px'}, 1000);
});

// jQuery UI below!
$(document).ready(function(){
    // Fill in the blanks!
    $('div').click(function() {
        $(this).effect('explode');
    });
});

$(document).ready(function(){
    // Fill in the blanks!
    $('div').click(function() {
        $(this).effect('bounce',{times:3},500);
    });
});

$(document).ready(function(){
    // Fill in the blanks!
    $('div').click(function() {
        $(this).effect('slide');
    });
});

$(document).ready(function() {
    $("#menu").accordion({collapsible: true, active: false});
});

$(document).ready(function(){
    $('#car').draggable();
});

$(document).ready(function(){
    $('div').resizable();
});

$(document).ready(function(){
    $('ol').selectable();
});

$(document).ready(function(){
    // $('ol').selectable();  // cannot seem to make both work together.
    $('ol').sortable();
});
