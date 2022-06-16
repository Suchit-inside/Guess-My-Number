'use strict';
/*console.log(document.querySelector('.message').textContent);


document.querySelector('.score').innerHTML = '10';
document.querySelector('.guess').value = '100';
console.log(document.querySelector('.guess').value);*/
let secretNumber = Math.ceil(Math.random() * 20);
let score = 20;
let highScore = 0;

document.querySelector('.number').innerHTML = '❤'; //

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //When no input
  if (!guess) {
    document.querySelector('.message').textContent = '🚫No number is typed.';
    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      '🎉Congrats You guessed it correct';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').innerHTML = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //When guess is higher
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = `😢Too high!`;
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = `Game over`;
    }
    //When guess is lower
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = `😢Too low!`;
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector(
        '.message'
      ).textContent = `Game over, click "Again!" to restart`;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = '20';
  document.querySelector('.message').textContent = `Start guessing...`;
  secretNumber = Math.ceil(Math.random() * 20);
  document.querySelector('.number').innerHTML = '❤';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

document.querySelector('.reload').addEventListener('click', function () {
  location.reload();
});
