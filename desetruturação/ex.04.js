const produtos = [
    { nome: 'Teclado Mecânico', preco: 250 },
    { nome: 'Mouse Gamer', preco: 120 },
    { nome: 'Monitor UltraWide', preco: 1500 }
]


const etiquetas = produtos.map(({nome, preco}) =>{
    return `O produto ${nome} custa R$ ${preco}`
})

console.log(etiquetas)
