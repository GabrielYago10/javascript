/**
 *  Verificar idade de votação 
 * @Author Gabriel Yago
 */

// variaveis 

const input = require('readline-sync')

let idade

console.clear()
console.log("IDADE DE VOTAÇÃO")

idade = Number(input.question("Qual sua idade: "))

if (idade < 16) {
    console.log("proibido votar")
} else if (idade === 16 || idade === 17 || idade > 70 ){
    console.log("Voto facultiativo")
} else {
    console.log("Voto obrigatoiro")
}
