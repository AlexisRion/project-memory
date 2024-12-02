const gameBoard = document.getElementById('board')
const scoreBoard = document.getElementById('scoreBoard')

let cards = []
let flippedCards = []
let score = 0

function createCards() {
    const values = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    const doubledvalues = [...values, ...values]
    doubledvalues.sort(() => Math.random() - 0.5)

    doubledvalues.forEach(value => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.dataset.value = value
        card.addEventListener('click', flipcard)
        gameBoard.appendChild(card)
        cards.push(card)
    });
}

function flipcard(event) {
    const card = event.target
    if (flippedCards.length < 2 && !cards.classList.contains('flipped')) {
        card.classList.add('flipped')
        card.textcontent = card.dataset.value;
        flippedCards.push(card)
        if (flippedCards.length === 2) {
            checkmatch()
        }
    }
}

function checkmatch() {
    const [card1, card2] = flippedCards
    if (card1.dataset.value === card2.dataset.value) {
        score++
        scoreBoard.textContent = 'Score: ${score}'
        flippedCards = [];
    } else {
        setTimeout (() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            card1.textContent = ''
            card2.textContent = ''
            flippedCards = []
        } , 3000)
    }
}