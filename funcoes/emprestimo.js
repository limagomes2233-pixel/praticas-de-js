function analisarEmprestimo(salario, nomeLimpo){
    if(salario >= 3000 && nomeLimpo === true){
        return 'Empréstimo APROVADO! .'
    } else if(salario >= 2000 ||nomeLimpo){
        return 'Empréstimo em ANÁLISE.'   
    }else{
        return 'Empréstimo REPROVADO'
    }
}
console.log(analisarEmprestimo(3500, true))  // Cliente 1
console.log(analisarEmprestimo(1500, true))  // Cliente 2
console.log(analisarEmprestimo(1000, false)) // Cliente 3