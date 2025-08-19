const input = require ("prompt-sync")();

for(let i = 1; i <= 3; i++) {

    let numero = parseInt(input("Digite um valor"))
    let resto = numero % 2 
    
    if (resto === 1 && numero /3 === 0){
        console.log("ESSE NÚMERO ATENDE AOS REQUISITOS");
    } else {
        console.log("ESSE NÚMEO NÃO ATENDE AOD RESQUISITOS")
    }
}