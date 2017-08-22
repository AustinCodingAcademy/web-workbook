var names = ["PAUL","MARY","JAMAL","TERI"]

function greetings(x) {
  for (i=0;i<x.length;i++) {
    x[i] = "HELLO, " + x[i];
    console.log(names[i]);
  }
}

greetings(names);
