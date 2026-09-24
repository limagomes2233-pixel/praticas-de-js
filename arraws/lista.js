function adicionarPreco(lista, novoPreco) {
    lista.push(novoPreco) // Usa o parâmetro dinâmico recebido
    return novoPreco      // Retorna o item que acabou de entrar
}

let precos = [10, 20, 30]

// Chamamos e exibimos o retorno do item adicionado:
console.log(adicionarPreco(precos, 40)) // Imprime: 40

// Exibimos como a lista ficou:
console.log(precos) // Imprime: [10, 20, 30, 40]