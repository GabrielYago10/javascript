/**
 *  REGRA DE TRES 
 * @author Gabriel Yago
 */

// importar a biblioteca read-linesync
const input = require('readline-sync')

// variaveis 
let x, y, valor 

console.clear
console.log("Cálculo de Regra de 3")
console.log("x% de y = valor")

//entrada
x = Number(input.question("Digite o valor de x: "))
y = Number(input.question("Digite o valor de y: "))

//processamento 

valor = (x * y ) / 100 

//saida

console.log(`${x}% de ${y} = ${valor.toFixed(2)}`)
