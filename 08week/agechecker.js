var age = 0;

function redirect() {
  var bdate = document.getElementById('birthday').value;
  var bday = +new Date(bdate);
  age = ((Date.now() - bday) / (31557600000));
  if (age >= 21) {
    window.location = '../../07week/Checkpoint2/'
  } else {
    confirm("Users must be 21 or older to view content.")
  }
}
