var myListItems=document.getElementsByTagName("li");
alert(myListItems.length);

var newTitle=document.createElement("title");
var titleContent=document.createTextNode("Manipulating the DOM!");
newTitle.appendChild(titleContent);
var head=document.getElementsByTagName("head");
head[0].appendChild(newTitle);

var fifthList=document.createElement("li");
var fifthListText=document.createTextNode("Fifth List Item");
fifthList.appendChild(fifthListText);
var ul=document.getElementsByTagName("ul");
ul[0].appendChild(fifthList);

var paragraphFour=document.getElementById('P4')
paragraphFour.style.display = 'none';



//window.onload = function () {
//   var li = document.getElementsByTagName("li");
  // alert("There are " + li + " on the page.");
//}
