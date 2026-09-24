const produtos = [
    { nome: 'Notebook', preco: 3500 },
    { nome: 'Fone de Ouvido', preco: 150 },
    { nome: 'Monitor', preco: 1200 },
    { nome: 'Mousepad', preco: 40 }
]

// 1. Filtra acessando .preco
const produtosCaros = produtos.filter((produto) => {
    return produto.preco > 1000
})

// 2. Exibe no console usando a variável 'produto' no singular
produtosCaros.forEach((produto) => {
    console.log(`O produto ${produto.nome} custa R$ ${produto.preco}`)
})