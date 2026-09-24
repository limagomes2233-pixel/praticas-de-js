const carrinho = [
    { produto: 'Teclado', preco: 200, emEstoque: true },
    { produto: 'Mouse', preco: 80, emEstoque: false },
    { produto: 'Monitor', preco: 1200, emEstoque: true }
]

// Extraímos { emEstoque } DIRETO nos parênteses do parâmetro:
const itensEmEstoque = carrinho.filter(({ emEstoque }) => {
    return emEstoque === true
})

console.log(itensEmEstoque)







/*const pedido = {
    id: 994,
    cliente: 'Beatriz',
    total: 350,
    status: 'Enviado'
}

const { cliente,total} = pedido

console.log(cliente , total)*/