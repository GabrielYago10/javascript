/**
 * Calculo do volume de um aquário:
 * @author Gabriel Yago
 */

// Importar a bilbioteca readline-sync

const input = require('readline-sync')

// variaveis 

let comprimento, largura, altura, volume

console.clear()
console.log("Cálculo do volume de um aquario: ")

//entrada 

comprimento = Number(input.question("Digite o comprimento em cm:"))
largura = Number(input.question("Digite a largura em cm: "))
altura = Number(input.question("Digite a altura em cm: "))

// processamento 

volume = (comprimento * largura * altura) / 1000

//saida 

console.log(`Volume do aquario: ${volume.toFixed(2)} Litros`)