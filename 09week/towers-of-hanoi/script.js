$('.draggable').draggable();

$('.drop-zone').droppable({
drop: function(event, ui) {
dropIt(event, this, ui);
}
});
function dropIt(event, object, ui)
{
  //if existing block is larger than dragged block or if existing block = 0 execute Code Snippet A else execute code snippet B
  //

//Get the width of a block only if existing
  var numberOfBlockInColumn = object.children.length;
  var existingBlock = 0;
  if(numberOfBlockInColumn == 0)
  {
    existingBlock = 0;
  }
  else
  {
    var topBlock = numberOfBlockInColumn -1;
    var topBlockObject = object.children[topBlock];
    existingBlock = $(topBlockObject).data("block");
  }

  var draggedBlock = $(ui.draggable).data("block");


  if(existingBlock > draggedBlock || existingBlock == 0)
  {
    //it copies the object into the selected column
    $(ui.draggable).appendTo(object);
    $(ui.draggable).css("top", "0").css("left","0");

  }
  else
  {
    //reverts object back to original column
      $(ui.draggable).draggable("option", "revert", true);
  }
  checkForWinner();
}

function checkForWinner()
{
//if there are 4 objects in 3rd column Declare WINNER
  var numberOfBlockInColumn = $("#winnercolumn").children().length;

  console.log("blocks in 3rd column;");
  console.log(numberOfBlockInColumn);
  if( numberOfBlockInColumn == 4)
  {
    alert("We Have a Winner");
  }


}
