import { faker } from "https://cdn.skypack.dev/@faker-js/faker";
console.clear();
const backgroundContainer = document.querySelector(".background-container");
const quoteText = document.querySelector(".quote-text");
const quoteContainer = document.querySelector(".quote-container");

const quotesButton = document.querySelector(".quotes-button");
const buttonContainer = document.querySelector(".button-container");
const box = document.querySelector(".box");
const boxContainer = document.querySelector(".box-container");
const img = document.querySelector("img");
const author = document.querySelector(".author");

function randomColor() {
  return faker.color.rgb();
}

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

let peopleUsed = [];

let copyOfPeople = [...people];
// let counter = 0;

function randomInt() {
  return Math.floor(Math.random() * 3);
}

function renderPage(name, backgroundImageURL, imageURL, quote) {
  backgroundContainer.style.backgroundImage = `url(${backgroundImageURL})`;
  quoteText.style.backgroundColor = randomColor();

  author.innerText = name;
  quoteText.innerText = quote;
  img.src = imageURL;

  window.speechSynthesis.cancel();

  const message = new SpeechSynthesisUtterance(quote);
  // window.speechSynthesis.speak(message);
}
//event listener detatches
//backgroundContainer
// console.log("low", iD);
quotesButton.addEventListener("click", function (event) {
  // console.log("before",counter);
  // console.log("after",counter);
  
//    if (copyOfPeople.length === 0) {
//      console.log("see me")
//     // console.log(peopleUsed);

//     copyOfPeople = [...people];
//     // console.log("checking");
//     peopleUsed = [];
      
//      const randomNumber = randomInt();

//   // console.log(randomNumber)

//   const splicedPerson = copyOfPeople.splice(randomNumber, 1);
//   // console.log(copyOfPeople);

//   // console.log("spliced", splicedPerson);
//   // console.log(name, backgroundImageURL, imageURL, quote)

//   peopleUsed.push(...splicedPerson);


//   const { name, backgroundImageURL, imageURL, quote } = peopleUsed[
//   peopleUsed.length -1
// ]; 
//   renderPage(name, backgroundImageURL, imageURL, quote);
//   return;
      

   

//     // console.log("start over", copyOfPeople);
//   }

  const randomNumber = randomInt();

  // console.log(randomNumber)

  const splicedPerson = copyOfPeople.splice(randomNumber, 1);
  // console.log(copyOfPeople);

  console.log("spliced", splicedPerson, splicedPerson.length);
  // console.log(name, backgroundImageURL, imageURL, quote)
  
  if (splicedPerson.length === 0) {
     console.log("testing logic")
    // console.log(peopleUsed);

    copyOfPeople = [...people];
    // console.log("checking");
    peopleUsed = [];
      
     const randomNumber = randomInt();

  // console.log(randomNumber)

  const splicedPerson = copyOfPeople.splice(randomNumber, 1);
  // console.log(copyOfPeople);

  // console.log("spliced", splicedPerson);
  // console.log(name, backgroundImageURL, imageURL, quote)

  peopleUsed.push(...splicedPerson);


  const { name, backgroundImageURL, imageURL, quote } = peopleUsed[
  peopleUsed.length -1
]; 
  renderPage(name, backgroundImageURL, imageURL, quote);
  return;
      

   

    // console.log("start over", copyOfPeople);
  }

  peopleUsed.push(...splicedPerson);


  const { name, backgroundImageURL, imageURL, quote } = peopleUsed[
  peopleUsed.length -1
]; ///Undefined
renderPage(name, backgroundImageURL, imageURL, quote);
  
 
  
  
  
  
  
  
  
  
   

});
// console.log(peopleUsed[counter -1].name)
// console.log("counter", counter);
// console.log("length", peopleUsed.length);
// console.log(peopleUsed[counter]);
//   if (peopleUsed.length < counter) {

//       const { name, backgroundImageURL, imageURL, quote } = peopleUsed[randomNumber ]; ///Undefined
//   renderPage(name, backgroundImageURL, imageURL, quote);

//     return;
//   }




// counter++;

//   }

// console.log("hi", randomNumber);
// console.log("we", newID);

//   if (newID === iD)  {
//     console.log("clicked twice")
//     // Am I supposed to re render a different quote ?
//     return};

//   iD = newID;
//   // console.log(newID ,iD);

//   const { name, backgroundImageURL, imageURL, quote } = people[iD - 1];

//   console.log(name, backgroundImageURL, imageURL, quote );

//   renderPage(name, backgroundImageURL, imageURL, quote);

// quoteButton.addEventListener("space", function (event) {
//   // if (event.classList.contains("quotes-button")) {}
//   const randomNumber = randomInt();
//   const { name, backgroundImageURL, imageURL, quote, color } = people[
//     randomNumber - 1
//   ];
//   renderPage(name, backgroundImageURL, imageURL, quote);

// });

// How to change voices. Just notes.

// let message =

// speechSynthesis.speak(message);
// speechSynthesis.speak(message);

// const voices = window.speechSynthesis.getVoices();
// const lastVoice = voices[voices.length - 1];

// for (let i = 0; i < 4; i++) {
//   const message = new SpeechSynthesisUtterance();

//   message.text = "Hola";
//   message.lang = "en-US";
//   speechSynthesis.speak(message);
//   voices.push(message);
// }

// console.log(voices.length)

// function foo() {
//   msg = new SpeechSynthesisUtterance(),
//     voices = window.speechSynthesis.getVoices();

//   console.log("How many voices", voices.length);

//   msg.text = "Hello World";
//   speechSynthesis.speak(msg);
// }

// foo();
// setTimeout(foo, 0);   // just try again in the next event cycle

// const voices = window.speechSynthesis.getVoices();
// console.log(voices);
// const lastVoice = voices[voices.length - 1];

// const utterance = new SpeechSynthesisUtterance('Hello!');
// utterance.voice = lastVoice; // change voice
// window.speechSynthesis.speak(utterance);

// const utterance = new SpeechSynthesisUtterance('These are words!');
// utterance.addEventListener('start', function(event) {
//   console.log(event, "hi");
// });
// window.speechSynthesis.speak(utterance);

// each object has a different quote, image, background image, image, quote container color
