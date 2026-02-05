import readlyneSync from 'readline-sync';

export function userName() {
  console.log('Welcome to the Brain Games!');
  const name = readlyneSync.question('What is your name?:');
  console.log(`Hello, ${name}!`);
  return name;
}