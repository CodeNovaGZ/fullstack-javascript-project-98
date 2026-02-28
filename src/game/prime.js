import runGame from "../index.js";

const description = 'Responde "yes" si el número dado es primo. De lo contrario, responde "no".'

function randomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}

function isPrime(num){
   if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function getRoundData(){
    const num = randomNumber();
    const correctAnswer = isPrime(num) ? 'yes' : 'no';


    return [num, correctAnswer];
}

export default function runPrimeGame(){
    runGame(description,getRoundData);
}