function mostrarResultado() {

    //Captura o valor do input
    let numero = parseInt(document.getElementById("numero").value);

    //Captura o sucessor e o antecessor
    let sucessor = numero + 1
    let antecessor = numero - 1

    //Captura o paragrafo
    let resultado = document.querySelector("#resultado")
    let resultado2 = document.querySelector("#resultado2")
    
    //Alterando o texto do paragrafo
    resultado.innerHTML = " o sucessor do numero e" + sucessor
    resultado2.innerHTML = " o antecessor do numero e" + antecessor
}