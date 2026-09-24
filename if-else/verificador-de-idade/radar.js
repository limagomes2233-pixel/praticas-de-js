let velocidade = 110

if (velocidade <= 80) {
    console.log(`Sua velocidade é ${velocidade} km/h: está dentro do limite!`)
} else if (velocidade <= 100) {
    // Se chegou aqui, já sabemos que é MAIOR que 80.
    // Agora só precisamos saber se é ATÉ 100!
    console.log(`Sua velocidade é ${velocidade} km/h: multa leve.`)
} else {
    // Se não é até 80 e não é até 100, COM CERTEZA é acima de 100!
    console.log(`Sua velocidade atual é ${velocidade} km/h: MULTA GRAVÍSSIMA!`)
}