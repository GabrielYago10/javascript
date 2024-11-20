/**
 *  Verificar agua
 * @Author Gabriel Yago
 */

const input = require('readline-sync')
console.log(typeof(input))

// variaveis 

let consumo, peso 

//console.clear()
console.log("Cálculo do consumo de água")

//entrada 

peso = Number(input.question("Digite seu peso:(Kg)"))

//processamento 

consumo = peso * 0.35 // (35ml de água por cada kg)

//saida

console.log(`Consumo diario de água deve ser: ${consumo.toFixed(3)} litros`) // to Fixed para deixar limitado à 3 caracteres de ml