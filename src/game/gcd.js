import runGame from '../index.js';

const description = 'Encuentra el máximo común divisor de los números dados.';

function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function getMCD(a, b) {
  let x = a;
  let y = b;

  let rest = x % y;

  while (rest !== 0) {
    x = y;
    y = rest;
    rest = x % y;
  }

  return y;
}

function getRoundData() {
  const number1 = randomNumber();
  const number2 = randomNumber();
  const question = `${number1} ${number2}`;
  const correctAnswer = getMCD(number1, number2).toString();

  return [question, correctAnswer];
}

export default function runGcdGame() {
  runGame(description, getRoundData);
}
