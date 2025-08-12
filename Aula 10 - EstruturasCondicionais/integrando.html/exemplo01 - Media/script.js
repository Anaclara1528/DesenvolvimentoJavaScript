function mostrarResultado(){
    let valorPagamento = parseInt(document.getElementById("valorGasto").value);
    let metodoPagamento = document.getElementById("metodoPagamento").value;
    let resultado = document.querySelector("#resultado")

    if (metodoPagamento === "1"){
        let valorFinal = valorGasto * 0.9
        resultado.innerHTML = "O valor gasto da sua compra ficou R$" + valorFinal.
        toFixed(2).replace (".",",")
    }



    }