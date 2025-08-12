function mostrarResultado(){
    let velocidade = parseInt (document.querySelector("#Velocidade").value);
    let velocidadeMaxima = 80
    let valorMulta = 7
    let resultado = document.querySelector("Resultado")
    if(velocidade > velocidadeMaxima){
        let velocidadeTotal = velocidade - velocidadeMaxima
        let multa = velocidadeTotal * valorMulta
        resultado.innerHTML = "A sua multa foi de " + multa + "R$"
    } else {
        resultado.innerHTML = "Parabéns você não foi multado"
    }
}