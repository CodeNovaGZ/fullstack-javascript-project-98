import runGame from "../index.js";

const description = '¿Cuál es el resultado de la expresión?';

function randomNumber(){
    return Math.floor(Math.random() * 10) + 1;
}

function randomOperator(){
    const operators = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * operators.length);
    return operators[randomIndex];
}

function calculate(a, b, operator){
    switch(operator){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
    }
}

function getRoundData(){
    const number1 = randomNumber();
    const number2 = randomNumber();
    const operator = randomOperator();
    const question = `${number1} ${operator} ${number2}`;
    const correctAnswer = calculate(number1, number2, operator).toString();

    return [question, correctAnswer];
}

export default function runCalcGame(){
    runGame(description, getRoundData);
}