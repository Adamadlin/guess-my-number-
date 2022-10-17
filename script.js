'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number !';


// document.querySelector('.number').textContent = 6
// document.querySelector('.score').textContent = 20

// document.querySelector('.guess').value = 20
// console.log(document.querySelector('.guess').value)

let magicNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(typeof guess, guess)
    // When there is no input
    if (!guess) {
        displayMessage('No number')

        // when player wins  
    } else if (guess === magicNumber) {
        // document.querySelector('.message').textContent = 'correct number !';
        displayMessage('Correct Number!')
        document.querySelector('.number').textContent = magicNumber

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore
        }

        // when guess is too high
    } else if (guess > magicNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'too high ';
            score--;
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = 'you lost the game';
            document.querySelector('.score').textContent = 0
        }
        // when guess is too low
    } else if (guess < magicNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'too low ';
            score--;
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = 'you lost the game';
            document.querySelector('.score').textContent = 0
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    magicNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.score').textContent = score
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''

})