'use strict';
// document.addEventListener("DOMContentLoaded", function(event) {
window.onload = function() {


  $(document).ready(function() {

//updates value from slider to text box
document.mainForm.inputId.oninput =  function(){
  document.mainForm.outputId.value = document.mainForm.inputId.value;

};


  });

}
// });
