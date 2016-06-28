$(function(){
  var jelloElements = $(".icon-sm");
  for(var i = 0; i < jelloElements.length; i++){
    jelloElements[i].classList.add("animated");
    jelloElements[i].onclick = function(){playAnimation(this, "jello");}
  }
});

function playAnimation(element, animationName){
  element.classList.add(animationName);
  window.setTimeout(function(){
    element.classList.remove(animationName);
  }, 750);
}
