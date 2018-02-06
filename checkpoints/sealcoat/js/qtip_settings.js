$(document).ready(function() {


  // Grab all elements with the class "has-tooltip"
  $('.has-tooltip').each(function() { // Notice the .each() loop, discussed below
    $(this).qtip({
      content: {
        text: $(this).next('div'), // Use the "div" element next to this for the content
        button: true,
        title: $(this).next('div').attr('title')
      },
      style: {
        classes: 'qtip-light qtip-rounded'
      },
      position: {
        my: 'bottom left',
        at: 'top center',
        target: 'event',
        viewport: $(window)
      },
      hide: {
        fixed: true,
        delay: 800
      },
      show: {
        solo: true
      }
    });
  });
});
