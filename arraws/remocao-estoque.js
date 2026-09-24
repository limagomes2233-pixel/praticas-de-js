function removerUltimoItem(estoque) {
    let tirado = estoque.pop()
    return tirado
}

let meuCarrinho = ["Notebook", "Mouse", "Teclado", "Carregador"]

// Chamamos a função e guardamos o item retornado na variável 'itemRemovido'
let itemRemovido = removerUltimoItem(meuCarrinho)

console.log(`Item removido: ${itemRemovido}`) // Exibe: Item removido: Carregador
console.log(meuCarrinho)                     // Exibe: ["Notebook", "Mouse", "Teclado"]