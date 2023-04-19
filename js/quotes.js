const quotes = [
  {
    quote:"You don’t grow when you are comfortable.",
    author : "Someone"
  },
  {
    quote:"Success usually comes to those who are too busy to be looking for it.",
    author : "Henry David Thoreau"
  },
  {
    quote:"The way to get started is to quit talking and begin doing.",
    author : "Walt Disney"
  },
  {
    quote:"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author : "Albert Schweitzer"
  },
  {
    quote:"Success seems to be connected with action. Successful people keep moving.",
    author : "now06"
  },
  {
    quote:"In order to succeed, we must first believe that we can.",
    author : "now07"
  },
  {
    quote:"Do not be afraid to give up the good to go for the great.",
    author : "now08"
  },
  {
    quote:"If you cannot fly then run. If you cannot run, then walk. And, if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.",
    author : "now09"
  },
  {
    quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author : "now10"
  },
  {
    quote:"Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you’re not doing a tour go gas stations.",
    author : "now11"
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;