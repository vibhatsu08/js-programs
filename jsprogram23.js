//javascript program to shuffle a deck of cards.
const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "king", "queen", "joker"];
let deck = [];

for(let i=0; i<suits.length; i++){
    for(let x=0; x<values.length; x++){
        let card = {
            suit : suits[i],
            value : values[x]
        };
        deck.push(card);
    }
}

for(let i=deck.length-1; i>=1; i--){
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}

console.log("The first five cards are: ");
for(let i=0; i<5; i++){
    console.log(deck[i].value + " of " + deck[i].suit);
}