/**
 * Tabuada usando a estrutura while 
 * @author Professor José de assis
 */

const input = require('readline-sync')
let valor 
let i = 1 // apoio a logica e laço while

console.clear()
console.log("Tabuada while")

valor = Number(input.question("Digite o valor da tabauada: "))

while (i < 11) {
    console.log(`${valor} x ${i} = ${valor * i}`)
    i++
}