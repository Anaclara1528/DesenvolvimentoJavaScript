let ladoA = 10;
let ladoB = 10;
let ladoC = 10;

let ladoAB = ladoA + ladoB;
let ladoAC = ladoA + ladoC;
let ladoBC = ladoB + ladoC;

//Verifica se os lados podem formar um triângulo
if(ladoAB > ladoC && ladoAC > ladoB && ladoBC > ladoA){
    console.log("LADOS VÁLIDOS PARA FORMAR UM TRIÂNGULO");
 

// Agora idêntifica o tipo do triângulo
if(ladoA === ladoB && ladoB === ladoC) {
    console.log("Equilátero");

} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
    console.log("Isósceleces");

} else {
     console.log("Escaleno");
}
} else {
    console.log("NÃO FOI POSSÍVEL FORMAR UM TRIÂNGULO");
} 