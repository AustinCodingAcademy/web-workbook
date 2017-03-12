function redirect() {
  if(document.getElementById('team').value === 'red') {
    window.location = './red.html';
  } else if
    (document.getElementById('team').value === 'blue') {
      window.location = './blue.html'
    } else {
      alert('Please chose red or blue, or else answer to my evil hamster, Jonathan');
    }
  }
