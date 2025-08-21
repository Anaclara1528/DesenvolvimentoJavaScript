let produtos = [
    {tipo: "Notebook", preco: 5000, categoria: "Eletrônico"},
    {tipo: "Teclado", preco: 200, categoria: "Periférico"},
    {tipo: "Mouse", preco: 120, categoria: "Periférico"},
    {tipo: "Computador", preco: 5000, categoria: "Eletrônico"},
    {tipo: "Monitor", preco: 800, categoria: "Periférico"},
    {tipo: "Fone", preco: 200, categoria: "Periférico"},
    {tipo: "Microfone", preco: 300, categoria: "Periférico"},
    {tipo: "Processador", preco: 3100, categoria: "Eletrônico"},
    {tipo: "Placa de Vidro", preco: 2000, categoria: "Eletrônico"},
    {tipo: "mouse Pad", preco: 50, categoria: "Periférico"}
]

//Array Produtos
produtos.forEach((produtos) =>{
    console.log(produtos.tipo + "R$" + produtos.preco);
})

//Filtro 
const produtosEletronicos = produtos.filter(produtos => produtos.categoria === "Eletrônico")
 console.log("Produtos Eletrônicos")
produtosEletronicos.forEach((produtos) => {
    console.log(produtos.tipo + "R$" + produtos.preco);
})

//Map
const produtosEletrônicosDesconto = produtosEletronicos.map(produtos => ({

    tipo: produtos.tipo,
    preco: produtos.preco * 0.95,
    categoria: produtos.categoria
}))