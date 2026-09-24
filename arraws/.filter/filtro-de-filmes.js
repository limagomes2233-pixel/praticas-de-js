const filmes = [
    { titulo: 'Matrix', duracao: 136 },
    { titulo: 'Shrek', duracao: 90 },
    { titulo: 'O Senhor dos Anéis', duracao: 201 },
    { titulo: 'Toy Story', duracao: 81 }
]

const filmesLongos = filmes.filter((filme) =>{
    return filme.duracao > 100
})
console.log(filmesLongos)