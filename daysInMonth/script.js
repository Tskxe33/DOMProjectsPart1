"use strict";

const form = document.querySelector(".form");

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate(); // This line of code returns days in month
}

form.addEventListener("submit", function (event) {
  const year = document.getElementById("year");
  const month = document.getElementById("month");
  const message = document.querySelector(".paragraph__result");
  event.preventDefault();
  message.style.display = "block";
  message.textContent = `A month has ${daysInMonth(
    month.value,
    year.value,
    0
  )} days`;
});
