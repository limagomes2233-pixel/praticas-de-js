let pontos = [3, 1, 0, 3, 3, 1, 0, 3]
let vitoria = 0

for(let ponto of pontos){
    if(ponto == 3){
        vitoria += ponto
    }
}

console.log(vitoria)
