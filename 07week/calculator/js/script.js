$(".btn").click(function(event) {
  var thingClicked = this.innerHTML
  console.log("you clicked: ", thingClicked)
   $(".item-header").html(thingClicked)
 })