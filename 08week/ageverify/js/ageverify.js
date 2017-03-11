function redirect() {
  const ageNum = parseInt(document.getElementById('input-age').value);
  console.log(ageNum);
  if (ageNum < 21) {
    window.location = 'denied.html';
  } else if (ageNum >= 21) {
    window.location = '../../../07week/Checkpoint2/index.html';
  } else (ageNum < 0 || ageNum === NaN) {
    return true;
  }
}
