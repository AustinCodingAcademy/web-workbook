(function($){
    $.fn.extend({
        rotaterator: function(options) {

            var defaults = {
                fadeSpeed: 350,
                pauseSpeed: 100,
				child:null
            };

            var options = $.extend(defaults, options);

            return this.each(function() {
                  var o =options;
                  var obj = $(this);
                  var items = $(obj.children(), obj);
				  items.each(function() {$(this).hide();})
				  if(!o.child){var next = $(obj).children(':first');
				  }else{var next = o.child;
				  }
				  $(next).fadeIn(o.fadeSpeed, function() {
						$(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function() {
							var next = $(this).next();
							if (next.length == 0){
									next = $(obj).children(':first');
							}
							$(obj).rotaterator({child : next, fadeSpeed : o.fadeSpeed, pauseSpeed : o.pauseSpeed});
						})
					});
            });
        }
    });
})(jQuery);

 $(document).ready(function() {
        $('#rotate').rotaterator({fadeSpeed:600, pauseSpeed:900});
 });

 // contact form js
 $(document).ready(function()
{
	/* helper function to display a message describing the results of the form submit */
	function displayAjaxMessage(message)
	{
		$("#ajax-message").html(message);
		$("#ajax-message").fadeIn(1000);
	}

	/* attach a submit handler to the contact form. By default, EE generates the ID "contact_form" */
	$("#contact_form").submit(function(event)
	{
		/* stop the contact form from submitting normally */
		event.preventDefault();

		/* hide any left over message from a previous submit */
		$("#ajax-message").hide();

		/* send the form data using post and check the results for any errors*/
		$.ajax(
		{
			url: "/",
			type: "post",
			dataType: "html",
			data: $(this).serialize(),

			/* If there was some kind of an AJAX error, display an appropriate message or take some other action of your choice */
			error: function(jqXHR, textStatus, errorThrown)
			{
				displayAjaxMessage("Sorry, there was an error submitting your form. Please send me an e-mail <a mailto:'info@applecrumbs.com'>info@applecrumbs.com</a>");
			},

			/* 	parse the HTML returned by EE to see if they forgot to enter an email address or a message.
				If so, the HTML will contain a specific error string we can match, and then we can display our own message */
			success: function(html, textStatus, jqXHR)
			{
				if (html.match(/<title>Error<\/title>/))
				{
					var error = $(html).find('ul li:first').text();
					if (error == "A valid sender email is required")
					{
						displayAjaxMessage("Your email was&rsquo;t valid. Please enter your email address.");
					}
					else if (error == "Email Message is Required")
					{
						displayAjaxMessage("Please enter a message.");
					}
				}
				else
				{
					displayAjaxMessage("<p>Your message was sent. Thanks for contacting me!</p>");
				}
			}

		});
	});
});
