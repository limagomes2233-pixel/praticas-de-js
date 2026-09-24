let input1 = document.querySelector('#inputNumero1')
let input2 = document.querySelector('#inputNumero2')
let botaoEnviar = document.querySelector('#btnCalcular')
let resultado = document.querySelector('#resultado')

botaoEnviar.addEventListener('click', clicar)

function clicar() {
    let numero1 = Number(input1.value)
    let numero2 = Number(input2.value)
    
    let somar = numero1 + numero2
    
    resultado.innerHTML = `A soma deu ${somar}`
}