/**
 * Cálculo do consumo de combustivel
 * @author Gabriel Yago
 */

const input = require('realdline-sync')

//variaveis 
let distancia, litros, consumo

console.clear()
console.log("Calculo do consumo de combustivel")

//entrada 
distancia = Number(input.question("Distanvia percorrida: "))
litros = Number(input.question("Quatidade de litros de combustivel: "))
 
//prcessamento 
consumo = distancia / litros 

// saida 
console.log(`Comsumo do veiculo: ${consumo.toFixed(1)} Km/l`)
