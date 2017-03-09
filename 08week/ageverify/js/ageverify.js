function redirect() {
  const ageNum = parseInt(getElementById('input-age').value);
  if (ageNum < 21) {
    window.location = 'denied.html'
  } else if (ageNum >= 21) {
    window.location = '../../../07week/Checkpoint2/index.html'
  }

  window.location = 'denied.html'
}
