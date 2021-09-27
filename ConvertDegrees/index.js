"use strict";

const form = document.querySelector(".form");

function ConvertToCelsius(fahretheit) {
  return (fahretheit - 32) * (5 / 9);
}

form.addEventListener("submit", function (event) {
  const fahrenheit = document.getElementById("fahrenheit");
  const celsius = document.getElementById("celsius");

  event.preventDefault();
  celsius.value = ConvertToCelsius(fahrenheit.value);
});
