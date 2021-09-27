"use strict";

const form = document.querySelector(".form");

function init() {
  firstName.value = "";
  surname.value = "";
  dob.value = "";
}

form.addEventListener("submit", function (event) {
  const firstName = document.getElementById("name");
  const surname = document.getElementById("surname");
  const dob = document.getElementById("dob");
  const message = document.querySelector(".form__message");

  event.preventDefault();

  message.style.display = "block";
  message.textContent = `
  successfully sent!
  Name: ${firstName.value};
  Surname: ${surname.value};
  Date Of Birth: ${dob.value};
  `;

  init();
});
