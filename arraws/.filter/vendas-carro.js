const carros = [
    { modelo: 'Civic', ano: 2018 },
    { modelo: 'Fusca', ano: 1978 },
    { modelo: 'Corolla', ano: 2022 },
    { modelo: 'Uno', ano: 1995 }
]

// Aplica o .filter() na lista original (carros):
const carrosNovos = carros.filter((carro) => {
    return carro.ano >= 2010
})

console.log(carrosNovos)