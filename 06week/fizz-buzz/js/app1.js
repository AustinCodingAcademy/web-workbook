// Read inputs from URL
var query = window.location.href.split('?')[1];
var parameters = query.split('&');
var firstNumPair = parameters[0].split('=');
var secondNumPair = parameters[1].split('=');
var firstNum = parseInt(firstNumPair[1]);
var lastNum = parseInt(secondNumPair[1]);

// flip the values if first is greater than last
if (firstNum > lastNum) {
  var temp = lastNum;
  lastNum = firstNum;
  firstNum = temp;
}

// Parameters given in the assignment
var comp1 = {
  name: 'Fizz',
  value: 3,
  cssSelector: "lowest"
};
var comp2 = {
  name: 'Buzz',
  value: 5,
  cssSelector: "highest"
};

// Css selectors coded as variables
var bothCssSelector = "both";
var numberCssSelector = "number";
var noneCssSelector = "none";

// Insert HTML elements to build out the page and its data as needed
function insertElement(elementType, elementId, elementClass, elementText, parentId) {
  var newElement = document.createElement(elementType);
  var parent = document.getElementById(parentId);
  parent.appendChild(newElement);
  if (elementClass !== null) {
    newElement.setAttribute("class", elementClass);
  }
  if (elementId !== null) {
    newElement.setAttribute("id", elementId);
  }
  if (elementText !== null) {
    var textNode = document.createTextNode(elementText);
    newElement.appendChild(textNode);
  }
}

// Calculate number of columns & rows needed to display the fizzBuzz data in a square
var numCount = lastNum - firstNum + 1;
var trueSize = Math.sqrt(numCount);
var boxRows = Math.floor(trueSize);
var boxCols = Math.ceil(trueSize);
if (boxRows * boxCols < numCount) {
  boxRows++;
}
if (boxCols === trueSize) {
  var evenRoot = true;
} else {
  var evenRoot = false;
}

// Insert column <div>'s into HTML with class & id
var elementId;
var elementType = "div";
var elementClass = "column";
var elementText = null;
var parentId = "divisible";
for (var i=1; i<=boxCols; i++) {
  elementId = "col" + i;
  insertElement(elementType, elementId, elementClass, elementText, parentId);
}

// Insert row <p>'s into HTML with class & text-data
var number = firstNum;
var columnCount = 1;
while ((columnCount <= boxCols) && (number <= lastNum)) {
  var parentColId = "col" + columnCount;
  var row = 1
  while ((row <= boxRows) && (number <= lastNum)) {
    switch (true) {
    case (number % comp1.value === 0) :
      if (number % comp2.value === 0) {
        insertElement("p", null, bothCssSelector, comp1.name + comp2.name, parentColId);
      } else {
        insertElement("p", null, comp1.cssSelector, comp1.name, parentColId);
      }
      break;
    case (number % comp2.value === 0) :
      insertElement("p", null, comp2.cssSelector, comp2.name, parentColId);
      break;
    default :
      insertElement("p", null, numberCssSelector, number, parentColId);
      break;
    }
    number++;
    row++;
  }
  columnCount++;
}

// Fill out remaining rows in last column in order to have same flex-item count
if (evenRoot === false) {
  parentColId = "col" + boxCols;
  for (var i=lastNum+1; i<boxRows*boxCols+Math.abs(firstNum); i++) {
    insertElement("p", null, noneCssSelector, ".", parentColId);
  }
}
