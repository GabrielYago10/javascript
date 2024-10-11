/**
 * Calculo da média aritmética de 3 valores
 * @author Gabriel Yago
 */

// importar a biblioteca read-linesync
const input = require('readline-sync')
const colors = require('colors')

// variaveis 
let num1, num2, num3, media

console.clear()
console.log("Cálculo da média aritmetica de 3 numeros")

// entrada
//No console entrada(input) numérica precisam ser convertidas com uso do método Number()
num1 = Number(input.question("Digite o primeiro numero: "))
num2 = Number(input.question("Digite o segundo numero: "))
num3 = Number(input.question("Digite o terceiro numero: "))

// processamento 
media = (num1 + num2 + num3) / 3

// saida 
console.log(`Média: ${media.toFixed(1)}`)
if (media < 5 ) {
    console.log("reprovado".red)
} else {
    console.log("aprovodo".blue)
}