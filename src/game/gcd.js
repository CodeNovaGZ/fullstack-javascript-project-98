import runGame from "../index.js";

const description = "Encuentra el máximo común divisor de los números dados."

function randomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}

function getMCD(a, b){
    let rest = a % b;
    while(rest !== 0){
        a = b;
        b = rest;

        rest = a % b;
    }

    return b;

}

function getRoundData(){
    const number1 = randomNumber();
    const number2 = randomNumber();
    const question = `${number1} ${number2}`;
    const correctAnswer = getMCD(number1, number2).toString();

    return [question, correctAnswer]
}

export default function runGcdGame(){
    runGame(description, getRoundData);
}