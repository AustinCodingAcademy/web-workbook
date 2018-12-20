function sendNum(num) {
    if (document.getElementById("results").value === "" && num === '0') {
        document.getElementById("results").value = "";
    } else if (document.getElementById("results").value === "" && num === '+') {
        document.getElementById("results").value = "";
    } else if (document.getElementById("results").value === "" && num === '-') {
        document.getElementById("results").value = "";
    } else if (document.getElementById("results").value === "" && num === '*') {
        document.getElementById("results").value = "";
    } else if (document.getElementById("results").value === "" && num === '/') {
        document.getElementById("results").value = "";
    } else {
        document.getElementById("results").value += num;
    }
}

function equals() {
    if (document.getElementById("results").value !== "") {
    document.getElementById("results").value = eval(document.getElementById("results").value);
    } else {
        document.getElementById("results").value = "";
    }
}

function deleteLast() {
    let current = document.getElementById("results").value;
    document.getElementById("results").value = current.substring(0,current.length-1)
}

function clearResults() {
    document.getElementById("results").value = "";
}

// Working function
function plusMinus() {
    let current = document.getElementById("results").value;
    current *= -1;
    document.getElementById("results").value = current;
}

// plusMinus function in works
// function plusMinus(string) {
//     let current = document.getElementById("results").value;
//     current = parseInt(current.match(/(\d+)$/)[0], 10);
//     current *= -1;
//     document.getElementById("results").value += string;
// }

// other plusMinus function in works
// function plusMinus() {
//     if (document.getElementById("results").value !== "") {
//       let origString = document.getElementById("results").value; 
//       let current = document.getElementById("results").value; 
//       current = parseInt(current.match(/(\d+)$/)[0], 10);
//       current *= -1;
//       document.getElementById("results").value = origString + current;
//     } else {
//       let current = document.getElementById("results").value;  
//       current = parseInt(current.match(/(\d+)$/)[0], 10);
//       current *= -1;
//       document.getElementById("results").value = current;
//     }
//   }