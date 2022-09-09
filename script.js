//variables
const restartButton = document.querySelector(`#restart`);
const mySite = document.querySelector(`#promo`);
const twoOutOfThree = document.querySelector(`#two`);
const threeOutOfFive = document.querySelector(`#three`);
const fiveOutOfNine = document.querySelector(`#five`);
const playerPoint = document.querySelector(`#point-player`);
const computerPoint = document.querySelector(`#point`);
const rockButton = document.querySelector(`#rock`);
const paperButton = document.querySelector(`#paper`);
const scissorsButton = document.querySelector(`#scissors`);
const winOrLose = document.querySelector(`#win`);
const starterImage = document.querySelector(`.starter-image`);
const playerHand = document.querySelector(`#player--0-side`);
const computerHand = document.querySelector(`#player--1-side`);
let playerScore = document.querySelector(`#player--0`);
let computerScore = document.querySelector(`#player--1`);
let playerScoreNumber = 0;
let computerScoreNumber = 0;
let number;
let playerNumber;
let bestOutOf;
const rulesButton = document.querySelector(`#rules`);
const overlay = document.querySelector(`.overlay`);
const closeOut = document.querySelector(`#closeout`);
console.log(closeOut);
//functions
const computerNumber = function () {
  number = Math.trunc(Math.random() * 3 + 1);
};
const rockClick = function () {
  playerNumber = 2;
  starterImage.classList.add(`hide`);
  setTimeout(function () {
    playerHand.classList.add(`shoot`);
    computerHand.classList.add(`shoot`);
  }, 500);
  computerHand.classList.remove(`shoot`);
  playerHand.classList.remove(`shoot`);
  computerNumber();
  console.log(number);
  playerHand.src = `rps2player.png`;
  playerHand.classList.remove(`hidden`);
  computerHand.src = `rps${number}computer.png`;
  computerHand.classList.remove(`hidden`);
  if (playerNumber > number) {
    playerScoreNumber++;
    playerPoint.classList.remove(`hidden`);
    draw.classList.add(`hidden`);
    computerPoint.classList.add(`hidden`);
    playerScore.textContent = playerScoreNumber;
    console.log(playerScoreNumber, playerScore);
    if (playerScoreNumber === bestOutOf) {
      winOrLose.classList.remove(`hidden`);
      mySite.classList.remove(`hidden`);
    }
  } else if (playerNumber < number) {
    computerScoreNumber++;
    computerScore.textContent = computerScoreNumber;
    computerPoint.classList.remove(`hidden`);
    playerPoint.classList.add(`hidden`);
    draw.classList.add(`hidden`);
    if (computerScoreNumber === bestOutOf) {
      winOrLose.classList.remove(`hidden`);
      winOrLose.textContent = `You've Lost`;
      mySite.classList.remove(`hidden`);
    }
  } else {
    draw.classList.remove(`hidden`);
    computerPoint.classList.add(`hidden`);
    playerPoint.classList.add(`hidden`);
  }
};
const paperClick = function () {
  playerNumber = 3;
  starterImage.classList.add(`hide`);
  setTimeout(function () {
    playerHand.classList.add(`shoot`);
    computerHand.classList.add(`shoot`);
  }, 1);
  computerHand.classList.remove(`shoot`);
  playerHand.classList.remove(`shoot`);
  computerNumber();
  console.log(number);
  playerHand.src = `rps1player.png`;
  playerHand.classList.remove(`hidden`);
  computerHand.src = `rps${number}computer.png`;
  computerHand.classList.remove(`hidden`);
  if (1 === number) {
    computerScoreNumber++;
    computerScore.textContent = computerScoreNumber;
    computerPoint.classList.remove(`hidden`);
    playerPoint.classList.add(`hidden`);
    draw.classList.add(`hidden`);
    if (computerScoreNumber === bestOutOf) {
      winOrLose.classList.remove(`hidden`);
      winOrLose.textContent = `You've Lost`;
      mySite.classList.remove(`hidden`);
    }
  } else if (playerNumber > number) {
    playerScoreNumber++;
    playerScore.textContent = playerScoreNumber;
    playerPoint.classList.remove(`hidden`);
    draw.classList.add(`hidden`);
    computerPoint.classList.add(`hidden`);
    if (playerScoreNumber === bestOutOf) {
      winOrLose.classList.remove(`hidden`);
      mySite.classList.remove(`hidden`);
    }
  } else {
    draw.classList.remove(`hidden`);
    computerPoint.classList.add(`hidden`);
    playerPoint.classList.add(`hidden`);
  }
};
const scissorsClick = function () {
  playerNumber = 1;
  starterImage.classList.add(`hide`);
  setTimeout(function () {
    playerHand.classList.add(`shoot`);
    computerHand.classList.add(`shoot`);
  }, 500);
  computerHand.classList.remove(`shoot`);
  playerHand.classList.remove(`shoot`);
  computerNumber();
  console.log(number);
  playerHand.src = `rps3player.png`;
  playerHand.classList.remove(`hidden`);
  computerHand.src = `rps${number}computer.png`;
  computerHand.classList.remove(`hidden`);
  if (number == 3) {
    playerScoreNumber++;
    playerScore.textContent = playerScoreNumber;
    playerPoint.classList.remove(`hidden`);
    draw.classList.add(`hidden`);
    computerPoint.classList.add(`hidden`);
    if (playerScoreNumber === bestOutOf) {
      winOrLose.classList.remove(`hidden`);
      mySite.classList.remove(`hidden`);
    }
  } else if (number === 2) {
    computerScoreNumber++;
    computerScore.textContent = computerScoreNumber;
    computerPoint.classList.remove(`hidden`);
    playerPoint.classList.add(`hidden`);
    draw.classList.add(`hidden`);
    if (computerScoreNumber === bestOutOf) {
      winOrLose.classList.remove(`hidden`);
      winOrLose.textContent = `You've Lost`;
      mySite.classList.remove(`hidden`);
    }
  } else {
    draw.classList.remove(`hidden`);
    computerPoint.classList.add(`hidden`);
    playerPoint.classList.add(`hidden`);
  }
};

