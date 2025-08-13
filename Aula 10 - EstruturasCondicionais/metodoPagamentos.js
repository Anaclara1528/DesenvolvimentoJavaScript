// Valor gasto pelo usuario.
// Metodo de pagamento
//   - 1 - Dinheiro/Pix = 10% desconto
//   - 2 - Debito = 5% desconto  
//   - 3 - Credito = Valor total
//   Método Parcelamento
//    1 - A vista =  Valor total
//    2 - 2x - com juros 5% no valor total
//    3 - 3x - com juros 10% no valor total

let valorGasto = 1000
let metodoPagamento = 1

if (metodoPagamento == 1) { 
    console.log("MÉTODO DE PAGAMENTO BOLETO/PIX")
    let valorFinal = valorGasto * 0.9
    console.log("o valor final foi de R$" + valorFinal);

} else if(metodoPagamento == 2){
    let valorFinal = valorGasto * 0.95
     console.log("MÉTODO DE PAGAMENTO DÉBITO")
     console.log("o valor final foi de R$" + valorFinal);
}
else{
    let pagamentoCrédito
    console.log("MÉTODO DE PAGAMENTO CRÉDITO")
    if(pagamentoCrédito == 1){
    console.log("PAGAMENTO A VISTA")
    console.log("o valor final foi de R$" + valorFinal);
} else if(pagamentoCrédito == 2){
      let valorFinal = valorGasto * 1.05
      console.log("PARCELADO EM 2 VEZES")
      console.log("O valor final foi de R$" + valorFinal);
} else{
    let valorFinal = valorGasto * 1.1
    console.log("PAGAMENTO EM 3 VEZES");
    console.log("O valor gasto foi de R$" + valorFinal);
}
    }
    