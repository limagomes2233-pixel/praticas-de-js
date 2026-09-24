function adicionarItem(lista, novoItem) {
    lista.push(novoItem) // Adiciona o novo item na lista recebida
    return lista.length  // Retorna o novo tamanho da lista
}

// 1. Criamos a lista inicial
let carrinho = ['Camiseta', 'Calça']

// 2. Chamamos a função passando o 'carrinho' e o novo produto ('Tênis')
let totalItens = adicionarItem(carrinho, 'Tênis')

// 3. Exibimos os resultados
console.log(`Quantidade de itens no carrinho: ${totalItens}`)
console.log(carrinho) // Imprime: ['Camiseta', 'Calça', 'Tênis']