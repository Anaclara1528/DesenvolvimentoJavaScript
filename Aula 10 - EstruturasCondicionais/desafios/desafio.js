//A multa vai custar R$ 7,00 por cada Km ultrapassado
let velocidade = 80;
let limite = 80;
let valorKm = 7

if(velocidade > limite) {
    let limite = velocidade - limite;
    let multa = limite * 7;
    console.log("VOCÊ FOI MULTADO E TERÁ QUE PAGAR R$");
    console.log("Sua multa foi de" + multa + "R$")
} else {
    console.log("jyftj")
}