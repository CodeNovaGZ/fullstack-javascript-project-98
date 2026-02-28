import readlyneSync from 'readline-sync';
import { userName } from './cli.js';

const ROUND_COUNT = 3;

export default function runGame(description, getRoundData){
    const name = userName();
    console.log(description);
    for(let i = 0; i < ROUND_COUNT; i++){
        const [question, correctAnswer] = getRoundData();

        console.log(`Pregunta: ${question}`)
        const answer = readlyneSync.question("Tu respuesta: ");

        if(answer !== correctAnswer){
            console.log(`${answer} es una respuesta incorrecta ;(. La respuesta correcta era "${correctAnswer}".`);
            console.log(`¡Intentémoslo de nuevo, ${name}!`);
            return;
        }
        console.log("¡Correcto!");
    }
    console.log(`¡Felicidades, ${name}!`);
}