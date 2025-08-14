function mostrarResulado(){
    let ladoA = parseInt(document.querySelector("#lado1").value)
    let ladoB = parseInt(document.querySelector("#lado2").value)
    let ladoC = parseInt(document.querySelector("#lado3").value)
    let resultado = document.querySelector("#resultado")
    let tipoTriângulo = document.querySelector("#tipoTriÂngulo")

    let ladoAB = ladoA + ladoB;
let ladoAC = ladoA + ladoC;
let ladoBC = ladoB + ladoC;

//Verifica se os lados podem formar um triângulo
if(ladoAB > ladoC && ladoAC > ladoB && ladoBC > ladoA){
    resultado.innerHTml = "LADOS VÁLIDOS PARA FORMAR UM TRIÂNGULO";
 

// Agora idêntifica o tipo do triângulo
if(ladoA === ladoB && ladoB === ladoC) {
    tipoTriângulo.innerHTml = "Equilátero";

} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
    tipoTriângulo.innerHTml = "Isósceleces";

} else {
     tipoTriângulo.innerHTml = "Escaleno";
}
} else {
    tipoTriângulo.style.display = "none"
    resultado.innerHTml = "NÃO FOI POSSÍVEL FORMAR UM TRIÂNGULO";
} 
}

