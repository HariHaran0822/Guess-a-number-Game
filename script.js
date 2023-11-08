'use strict';
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let totalCount = 20;
let message = document.querySelector('.message').textContent;
let highscore = (document.querySelector('.highscore').textContent = 0);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let btn = document
  .querySelector('.check')
  .addEventListener('click', function () {
    let inputValue = Number(document.querySelector('.guess').value);

    if (!inputValue) {
      //if input is empty or value is 0 , 0 is a falsy value so !guess it true for condition
      displayMessage(
        'Input is empty or 0 , please enter number between 1 to 20'
      );
    } else if (inputValue !== randomNumber) {
      if (totalCount > 1) {
        displayMessage(
          inputValue > randomNumber
            ? 'number is too high answer !!!'
            : 'number is too low answer !!!'
        );
        totalCount--;
        document.querySelector('.score').textContent = totalCount;
      } else {
        displayMessage('Opss you Lost 🤧!!!');
        document.querySelector('.score').textContent = 0;
      }
    } else if (inputValue === randomNumber) {
      //When input is Equals === Win
      document.querySelector('body').style.backgroundColor = 'lightgreen';
      displayMessage('🏆🏆🏆 correct answer');
      document.querySelector('.highscore').textContent = totalCount;
      document.querySelector('.number').textContent = randomNumber;
      if (totalCount > highscore) {
        highscore = totalCount;
      }
    }
  });

// Again button
let playAgainBtn = document
  .querySelector('.again')
  .addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = '#222';
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    totalCount = 20;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = totalCount;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  });
