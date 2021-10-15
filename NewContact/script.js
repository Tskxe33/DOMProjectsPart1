"use strict";

const form = document.querySelector(".form");

function saveCookie(name, value) {
  document.cookie = `${name}=${value}`;
}



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


document.getElementById('form__lang').addEventListener('change',function(e){
  const selectedLang = document.getElementById('form__lang').value;
  // saveCookie('lang', selectedLang);

  switch(selectedLang){
    case 'sr': {
      translateToSerbian();
      break;
    }
    case 'en-US': {
      translateToEnglish();
      break;

    }
  }
})

// ----------- LANGUAGES -----------
function translateToEnglish(){
  const name = document.querySelector(".name");
  const surname = document.querySelector(".surname");
  const dob = document.querySelector(".dob");
  const btn = document.querySelector(".btn");
  const language = navigator.language;
  name.textContent = `Name:`;
  surname.textContent = `Surname:`;
  dob.textContent = `Date of birth:`;
  btn.textContent = `Save`;
}


function translateToSerbian(){
  const name = document.querySelector(".name");
  const surname = document.querySelector(".surname");
  const dob = document.querySelector(".dob");
  const btn = document.querySelector(".btn");
  const language = navigator.language;

  name.textContent = `Ime:`;
  surname.textContent = `Prezime:`;
  dob.textContent = `Datum Rodjenja:`;
  btn.textContent = `Sacuvaj`;
}


// ----- browser default language ------
function browserlanguage() {
  // const name = document.querySelector(".name");
  // const surname = document.querySelector(".surname");
  // const dob = document.querySelector(".dob");
  // const btn = document.querySelector(".btn");
  const language = navigator.language;
  if (language === `en-US`) {
    translateToEnglish();
  }

  if (language === "sr") {
      translateToSerbian();
  }
}

browserlanguage();
