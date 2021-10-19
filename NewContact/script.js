"use strict";

// const quotesObjects = {
//   quotes: [
//     {
//       quote: `You’ve got to start with the customer experience and work back toward the technology`,
//       author: `Steve Jobs`,
//     },
//     {
//       quote: `Any product that needs a manual to work is broken.`,
//       author: `Alan Musk`,
//     },
//     {
//       quote: `Quality in a product or service is not what the supplier puts in. it is what the customer gets out and is willing to pay for.`,
//       author: `Peter Drucker`,
//     },
//     {
//       quote: `When the product is right, you don’t have to be a great Marketer.`,
//       author: `Lee Iacocca`,
//     },
//     {
//       quote: `The sales department isn’t the whole company, but the whole company better be the sales department.`,
//       author: `Philip Kotler`,
//     },
//   ],
// };

const form = document.querySelector(".form");

if (!document.cookie) {
  saveCookie("lang", navigator.language);
  saveCookie("count", 0);
}

function saveCookie(name, value) {
  document.cookie = `${name}=${value}`;
}

function getCookieValue(cookieName) {
  let cookie = document.cookie
    .split("; ")
    .find((name) => name.startsWith(cookieName))
    .split("=")[1];

  if (cookieName === `count`) { // premestiti if
    cookie = Number(cookie);
  }
  return cookie;
}

function cookieCountIncrese(cookieName) {
  let count = getCookieValue(cookieName) || 0;
  count++;
  return count;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let cookieValue = cookieCountIncrese(`count`);
  saveCookie(`count`, cookieValue);
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

      return res.languages.filter((lang) => { //umesto filter find
        if (lang.lang === selectedLang) {
          saveCookie("lang", selectedLang); //cookie izbaciti
          setTranslations(lang.name, lang.surname, lang.dob, lang.btn);
        }
      });
    });
}

fetchTranslations();

function setTranslations(firstName, lastName, dateOfBirth, SaveBtn) {
  const name = document.querySelector(".name");
  const surname = document.querySelector(".surname");
  const dob = document.querySelector(".dob");
  const btn = document.querySelector(".btn");
  name.textContent = firstName;
  surname.textContent = lastName;
  dob.textContent = dateOfBirth;
  btn.textContent = SaveBtn;
}

// ----------- LANGUAGES -----------

document
  .getElementById("form__lang")
  .addEventListener("change", fetchTranslations);

// ----- browser default language ------
// function browserlanguage() {
//   const language = navigator.language;
//   if (language === `en-US`) {
//     setTranslations("First Name", "Last Name", "Date of Birth", "Save");
//   }

//   if (language === "sr") {
//     setTranslations("Ime", "Prezime", "Datum rodjenja", "Sačuvaj");
//   }
// }

// browserlanguage();

// -------------- QUOTES -------------------

// ------------------------------------
// ------------ VERSION 1 WITH Promise() -----------------------
// --------------------------------------
// let load = true;

// function getRandomQuote() {
//   const random = Math.trunc(Math.random() * quotesObjects.quotes.length);
//   return quotesObjects.quotes.filter((quote, index) =>
//     index === random ? quote : ""
//   );
// }

// function delay() {
//   const loader = document.querySelector(".loader");
//   return new Promise(function (resolve, reject) {
//     load && loader.classList.remove("hidden");
//     resolve();
//   });
// }

// delay().then(function () {
//   const loader = document.querySelector(".loader");

//   setInterval(function () {
//     const quote = getRandomQuote()[0];

//     displayQuote(quote.quote, quote.author);
//     load && loader.classList.add("hidden");
//   }, 2500);
// });

// function displayQuote(quote, author) {
//   document.querySelector(".quotes__message").textContent = quote;
//   document.querySelector(".quotes__author").textContent = author;
// }

// ------------------------------------
// ------------ VERSION 2 WITH Fetch() -----------------------
// --------------------------------------

function fetchQuotes() {
  const quotesURL = "quotes.json";
  return fetch(quotesURL).then((response) => response.json());
}

function getRandomQuote() {
  return fetchQuotes().then((res) => {
    const loader = document.querySelector(".loader");
    loader.classList.remove("hidden");
    const random = Math.trunc(Math.random() * res.quotes.length);
    return res.quotes.filter((quote, index) => (index === random ? quote : ""));
  });
}

getRandomQuote();

setInterval(function () {
  const loader = document.querySelector(".loader");

  getRandomQuote().then((res) => {
    const quote = res[0];
    displayQuote(quote.quote, quote.author);
    loader.classList.add("hidden");
  });
}, 2500);

function displayQuote(quote, author) {
  document.querySelector(".quotes__message").textContent = quote;
  document.querySelector(".quotes__author").textContent = author;
}
