/**
 * Calculadora Alcool x gasolina
 * @author Gabriel Yago
 */

const input = require('readline-sync')

let gasolina, Alcool, total 

console.clear()
console.log("Calculadora de gasolina")

Alcool = Number(input.question("Alcool preco por litro: "))
gasolina = Number(input.question("Gasolina preco por litro: "))

total =  ( Alcool / gasolina) 

console.log(`total: ${total.toFixed(1)}`)

if (total < 0.7 ) {
    console.log("Vale mais a pena usar alcool!")
} else {
    console.log("Vale mais a pena usar gasolina")
}

