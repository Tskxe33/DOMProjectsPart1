"use strict";

const form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formElements = event.target.elements;
  const query = new URLSearchParams();
  
  query.set('Name', `${formElements[`name`].value}`)
  query.set('Surname', `${formElements[`surname`].value}`)
  query.set('Dob', `${formElements[`dob`].value}`)
  
  location = `information.html?${query}`
});


function browserlanguage(){
  const name = document.querySelector('.name');
  const surname = document.querySelector('.surname');
  const dob = document.querySelector('.dob');
  const btn = document.querySelector('.btn');
  const language = navigator.language;
  if(language === `en-US`) {
    name.textContent = `Name:`
    surname.textContent = `Surname:`
    dob.textContent = `Date of birth:`
    btn.textContent = `Save`
  }

  if(language === 'sr') {
    name.textContent = `Ime:`
    surname.textContent = `Prezime:`
    dob.textContent = `Datum Rodjenja:`
    btn.textContent = `Sacuvaj`
  }
}

browserlanguage();