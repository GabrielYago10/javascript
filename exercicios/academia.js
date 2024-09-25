/**
 *  Ficha de um alino de academia 
 * @author Gabriel Yago  
 */

// variaveis 
let nome 
let idade
let peso 
let altura 
let vip
let fcm 
let imc

console.clear()
nome = "Gabriel Yago"
idade = 20
peso = 53
altura = 1.75
vip = true

// processamento
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)

// saida 
console.log("Ficha do aluno")
console.log("_____________________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura} `)
console.log(`vip: ${vip}`)
console.log(`FCM: ${fcm}`)
console.log(`IMC: ${imc.toFixed(2)}`)
