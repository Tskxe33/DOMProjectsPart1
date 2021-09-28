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
  const list = [];

  for (let i = min.value; i <= max.value; ++i) {
    if (isPrime(i)) {
      list.push(i);
    }
  }
  return list;
}

function showPrimes() {
  const firstNumber = document.getElementById("firstNumber");
  const secondNumber = document.getElementById("secondNumber");
  const resultList = document.querySelector(".form__result");
  const list = primeBetween(firstNumber, secondNumber);

  for (let i = 0; i < list.length; ++i) {
    let li = document.createElement("li");
    let resultText = document.createTextNode(list[i]);
    li.appendChild(resultText);
    resultList.appendChild(li);
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  showPrimes();
});
