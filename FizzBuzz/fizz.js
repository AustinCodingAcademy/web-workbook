function fizzBuzz() {
  let badges = document.querySelector('#badges');
  for (let i = 0; i < 1001; i++) {
    if (i % 15 === 0) {
      badges.insertAdjacentHTML('beforeend', `FizzBuzz`);
    } else if (i % 3 === 0) {
      badges.insertAdjacentHTML('beforeend', `Fizz`);
    } else if (i % 5 === 0) {
      badges.insertAdjacentHTML('beforeend', `Buzz`);
    } else {
      badges.insertAdjacentHTML('beforeend', `${i}`);
    }
  }
}