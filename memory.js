document.addEventListener('DOMContentLoaded', () => {

//card options 
const cardArray = [
    {
        name: 'fries',
        img: 'fries.png'
    },
    {
        name: 'cheesburger',
        img: 'cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'milkshake.png'
    },
    {
        name: 'pizza',
        img: 'pizza.png'
    },
    {
        name: 'fries',
        img: 'fries.png'
    },
    {
        name: 'cheesburger',
        img: 'cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'milkshake.png'
    },
    {
        name: 'pizza',
        img: 'pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random());
const grid = document.querySelector('.grid');
const resultDisplay = doument.querySelector('#result');
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

//create your board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++){
        var card = document.createElement('img');
        card.setAttribute('src', 'blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipcard);
        grid.appendChild(card);

    }
}

//check for matches
function checkForMatch() { 
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match'); //if cards are chosen that are a match 'remove' cards and alert player
        cards[optionOneId].setAttribute('src', 'white.png');
        cards[optionTwoId].setAttribute('src', 'white.png');
        cardsWon.push(cardsChose);
    } else { //if cards aren't a match 'flip back over'
        cards[optionOneId].setAttribute('src', 'blank.png');
        cards[optionTwoId].setAttribute('src', 'blank.png');
        alert('Sorry, try again');
    } // displaying score 
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2) { // if player wins the game
        resultDipslay.textConent = 'Congratulations! You found them all!';
    }
}

//flip your card
function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}

createBoard();
})