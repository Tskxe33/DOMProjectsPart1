"use strict";
import * as cookie from "./modules/cookies.js";
import { fetchTranslations as translations } from "./modules/fetchTranslations.js";
import { getRandomQuote as randomQuote } from "./modules/fetchQuotes.js";

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

translations();

randomQuote();

document.getElementById("form__lang").addEventListener("change", function () {
  const selectedLang = document.getElementById("form__lang").value;

  selectedLang === `chooseLang`
    ? cookie.saveCookie("lang", navigator.language)
    : cookie.saveCookie("lang", selectedLang);

  translations();
});
