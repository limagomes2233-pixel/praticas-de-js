const produtos = [
    { nome: 'Teclado', preco: 150 },
    { nome: 'Mouse', preco: 80 },
    { nome: 'Monitor', preco: 900 }
]

produtos.forEach((produto) => {
       console.log(produto.preco)
})







/*let listaDeCompras = ['Arroz', 'Feijão', 'Ovos', 'Leite', 'Café']

function mostrarLista() {
    // 'item' é o nome (Arroz), 'indice' é a posição (0)
    listaDeCompras.splice(3,2)
    listaDeCompras.forEach((item, indice) => {
        console.log(`${indice}: ${item}`)
    })
}

// Testando a listagem:
mostrarLista()*/