const candidatos = [
    { nome: 'Mariana', pontos: 85 },
    { nome: 'João', pontos: 60 },
    { nome: 'Beatriz', pontos: 92 },
    { nome: 'Lucas', pontos: 45 }
]

const candidatosAprovados = candidatos.filter((candidato) => {
    return candidato.pontos >= 70

})

candidatosAprovados.forEach(candidato => {
    console.log(`Candidato(a) ${candidato.nome} aprovado(a) com ${candidato.pontos} pontos`)
})