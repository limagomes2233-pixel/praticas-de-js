function checarFebre(temperatura) {
    if (temperatura >= 37.5) {
        return 'Com febre! Tome cuidado'
    } else {
        return 'Temperatura normal'
    }
}

// Chamas a função e guardas o texto retornado:
let febre = checarFebre(39.5)
let normal = checarFebre(36.5)

// Exibes o resultado guardado nas variáveis:
console.log(febre)
console.log(normal)