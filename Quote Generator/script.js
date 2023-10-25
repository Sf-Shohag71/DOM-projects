// variables
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");
let btn = document.querySelector("#new-quote");

const allQuotes = [
  {
    quote: `“Be yourself; everyone else is already taken.”`,
    person: `Oscar Wilde`,
  },
  {
    quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    person: `Albert Einstein`,
  },
  {
    quote: `“So many books, so little time.”`,
    person: `Frank Zappa`,
  },
  {
    quote: `“A room without books is like a body without a soul.”`,
    person: `Marcus Tullius Cicero`,
  },
  {
    quote: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    person: `Bernard M. Baruch`,
  },
  {
    quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
    person: `Dr. Seuss`,
  },
  {
    quote: `“You only live once, but if you do it right, once is enough.”`,
    person: `Mae West`,
  },
  {
    quote: `“Be the change that you wish to see in the world.”`,
    person: `Mahatma Gandhi`,
  },
  {
    quote: `“In three words I can sum up everything I've learned about life: it goes on.”`,
    person: `Robert Frost`,
  },
];

btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * allQuotes.length);
  quote.innerText = allQuotes[random].quote;
  person.innerText = allQuotes[random].person;
});
