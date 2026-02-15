import  runGame  from '../index.js';

const description = 'Responde "yes" si el número es par, de lo contrario responde "no".';

function isEven(number){
    return number % 2 === 0;
}

function getRoundData(){
    const number = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    return [number, correctAnswer];
}

export default function runEvenGame(){
    runGame(description, getRoundData);
}