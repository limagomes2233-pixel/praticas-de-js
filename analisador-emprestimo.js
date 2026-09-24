let salario = 2000
const nomeLimpo = true

if(salario >= 3000 && nomeLimpo === true){
    console.log('Empréstimo APROVADO diretamente!')
} else if(salario >= 2000 || nomeLimpo === true) {
    console.log('Empréstimo em ANÁLISE')
}else{
    console.log('Empréstimo REPROVADO.')
}