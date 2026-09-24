let contagem =  document.querySelector('#contagem')
let botao = document.querySelector('#btnCurtir')
let curtidas = 0
btnCurtir.addEventListener('click',clicar)

function clicar() {
    curtidas++
    contagem.innerHTML = curtidas
}



