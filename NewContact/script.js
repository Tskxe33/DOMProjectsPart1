"use strict";

const form = document.querySelector(".form");

function saveCookie(name, value) {
  document.cookie = `${name}=${value}`;
}

console.log(+document.cookie.split("=")[1]);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let cookieValue = +document.cookie.split("=")[1];
  console.log(cookieValue);
  saveCookie(`count`, ++cookieValue);

  const formElements = event.target.elements;
  const query = new URLSearchParams();
  query.set("Name", `${formElements[`name`].value}`);
  query.set("Surname", `${formElements[`surname`].value}`);
  query.set("Dob", `${formElements[`dob`].value}`);
  query.set("numOfSave", `${cookieValue}`);

  location = `information.html?${query}`;
});

function browserlanguage() {
  const name = document.querySelector(".name");
  const surname = document.querySelector(".surname");
  const dob = document.querySelector(".dob");
  const btn = document.querySelector(".btn");
  const language = navigator.language;
  if (language === `en-US`) {
    name.textContent = `Name:`;
    surname.textContent = `Surname:`;
    dob.textContent = `Date of birth:`;
    btn.textContent = `Save`;
  }

  if (language === "sr") {
    name.textContent = `Ime:`;
    surname.textContent = `Prezime:`;
    dob.textContent = `Datum Rodjenja:`;
    btn.textContent = `Sacuvaj`;
  }
}

browserlanguage();
