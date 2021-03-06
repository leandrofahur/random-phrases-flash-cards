/******************************************
 *****************************************/

// initialize a random index track to check if the quote is being repeated:
let previousIndex = -1;

/***
 * `quotes` array
 ***/
const quotes = [
  {
    quote:
      "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source: "Patrick McKenzie",
    citation: "Twitter",
    year: "2016",
  },
  {
    quote:
      "It's not what happens to you, but how you react to it that matters.",
    source: "Epictetus",
    citation: "Enchiridion",
  },
  {
    quote:
      "You have power over your mind - not outside events. Realize this, and you will find strength.",
    source: "Marcus Aurelius",
    citation: "Meditations",
  },
  {
    quote: "Cogito ergo sum. (I think, therefore I am.)",
    source: "Rene Descartes",
  },
  {
    quote: "If you don't do it, you don't make it",
    source: "Myself",
    year: "2022",
  },
];

/***
 * `getRandomQuote` function
 ***/
const getRandomQuote = () => {
  // generate a random positive integer from 0 to the size of the quotes array:
  let index = Math.floor(Math.random() * quotes.length);

  // check if the previous index is the same as now, if it is, generates a new random index until the quote is different:
  let randomQuote;
  do {
    index = Math.floor(Math.random() * quotes.length);
    randomQuote = quotes[index];
  } while (index === previousIndex);

  // update the previous index now, so I am able to check later in the next click of the button:
  previousIndex = index;

  // return the quote of the random index generated:
  return randomQuote;
};

/***
 * `printQuote` function
 ***/
const printQuote = () => {
  // get the random quote and create the html string:
  const quoteObj = getRandomQuote();
  let htmlStr = `<p class="quote">${quoteObj.quote}</p><p class="source">${quoteObj.source}`;

  // if the citation exists, concatenate it with thw htmlStr & the same for the year:
  if (quoteObj.citation) {
    htmlStr += `, <span>${quoteObj.citation}</span>`;
  }
  if (quoteObj.year) {
    htmlStr += `, <span>${quoteObj.year}</span>`;
  }
  // remember to close the </p>
  htmlStr += `</p>`;
  console.log(htmlStr);

  document.getElementById("quote-box").innerHTML = htmlStr;
};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById("load-quote").addEventListener("click", printQuote);
