let statuA = document.querySelector('#statuA')
let interruptor = document.querySelector('#interruptor')

interruptor.addEventListener('click', clicar)
//o A maiusculo de acesa
function clicar(){
    if(statuA.innerHTML === 'apagado'){
        statuA.innerHTML = 'acesa'
    } else{
        statuA.innerHTML = 'apagado'
    }

}