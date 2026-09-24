let texto = document.querySelector('#inputNome')
let botao = document.querySelector('#btnEnviar')
let mensagem = document.querySelector('#txtMensagem') // Só confira se no HTML o id do parágrafo é txtMensagem mesmo (com o #)

botao.addEventListener('click', clicar)

function clicar() {
    let nomeDigitado = texto.value // Pegamos o texto que o usuário digitou
    mensagem.innerHTML = 'Olá, ' + nomeDigitado + '! Seja bem-vindo!' // Escrevemos a mensagem completa na tela
}