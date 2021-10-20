function fetchQuotes() {
  const quotesURL = "https://type.fit/api/quotes";
  const loader = document.querySelector(".loader");
  loader.classList.remove("hidden");
  return fetch(quotesURL).then((response) => response.json());
}

// promeniti naziv scripte
export function getRandomQuote() {
  return fetchQuotes().then((res) => {
    // const loader = document.querySelector(".loader"); //izbaciti loader
    // loader.classList.remove("hidden");
    const random = Math.trunc(Math.random() * res.length);
    return res.filter((quote, index) => (index === random ? quote : ""));
  });
}

// setTimeout(function () {
//   // izbaciti timeout
//   getRandomQuote().then((res) => {
//     const loader = document.querySelector(".loader");

//     const quote = res[0];
//     displayQuote(quote.text, quote.author);
//     loader.classList.add("hidden");
//   });
// }, 0); // premestiti u script

// izbaciti timeout

// getRandomQuote().then((res) => {
//   const loader = document.querySelector(".loader");
//   const quote = res[0];

//   displayQuote(quote.text, quote.author);
//   loader.classList.add("hidden");
// });

// function displayQuote(quote, author) {
//   document.querySelector(".quotes__message").textContent = quote;
//   document.querySelector(".quotes__author").textContent = author;
// }
