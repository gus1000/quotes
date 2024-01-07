console.clear()
const body = document.querySelector("body")

const people = [
  {
    id: 1,
    name: "Oscar Wilde",
    backgroundImageURL: "https://i.ibb.co/NVkg8HD/plains.jpg",
    imageURL: "https://i.ibb.co/qm0Rrtw/oscarwilde.jpg",
    quote: "Be yourself; everyone else is already taken."
  },
  {
    id: 2,
    name: "Marilyn Monroe",
    backgroundImageURL: "https://i.ibb.co/NTPNH24/trees.jpg",
    imageURL: "https://i.ibb.co/R3fLyyN/marylynmonroe.jpg",
    quote: `I am  selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.`
  },
  {
    id: 3,
    name: "Albert Einstein",
    backgroundImageURL: "https://i.ibb.co/w0ZtWTR/yellowstone.jpg",
    imageURL: "https://i.ibb.co/vwcQZFn/alberteinstein.jpg",
    quote: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`
  }
];

const quotes = ["Be yourself; everyone else is already taken.",  ` am  selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.` , `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.` ];

let copyOfQuotes =[...quotes]

let quotesUsed = [];

function randomInt() {
  
  return Math.floor(Math.random() * 3) ;
}



body.addEventListener("click", function() {
  const randomNumber = randomInt() ;
  console.log(randomNumber)
  const splicedQuote = copyOfQuotes.splice(randomNumber, 1);
  console.log("spliced", splicedQuote);
  quotesUsed.push(splicedQuote);
  console.log("hello",quotesUsed)
  
  if (copyOfQuotes.length === 0) {
    console.log("it is me")
    copyOfQuotes = [...quotes];
    quotesUsed =[];
    
    
  }

  
  
})


// const months = ['Jan', 'March', 'April', 'June'];
// console.log("initial",months)
// months.splice(1, 0, 'Feb');
// console.log("first",months);
// months.splice(1, 1);
// console.log("last", months);



// // splice(start)
// // splice(start, deleteCount)
// // splice(start, deleteCount, item1)
// // splice(start, deleteCount, item1, item2)
// // splice(start, deleteCount, item1, item2, /* …, */ itemN)


// const numbers = [1, 1, 1, 2 , 3 , 4 , 5, 6 , 7 ,8, 9];
// console.log(numbers)
// const stuff = numbers.splice(0, 1 , "ok", "hi", 3);
// console.log("yolo",stuff)

