// Valor gasto pelo usuario.
// Metodo de pagamento
//   - 1 - Dinheiro/Pix = 10% desconto
//   - 2 - Credito = Valor total  

let valorGasto = 1000
let metodoPagamento = 1

if ( =metodoPagamento== 1){ 
    console.log("MÉTODO DE PAGAMENTO BOLETO/PIX")
    let valorFinal = valorGasto * 0.9
    console.log("o valor final foi de R$" + valorFinal);
} else {
     console.log("MÉTODO DE PAGAMENTO CRÉDITO")
     console.log("o valor final foi de R$" + valorFinal);
}