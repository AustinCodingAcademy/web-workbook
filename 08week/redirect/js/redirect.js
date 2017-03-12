function goWinery() {
  if(document.getElementById('confirm').value === 'yes') {
    window.location = '../../07week/Checkpoint2/index.html';
  } else if
    (document.getElementById('confirm').value === 'no') {
      window.location = './no.html'
    } else {
      alert('Answer the question, Dipshit!!');
    }
  }
