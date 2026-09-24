const funcionarios = [
    { nome: 'Luciana', salario: 3000 },
    { nome: 'Roberto', salario: 4500 },
    { nome: 'Fernanda', salario: 2800 }
]

const salariosAtualizados = funcionarios.map((funcionario) => {
    return {
        nome: funcionario.nome,
        salario: funcionario.salario + 500
    }
})

console.log(salariosAtualizados)