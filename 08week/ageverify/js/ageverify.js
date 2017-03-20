document.getElementById('submit-button').addEventListener("click", redirect);

function redirect() {
  const ageNum = Number(document.getElementById('input-age').value);
  console.log(ageNum);
  if (ageNum < 0 || ageNum === NaN) {
    console.log("Not a number");
    document.getElementById('wrong-age').innerHTML = "Please enter valid age.";
  } else if (ageNum >= 21) {
    console.log("Just right");
    window.location.href = 'https://stuartkilgore.github.io/web-workbook/07week/Checkpoint2/';
  } else if (ageNum < 21) {
    window.location.href = './denied.html';
    console.log("Too young");
  } else {}

  }