const rulesClick = function () {
  document.querySelector(`#rules-text`).classList.remove(`hidden`);
  document.querySelector(`#blur`).classList.remove(`hidden`);
};

const three = function () {
  bestOutOf = 2;
  document.querySelector(`#intro`).classList.add(`hidden`);
  console.log(bestOutOf);
  document.querySelector(`#main`).classList.remove(`hidden`);
};

const five = function () {
  bestOutOf = 3;
  document.querySelector(`#intro`).classList.add(`hidden`);
  console.log(bestOutOf);
  document.querySelector(`#main`).classList.remove(`hidden`);
};

const nine = function () {
  bestOutOf = 5;
  document.querySelector(`#intro`).classList.add(`hidden`);
  console.log(bestOutOf);
  document.querySelector(`#main`).classList.remove(`hidden`);
};
const modalEscape = function (event) {
  if (event.key === `Escape`) {
    document.querySelector(`#rules-text`).classList.add(`hidden`);
    document.querySelector(`#blur`).classList.add(`hidden`);
  }
};
const closer = function () {
  document.querySelector(`#rules-text`).classList.add(`hidden`);
  document.querySelector(`#blur`).classList.add(`hidden`);
};
/////
const restartClick = function () {
  computerScoreNumber = 0;
  playerScoreNumber = 0;
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  playerHand.classList.add(`hidden`);
  computerHand.classList.add(`hidden`);
  starterImage.classList.remove(`hidden`);
  winOrLose.classList.add(`hidden`);
  mySite.classList.add(`hidden`);
  playerPoint.classList.add(`hidden`);
  computerPoint.classList.add(`hidden`);
  document.querySelector(`#intro`).classList.toggle(`hidden`);

  document.querySelector(`#main`).classList.toggle(`hidden`);
};
////////////
//functionality/logic
rockButton.addEventListener(`click`, rockClick);
paperButton.addEventListener(`click`, paperClick);
scissorsButton.addEventListener(`click`, scissorsClick);
twoOutOfThree.addEventListener(`click`, three);
threeOutOfFive.addEventListener(`click`, five);
fiveOutOfNine.addEventListener(`click`, nine);
rulesButton.addEventListener(`click`, rulesClick);
document.addEventListener(`keydown`, modalEscape);
closeOut.addEventListener(`click`, closer);
overlay.addEventListener(`click`, closer);
restartButton.addEventListener(`click`, restartClick);
console.log(playerScore);
console.log(closeOut);
