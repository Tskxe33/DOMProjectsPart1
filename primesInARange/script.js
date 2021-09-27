"use strict";

const form = document.querySelector(".form");

function isPrime(num) {
  if (num === 1) {
    return false;
  } else if (num > 1) {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
}

function primeBetween(min, max) {
  const resultList = document.querySelector(".form__result");

  for (let i = min.value; i <= max.value; ++i) {
    if (isPrime(i)) {
      let li = document.createElement("li");
      let resultText = document.createTextNode(i);
      li.appendChild(resultText);
      resultList.appendChild(li);
    }
  }
}

form.addEventListener("submit", function (event) {
  const firstNumber = document.getElementById("firstNumber");
  const secondNumber = document.getElementById("secondNumber");
  event.preventDefault();
  primeBetween(firstNumber, secondNumber);
});
