var myVar = ["Conor", "Jeff", "Sally", "Joe"];

function greet(nam) {
  console.log("Hello, " + nam + "!");
}

for (var i = 0; i < 4; i++) {
  greet(myVar[i]);
}
