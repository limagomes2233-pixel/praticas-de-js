let preco = 150
let desconto = 15 // número puro, sem o %

// 1. Calcula quanto é 15% de 150 (R$ 22.50)
let valorDoDesconto = (preco * desconto) / 100

// 2. Subtrai o desconto do preço original (R$ 127.50)
let valorFinal = preco - valorDoDesconto

console.log(`O produto de R$ ${preco} com ${desconto}% de desconto custará R$ ${valorFinal}.`)