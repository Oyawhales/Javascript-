'use strict';

// creating variables
const player0E1 = document.querySelector('.player--0');
const player1E1 = document.querySelector('.player--1');

const score0E1 = document.querySelector('#score--0');
const score1E1 = document.getElementById('score--1');
const diceE1 = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const butnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Start the game functionality
let score = [0, 0];
score0E1.textContent = 0;
score1E1.textContent = 0;
diceE1.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// Switchplayer function switches player under an applied condition
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0E1.classList.toggle('player--active');
  player1E1.classList.toggle('player--active');
};

// Add event listner to the Roll  button
butnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceE1.classList.remove('hidden');
    diceE1.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// Add event listner to the Hold  button
btnHold.addEventListener('click', function () {
  if (playing) {
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    //  Maximum hit score to confirm a win
    if (score[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      diceE1.classList.add('hidden');
    } else {
      // Switch function switches play to next player
      switchPlayer();
    }
  }
});

// Add event listner to the New  button
btnNew.addEventListener('click', function () {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0E1.textContent = 0;
  score1E1.textContent = 0;
  diceE1.classList.add('hidden');
  player0E1.classList.add('player--active');
  player1E1.classList.remove('player--active');
  player0E1.classList.remove('player--winner');
  player1E1.classList.add('player--winner');
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
});
