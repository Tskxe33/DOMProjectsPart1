"use strict";

const form = document.querySelector(".form");

function calculateCost(distance, price, consPer100) {
  return ((distance * consPer100) / 100) * price;
}

form.addEventListener("submit", function (event) {
  const drivingDistance = document.getElementById("distance");
  const consumptionPer100 = document.getElementById("consumption");
  const fuelPrice = document.getElementById("fuelPrice");
  const result = document.querySelector(".form__result");

  event.preventDefault();

  const value = calculateCost(
    drivingDistance.value,
    fuelPrice.value,
    consumptionPer100.value
  );

  result.textContent = `the price of a potential car trip is: ${value}$`;
  result.style.display = "block";
});
