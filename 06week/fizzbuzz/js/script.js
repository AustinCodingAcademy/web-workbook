"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.body.querySelector(".container-inner");
  const input = document.body.querySelector("#input");
  const button = document.body.querySelector("#button");

  button.addEventListener("click", () => {
    var inputValue = parseInt(input.value);

    if (inputValue) {
      console.log("hi");
      inputValue = parseInt(inputValue);
    }
    console.log(inputValue);

    for (let i = 1; i < inputValue + 1; i++) {
      if (i % 5 === 0 && i % 3 === 0) {
        container.innerHTML += `<div class="box">Fizz<br>Buzz</div>`;
      } else if (i % 5 === 0) {
        container.innerHTML += `<div class="box">Buzz</div>`;
      } else if (i % 3 === 0) {
        container.innerHTML += `<div class="box">Fizz</div>`;
      } else {
        container.innerHTML += `<div class="box">${i}</div>`;
      }
    }
  });
});
