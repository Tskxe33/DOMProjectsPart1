const query = new URLSearchParams(location.search)
const div = document.querySelector('.info');
const firstName = document.createElement('p')
const surname = document.createElement('p')
const date = document.createElement('p')

firstName.textContent = `First name: ${query.get('firstName')}`
surname.textContent = `Surname: ${query.get('surname')}`
date.textContent = `Date: ${query.get('date')}`

div.appendChild(firstName)
div.appendChild(surname)
div.appendChild(date)