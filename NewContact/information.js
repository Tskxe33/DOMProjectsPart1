const query = new URLSearchParams(location.search);
let FirstName = query.get('Name');
if(FirstName){
    FirstName = FirstName.trim();
}
const dob = query.get('Dob');
const surname = query.get('Surname');

const message = `
First Name: ${FirstName},
Surname: ${surname},
Date of Birth: ${dob}
`

document.querySelector('.form__message').innerHTML = message;