const funcionarios = [
    { nome: 'Lucas', salario: 3000 },
    { nome: 'Fernanda', salario: 4500 },
    { nome: 'Manoel', salario: 2500 }
]
const totalFolha = funcionarios.reduce((funcionario, salario) =>{
    return funcionario + salario.salario
}, 0)

console.log(totalFolha)


/*const produtos = [
    { nome: 'Celular', preco: 2500, emEstoque: true },
    { nome: 'Notebook', preco: 4500, emEstoque: false },
    { nome: 'Fone', preco: 150, emEstoque: true }
]

const valoresTotais = produtos.reduce((acumulador,item) =>{
        return acumulador + item.preco
}, 0)

console.log(valoresTotais)*/







/*const produtos = [
    { nome: 'Celular', preco: 2500, emEstoque: true },
    { nome: 'Notebook', preco: 4500, emEstoque: false },
    { nome: 'Fone', preco: 150, emEstoque: true }
]

const valoresProdutos = produtos.some((buscar) =>{
    return buscar.preco > 4000
})

console.log(valoresProdutos)*/




/*const produtos = [
    { nome: 'Celular', preco: 2500, emEstoque: true },
    { nome: 'Notebook', preco: 4500, emEstoque: false },
    { nome: 'Fone', preco: 150, emEstoque: true }
]

const buscadorProdutos = produtos.find((buscar) =>{
    return  buscar.nome === 'Notebook'
})

console.log(buscadorProdutos)*/

