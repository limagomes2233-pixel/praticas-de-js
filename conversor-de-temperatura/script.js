let inputCelsius = document.querySelector('#inputCelsius')
let bntConversor = document.querySelector('#btnConverter')
let resultado = document.querySelector('#resultado')

bntConversor.addEventListener('click', clicar)

function clicar() {
    let celsius = Number(inputCelsius.value)
    
    // Aplica a fórmula usando o valor capturado
    let fahrenheit = (celsius * 1.8) + 32

    // Insere o texto direto no HTML do elemento
    resultado.innerHTML = `A temperatura é ${fahrenheit}°F`
}