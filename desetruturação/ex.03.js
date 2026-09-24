const alunos = [
    { aluno: 'Matheus', nota: 8.5 },
    { aluno: 'Carla', nota: 5.0 },
    { aluno: 'Juliana', nota: 7.0 },
    { aluno: 'Pedro', nota: 4.5 }
]

const aprovados = alunos.filter(({nota}) =>{
    return nota >= 7
})

console.log(aprovados)