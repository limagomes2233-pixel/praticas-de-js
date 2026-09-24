let precos = [50, 150, 200, 30]
let totalComDesconto = 0

for (let preco of precos) {
    // Acumula o valor com desconto a cada volta:
    totalComDesconto = totalComDesconto + (preco * 0.9)
}

console.log(totalComDesconto) // Imprime: 387