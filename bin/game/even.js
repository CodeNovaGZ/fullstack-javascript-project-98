import { userName } from '../../src/cli.js';
import readlyneSync from 'readline-sync';

const ROUND_COUNTS = 3;

export function brainEven() {
    const name = userName();
    for(let i = 0; i < ROUND_COUNTS; i++){
        const randonNumber = Math.floor(Math.random() * 100);
        const isEven = randonNumber % 2 === 0;
        const correctAnswer = isEven ? "yes" : "no";
        console.log('Responde "yes" si el número es par, de lo contrario responde "no".');
        console.log(`Pregunta: ${randonNumber}`);
        const answer = readlyneSync.question('Your answer:');
        if (answer !== correctAnswer) {
            console.log(`"${answer}" es una respeusta incorrecta ;(. La respuesta correcta era "${correctAnswer}".`);
            console.log(`Intentemoslo de nuevo, ${name}!`);
            return;
        }
        console.log("¡Correcto!");
    }
    console.log(`¡Felicidades, ${name}!`);
}