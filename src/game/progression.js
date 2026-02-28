import runGame from "../index.js";

const description ="¿Qué número falta en la progresión?";

function generateProgression(start, step, length) {
    const progression = [];
    for (let i = 0; i < length; i++) {
        progression.push(start + i * step);
    }
    return progression;
}

function getProgression(){
    const firstNumber = Math.floor(Math.random() * 100) + 1;
    const step = Math.floor(Math.random() * 10) + 1;
    return generateProgression(firstNumber, step, 10);
}

function getRoundData(){
    const progression = getProgression();
    const hiddenIndex = Math.floor(Math.random() * progression.length);
    const correctAnswer = progression[hiddenIndex].toString();
    progression[hiddenIndex] = "..";
    const question = progression.join(" ");

    return [question, correctAnswer];
}

export default function runProgressionGame(){
    runGame(description, getRoundData);
}