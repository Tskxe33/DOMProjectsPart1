const query = new URLSearchParams(location.search);
let FirstName = query.get("Name");
if (FirstName) {
  FirstName = FirstName.trim();
}
const dob = query.get("Dob");
const surname = query.get("Surname");
const numOfSave = query.get("numOfSave");
console.log(surname, numOfSave);

document.querySelector(".info__name").textContent = `First Name: ${FirstName}`;

document.querySelector(".info__surname").textContent = `Surname: ${surname}`;

document.querySelector(".info__dob").textContent = `Date of Birth: ${dob}`;

document.querySelector(
  ".info__numOfSave"
).textContent = `Number of Saved Contact: ${numOfSave}`;
