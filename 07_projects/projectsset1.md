# Projects related to DOM

## project link
[Click Here](https://stackblitz.com/)

# Solution Code
## project 1

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  //console.log(button);
  button.addEventListener('click', function (e) {
    //console.log(e);
    //console.log(e.target);
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        console.log(`BG Color Updated To ${e.target.id}`);
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        console.log(`BG Color Updated To ${e.target.id}`);
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        console.log(`BG Color Updated To ${e.target.id}`);
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        console.log(`BG Color Updated To ${e.target.id}`);
        break;
      default:
        console.log('Invalid Choice');
    }
  });
});

```
## project 2

```javascript 

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  console.log(`Height is ${height}`);
  console.log(`Weight is ${weight}`);

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'Please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'Please give a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
  }
});

```

## project 3

```javascript

const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## project 4

```javascript

let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessesArr = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than or equal to 1');
  } else if (guess > 100) {
    alert('Please enter a number less than or equal to 100');
  } else {
    prevGuess.push(guess);
    if (numGuess >= 10) {
      displayGuess(guess);
      displayMessage(`Game Over, Random Number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess > randomNum) {
    displayMessage(`Guess Greater Than Random Number`);
  } else if (guess < randomNum) {
    displayMessage(`Guess Lower Than Random Number`);
  } else {
    displayMessage(`You Guessed It Right, You Won !!!!`);
    endGame();
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessesArr.innerHTML += `${guess}, `;
  remaining.innerHTML = `${10 - numGuess}`;
  numGuess++;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h3>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    let randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessesArr.innerHTML = '';
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
```
