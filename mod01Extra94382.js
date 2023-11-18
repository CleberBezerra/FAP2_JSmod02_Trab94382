// import prompt from 'prompt';
const prompt = require('prompt-sync')();

let numero1 = Number(prompt("Digite o 1º número: "));
//let numero2 = Number(prompt("Digite o 2º número: "));
let numero2 = 0;

try {
    divisao = numero1 / numero2;
    console.log(divisao);
} catch (error) {
    console.error("ERRO:", error.message);
} finally {
    console.log('Bloco "finally" executado.');
}

