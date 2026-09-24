// 1. Seleciona os elementos do HTML
const tarefas = document.querySelector('#inputTarefas')
const botao = document.querySelector('#btnAdicionar')
const lista = document.querySelector('#listaTarefas')

// 2. Carrega as tarefas salvas no localStorage OU inicia um Array vazio
const tarefasSalvas = localStorage.getItem('tarefas')
let tarefasAdicionadas = tarefasSalvas ? JSON.parse(tarefasSalvas) : []

// 3. Função para SALVAR no localStorage (fica solta no escopo global)
const salvarTarefas = () => {
    localStorage.setItem('tarefas', JSON.stringify(tarefasAdicionadas))
}

// 4. Adiciona o evento no botão de adicionar
botao.addEventListener('click', clicar)

function clicar() {
    const textoDigitado = tarefas.value

    if (textoDigitado.trim() !== '') {
        tarefasAdicionadas.push(textoDigitado)
        
        // Salva a alteração no localStorage e atualiza a tela
        salvarTarefas()
        mostrarTarefas()

        tarefas.value = ''
    }
}

// 5. Desenha a lista na tela com base no Array
function mostrarTarefas() {
    lista.innerHTML = ''

    tarefasAdicionadas.forEach((item, indice) => {
        lista.innerHTML += `
            <li>
                ${item} 
                <button onclick="remover(${indice})">❌</button>
            </li>
        `
    })
}

// 6. Remove a tarefa do Array, salva e atualiza a tela
function remover(indice) {
    tarefasAdicionadas.splice(indice, 1)
    
    // Salva a remoção no localStorage e atualiza a tela
    salvarTarefas()
    mostrarTarefas()
}

// 7. Chamada INICIAL: desenha as tarefas salvas assim que a página carrega!
mostrarTarefas()