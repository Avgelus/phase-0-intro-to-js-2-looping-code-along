// Code your solutions in this file

const Cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(Cards) {
    const thankYouMessages = []; 
    
    for (let i = 0; i < Cards.length; i++) {
        const message = `Thank you, ${Cards[i]}, for the wonderful surprise gift!`;
        thankYouMessages.push(message); 
        console.log(message); 
    }

    return thankYouMessages;
}

function countDown(startingNumber) {
    for (let i = startingNumber; i >= 0; i--) {
        console.log(i);
    }
}
