const alunos = [ 
    { nome: 'Diego', nota: 7 }, 
    { nome: 'Camila', nota: 8 }, 
    { nome: 'Livia', nota: 6 } 
]

const notasFinais = alunos.map((aluno)=>{
    return {
        nome: aluno.nome,
        nota: aluno.nota + 1
    }
})
console.log(notasFinais)