"use strict";
import * as cookie from "./modules/cookies.js";
import { fetchTranslations as translations } from "./modules/fetchTranslations.js";
import { getRandomQuote as randomQuote } from "./modules/fetchQuotes.js";

const form = document.querySelector(".form");

// -------------- COOKIES ----------------

if (!document.cookie) {
  cookie.saveCookie("count", 0);
}

function cookieCountIncrese(cookieName) {
  let count = cookie.getCookieValue(cookieName) || 0;
  count++;
  return count;
}

function yesterday() {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return date;
}

function removeCookie(name) {
  document.cookie = `${name}=; expires=${yesterday().toUTCString()}`;
}

// ------------- FORM SUBMIT HANDLER ------------------

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let cookieValue = cookieCountIncrese(`count`);
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

// -------------------- QUOTES --------------------

randomQuote().then((res) => {
  const loader = document.querySelector(".loader");
  const quote = res[0];

  displayQuote(quote.text, quote.author);
  loader.classList.add("hidden");
});

function displayQuote(quote, author) {
  document.querySelector(".quotes__message").textContent = quote;
  document.querySelector(".quotes__author").textContent = author;
}

randomQuote();

// ----------------- LANGUAGE HANDLER ------------------

document.getElementById("form__lang").addEventListener("change", function () {
  const selectedLang = document.getElementById("form__lang").value;

  selectedLang === `chooseLang`
    ? removeCookie(`lang`)
    : cookie.saveCookie("lang", selectedLang);

  translations();
});
