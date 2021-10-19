export function fetchTranslations() {
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
