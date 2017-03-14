
function redirect() {
  if(document.getElementById('team').value === 'yes'){
    window.location = '../../07week/Checkpoint2/index.html';
  } else if(document.getElementById('team').value === 'no') {
      window.location = 'https://www.niaaa.nih.gov/alcohol-health/special-populations-co-occurring-disorders/underage-drinking';
    } else {
    alert('Please say yes or no');
    }
  }
