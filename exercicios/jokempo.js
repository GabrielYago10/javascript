/**
 * Jokenpo 
 * @author Gabriel yago 
 */

// biblioteca 
const input = require('readline-sync')

// variaveis 
let jogador, computador

console.clear()
console.log("____JoKenp____")
console.log("1. Pedra")
console.log("2. Papel")
console.log("3. Tesoura")

//Lógica do jogador 
jogador = Number(input.question("Digite a opcao desejada: "))
console.log("")
switch (jogador) {
    case 1:
        console.log("Jogador escolheu pedra")
        break
    case 2:
        console.log("Jogador escolheu Papel")
        break
    case 3:
        console.log("Jogador escolheu: TESOURA")
        break
    default:
        console.log("Opção invalida")
        break
}

// Lógica do computador
computador = Math.floor(Math.random() * 3 + 1)

switch (computador) {
    case 1:
        console.log("Computador escolheu pedra")
        break
    case 2:
        console.log("Computador escolheu Papel")
        break
    case 3:
        console.log("Computador escolheu: TESOURA")
        break
}

// Lógica para determinar o vencedor ou declarar empate
if (jogador === computador) {
    console.log("EMPATE")
} else if(jogador === 1 && computador === 3 || jogador === 2 && computador === 1 || jogador === 3 && computador === 2) {
    console.log("jogador Venceu")
} else {
    console.log("Computador Venceu")
    
}
