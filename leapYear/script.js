"use strict";

const form = document.querySelector(".form");

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

form.addEventListener("submit", function (event) {
  const year = document.getElementById("year");
  const displayMessage = document.querySelector(".paragraph__result");

  event.preventDefault();

  if (isLeapYear(year.value)) {
    displayMessage.style.display = "block";
    displayMessage.style.color = "#2ecc71";
    displayMessage.textContent = `${year.value} is a leap year`;
  } else {
    displayMessage.style.display = "block";
    displayMessage.style.color = "#e74c3c";
    displayMessage.textContent = `${year.value} is not a leap year`;
  }
});
