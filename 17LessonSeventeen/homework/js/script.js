var checkboxes = $("input[type='checkbox']");

$(function(){
  for(var i = 0; i < checkboxes.length; i++){
    checkboxes[i].checked = true;
  }

  $("input[type='submit']").on("click", function(e){
    if(!validate()){
      alert("You must check at least one of the checkboxes in order to subscribe to the mailing list.");
    }
  });
});

function validate(){
  return Array.prototype.slice.call(checkboxes).some(x => x.checked);
}
