var x = document.getElementsByTagName("li");

alert("there are " + x.length + " items in the list");

document.title="Manipulating the DOM!"

function myFunction() {
    var newItem = document.createElement("li");
    var text = document.createTextNode("Fifth List Item");
    newItem.appendChild(text);
    document.getElementById("items").appendChild(newItem);
}

myFunction();

document.getElementById("P4").innerHTML="";
