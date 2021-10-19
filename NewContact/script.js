"use strict";
import * as cookie from "./modules/cookies.js";

const form = document.querySelector(".form");

if (!document.cookie) {
  cookie.saveCookie("count", 0);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let cookieValue = cookie.cookieCountIncrese(`count`);
  cookie.saveCookie(`count`, cookieValue);
  const formElements = event.target.elements;
  const query = new URLSearchParams();
  query.set("Name", `${formElements[`name`].value}`);
  query.set("Surname", `${formElements[`surname`].value}`);
  query.set("Dob", `${formElements[`dob`].value}`);
  query.set("numOfSave", `${cookieValue}`);

  location = `information.html?${query}`;
});

// ------------- FETCH TRANSLATIONS ---------------

function fetchTranslations() {
  const translationsURL = "./translations.json";
  return fetch(translationsURL)
    .then((res) => res.json())
    .then((res) => {
      const selectedLang = document.getElementById("form__lang").value;

      return res.languages.find((lang) => {
        if (selectedLang === "chooseLang") {
          //chooseLang is default option in select
          lang.lang === navigator.language
            ? setTranslations(
                lang.name,
                lang.surname,
                lang.dob,
                lang.btn,
                lang.selectLang
              )
            : "";
        } else if (lang.lang === selectedLang) {
          setTranslations(
            lang.name,
            lang.surname,
            lang.dob,
            lang.btn,
            lang.selectLang
          );
        }
      });
    });
}

fetchTranslations();

function setTranslations(
  firstName,
  lastName,
  dateOfBirth,
  SaveBtn,
  selectLang
) {
  const name = document.querySelector(".name");
  const surname = document.querySelector(".surname");
  const dob = document.querySelector(".dob");
  const btn = document.querySelector(".btn");
  const chooseLang = document.querySelector(".choose-lang");
  name.textContent = firstName;
  surname.textContent = lastName;
  dob.textContent = dateOfBirth;
  btn.textContent = SaveBtn;
  chooseLang.textContent = selectLang;
}

// ----------- LANGUAGES -----------

document.getElementById("form__lang").addEventListener("change", function () {
  const selectedLang = document.getElementById("form__lang").value;

  selectedLang === `chooseLang`
    ? cookie.saveCookie("lang", navigator.language)
    : cookie.saveCookie("lang", selectedLang);

  fetchTranslations();
});

// -------------- QUOTES -------------------

function fetchQuotes() {
  const quotesURL = "https://type.fit/api/quotes";
  return fetch(quotesURL).then((response) => response.json());
}

function getRandomQuote() {
  return fetchQuotes().then((res) => {
    const loader = document.querySelector(".loader");
    loader.classList.remove("hidden");
    const random = Math.trunc(Math.random() * res.length);
    return res.filter((quote, index) => (index === random ? quote : ""));
  });
}

getRandomQuote();

setTimeout(function () {
  const loader = document.querySelector(".loader");

  getRandomQuote().then((res) => {
    const quote = res[0];
    displayQuote(quote.text, quote.author);
    loader.classList.add("hidden");
  });
}, 2500);

function displayQuote(quote, author) {
  document.querySelector(".quotes__message").textContent = quote;
  document.querySelector(".quotes__author").textContent = author;
}
