//create a new empty array to hold the messages;
let cardsMessage = []

//context of card message
const cardContent = "surprise";

//names for thank you cards
// const cardNames = ["Xavi", "Cathy", "Manny"];

//create a custom message for each name inside the loop
function writeCards(cardNames) {
    for (let i = 0; i < cardNames.length; i++) {
        cardsMessage.push(`Thank you, ${cardNames[i]}, for the wonderful ${cardContent} gift!`);

    }
    return cardsMessage;
}

writeCards(cardNames);


function countDown() {
let number = 10;
while (number >= 0) {
    console.log(number--);
    debugger;
    }
}

