
$(document).ready(function()
{
  //Check if mobile to not trigger fullpage.js
  var isMobileDevice = (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  if(!isMobileDevice){
    $('#fullpage').fullpage({
      verticalCentered: true,
      anchors: ['Home','About','Products'],
      menu: '#myMenu'
    });
  }
});
