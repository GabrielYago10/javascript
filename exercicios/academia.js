/**
 * Ficha de um aluno de academia
 * @autor Gabriel Yago
 */

//biblioteca
const input = require('readline-sync')
const colors = require('colors')
 
// variaveis
let nome, idade, peso, altura, vip, fcm, imc, consumo
 

 
 
console.log("_                _ _   _        _____      _            _       _               ")
console.log("| |              | | | | |      / ____|    | |          | |     | |              ")
console.log("| |__   ___  __ _| | |_| |__   | |     __ _| | ___ _   _| | __ _| |_ ___  _ __   ")
console.log("| '_ \ / _ \/ _` | | __| '_ \  | |    / _` | |/ __| | | | |/ _` | __/ _ \| '__|  ")
console.log("| | | |  __/ (_| | | |_| | | | | |___| (_| | | (__| |_| | | (_| | || (_) | |     ")
console.log("|_| |_|\___|\__,_|_|\__|_| |_|  \_____\__,_|_|\___|\__,_|_|\__,_|\__\___/|_|     ")
                                                                                 
console.clear()                                                                                

// entrada de dados
nome = input.question("Digite o seu nome: ")
idade = Number(input.question("Digite sua idade: "))
peso = Number(input.question("Digite seu peso em kg: "))
altura = Number(input.question("Digite a sua altura em metros: "))

// processamento
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)
consumo = peso * 0.035
 
// saida
console.log("Ficha do aluno")
console.log("_________________________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`Vip: ${vip}`)
console.log(`FCM: ${fcm}`)
console.log(`IMC: ${imc.toFixed(2)}`)
 
// tabela IMC
if (imc < 18.5) {
    console.log("Abaixo do peso".cyan)
} else if (imc < 25) {
    console.log("Peso normal".green)
} else if (imc < 30) {
    console.log("Levemente acima do peso".yellow)
} else if (imc < 35) {
    console.log("Obesidade grau I".magenta)
} else if (imc < 40) {
    console.log("Obesidade grau II (severa)".red)
} else {
    console.log("Obesidade grau III (mórbida)".bgRed)
}
//consumo de agua
console.log(`Consumir por dia ${consumo.toFixed(3)}litro de agua `)