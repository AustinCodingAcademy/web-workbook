var first = 1, last = 100;

var comparison = [
  ["fizz", 3],
  ["buzz", 5]
];

for (var i = first; i<last+1; i++) {

  if (i % comparison[0][1] == 0) {
    if (i % comparison[1][1]  == 0) {
      document.write(comparison[0][0], comparison[1][0], "<br>");
    } else {
        document.write(comparison[0][0], "<br>");
      }
  } else if (i % comparison[1][1]  == 0) {
    document.write(comparison[1][0], "<br>");
  } else {
    document.write(i, "<br>");
  }
}
