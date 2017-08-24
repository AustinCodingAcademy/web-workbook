window.onload = function listCounter(listCount) {
  var listCount = document.getElementsByTagName("li");
  var count = listCount.length;
  alert ("There are " +(count)+ ' lists on the page.');
  var newList = document.createElement("li");
  var fifthList = document.createTextNode("Fifth List Item");
  newList.appendChild(fifthList);
  document.getElementById("myList").appendChild(newList);
  var pList = document.getElementById('div');
  pList.removeChild(pList.childNodes[7]);
}
document.getElementsByTagName("title")[0].innerText = "Manipulating the DOM!";
