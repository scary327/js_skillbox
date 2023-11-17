const gameBoard = document.querySelector('.game__board');
let cardArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]

function Shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function GetCards(array) {
    Shuffle(array);
    for (el of array) {
        const div = document.createElement('div');
        const span = document.createElement('span');

        div.classList.add('card');
        div.classList.add('invisible');
        div.id = el;
        span.innerHTML = el;

        div.appendChild(span);
        gameBoard.appendChild(div);
    }
}

let firstCard = null;
let secondCard = null;
let openedCards = 0;

function GoGame(event) {
    const clickedCard = event.target.closest('.card');

    if (clickedCard.classList.contains('invisible')) {
        clickedCard.classList.remove('invisible');
        clickedCard.classList.add('visible');

        if (!firstCard) {
            firstCard = clickedCard;
        } else if (!secondCard) {
            secondCard = clickedCard;
            setTimeout(CheckResult, 100);
        }
    }
}

function CheckResult() {
    if (firstCard.id === secondCard.id) {
        firstCard = null;
        secondCard = null;

        openedCards+=2;
        if (openedCards === cardArray.length) {
            alert('Поздравляем, вы открыли все карточки! Хотите начать новую игру?');
            location.reload();
        }

    } else {
        setTimeout(() => {
            firstCard.classList.remove('visible');
            firstCard.classList.add('invisible');

            secondCard.classList.remove('visible');
            secondCard.classList.add('invisible');

            firstCard = null;
            secondCard = null;
        }, 100);
    }
}

gameBoard.addEventListener('click', GoGame);

GetCards(cardArray);