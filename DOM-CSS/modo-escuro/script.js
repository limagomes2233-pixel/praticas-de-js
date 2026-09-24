let trocar = document.querySelector('#trocarCor')
let modo = document.querySelector('#btnModoEscuro')


modo.addEventListener('click', clicar)

function clicar() {
    if (trocar.style.backgroundColor === 'black') {
        // Se já estiver preto, volta para o normal (aceso)
        trocar.style.backgroundColor = 'white'
        trocar.style.color = 'black'
        trocar.innerHTML = '<p>Luz acesa</p>'
    } else {
        // Se não estiver preto, apaga a luz
        trocar.style.backgroundColor = 'black'
        trocar.style.color = 'white'
        trocar.innerHTML = '<p>Luz apagada</p>'
    }
}
    