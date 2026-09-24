let statusOff = document.querySelector('#statusOff')
let statusOn = document.querySelector('#btnOn')

statusOn.addEventListener('click',clicar)

function clicar(){
    if (statusOff.innerHTML === 'online') {
        statusOff.innerHTML = 'offline'
    } else {
        statusOff.innerHTML = 'online'
    }
} 
