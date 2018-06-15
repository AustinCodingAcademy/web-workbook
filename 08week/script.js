"use strict"

function countList() {
  console.log("i am in countList ");
  var liList = document.querySelectorAll("li");
  for(var i = 0; i < liList.length ; i++) {
    console.log(liList[i]);
  }
}

countList();