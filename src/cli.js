import readlyneSync from 'readline-sync';

export function userName() {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlyneSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${name}!`);
  return name;
}