function fetchQuotes() {
  const quotesURL = "https://type.fit/api/quotes";
  return fetch(quotesURL).then((response) => response.json());
}

export function getRandomQuote() {
  return fetchQuotes().then((res) => {
    const loader = document.querySelector(".loader");
    loader.classList.remove("hidden");
    const random = Math.trunc(Math.random() * res.length);
    return res.filter((quote, index) => (index === random ? quote : ""));
  });
}

setTimeout(function () {
  const loader = document.querySelector(".loader");

  getRandomQuote().then((res) => {
    const quote = res[0];
    displayQuote(quote.text, quote.author);
    loader.classList.add("hidden");
  });
}, 2500);

function displayQuote(quote, author) {
  document.querySelector(".quotes__message").textContent = quote;
  document.querySelector(".quotes__author").textContent = author;
}
