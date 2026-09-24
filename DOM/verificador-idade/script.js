let idade = document.querySelector('#inputNumero')
let botaoVerificar = document.querySelector('#btnVerificar')
let texto = document.querySelector('#txtresultado')

botaoVerificar.addEventListener('click', clicar)

function clicar() {
    // É boa prática guardar o .value em uma variável para o código ficar bem claro:
    let idadeDigitada = idade.value 

    if (idadeDigitada >= 18) {
        texto.innerHTML = "Você é maior de idade!"
    } else {
        texto.innerHTML = "Você é menor de idade!"
    }
}