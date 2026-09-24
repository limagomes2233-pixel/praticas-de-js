const vendas = [
    { cliente: 'Ana', valor: 350, canal: 'Online' },
    { cliente: 'Bruno', valor: 120, canal: 'Loja Física' },
    { cliente: 'Carla', valor: 500, canal: 'Online' }
]

// 1. Filtrando apenas as vendas online
const vendasOnline = vendas.filter(({ canal }) => {
    return canal === 'Online'
})

// 2. Somando o valor das vendas filtradas
const totalOnline = vendasOnline.reduce((acumulador, { valor }) => {
    return acumulador + valor
}, 0)

console.log(vendasOnline) 
console.log(totalOnline)  