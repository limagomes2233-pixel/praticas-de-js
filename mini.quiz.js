function calcularTotalCarrinho(precos) {
    let total = 0

    for (let preco of precos) { // 👈 Usando "preco" (singular) e "precos" (plural)
        if (preco > 50) {
            total += preco * 0.9
        } else {
            total += preco      // 👈 Somando o item individual
        }
    }
    return total
}

let lista = [20, 100, 30, 200]
let resultado = calcularTotalCarrinho(lista) // 👈 Guardando o retorno da função

console.log(resultado) // 👈 Imprimindo o total calculado (320)