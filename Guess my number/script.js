'use strict';

// document.querySelector('.again').textContent = 'Hi hi';
// document.querySelector('.guess').value = 30;
// // document.querySelector("body").style.backgroundColor="tomato"
// // here i changed the between as a class to an id to being able to use getElementById
// document.getElementById('between').style.backgroundColor = 'red';

// AddEvent Listner to the click - This simply inferes, when i click,  return an action ( This is established withj a function )

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   if (!guess) {
//     document.querySelector('.message').textContent = '🙌 You tired';
//   }
// });

let secretAnswer = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const checks = document.querySelector('.check');
checks.addEventListener('click', myGuess);
function myGuess() {
  const ans = Number(document.querySelector('.guess').value);

  if (!ans) {
    document.querySelector('.message').textContent = '😴 Sorry No Input';
  } else if (ans === secretAnswer) {
    document.querySelector('.message').textContent =
      '🎁 gift well deserved - You got it!';
    document.querySelector('.number').textContent = secretAnswer;
    document.querySelector('.number').style.fontSize = '5rem';
    document.querySelector('body').style.backgroundColor = 'Green';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (ans > secretAnswer) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😡 You lost ';
    }
  } else if (ans < secretAnswer) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' Too Low ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You are out of the game';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
}

const again = document.querySelector('.again');
again.addEventListener('click', myFunction);
function myFunction() {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = 'Black';
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('.guess').value = '';
  //  recall that secret number already taken const; once declared cannot be re-assigned, this gives a clear difference in the use of const and let; so at the earlier declaration const was change d to let so as to enalbe re-assignment 
  secretAnswer = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  myGuess();
}
