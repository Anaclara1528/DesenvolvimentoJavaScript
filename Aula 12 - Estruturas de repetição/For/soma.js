const input = require("prompt-sync")();

let soma = 0

for(let i = 1; i <= 3; i++) {
    let numero = parseInt(input("Digite um valor: "))
    soma = numero + soma
    console.log(numero);
}

console.log(soma);