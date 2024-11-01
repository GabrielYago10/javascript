/**
 * desenvolvimento de uma calculadora
 * @author Gabriel Yago 
 */

const input=require('readline-sync')

let a,b, jogador
do {
console.clear()
console.log(" _____     _         _       _             ")
console.log("|     |___| |___ _ _| |___ _| |___ ___ ___ ")
console.log("|   --| .'| |  _| | | | .'| . | . |  _| .'|")
console.log("|_____|__,|_|___|___|_|__,|___|___|_| |__,|")

a = Number(input.question("Digite o Primeiro Numero:"))
b = Number(input.question("Digite o Segundo Numero:"))

console.log("")
console.log("1. Somar")
console.log("2. Subtrair")
console.log("3. Multiplicar")
console.log("4. Dividir")
console.log("5. calcular a %")
console.log("Digite a opção desejada:")
jogador = Number(input.question("qual vc quer? "))

console.log("")
switch (jogador) {
    case 1:
        somar(a,b)
        break
    case 2:
        subtrair(a,b)
        break
    case 3:
        multiplicar(a,b)
        break
    case 4:
        dividir(a,b)
        break
    case 5:
        porcentagem(a,b)
        break
    default:
        console.log("Opção invalida")
        break
}


function somar (a,b){
    return console.log(`A soma de ${a} + ${b} = ${a + b}`)
}
function subtrair(a,b){
    return console.log(`A subtracao de ${a} - ${b} = ${a - b}`)
}
function multiplicar(a,b){
    return console.log(`A multiplicacao de ${a} * ${b} = ${a * b}`)
}
function dividir(a,b){
    return console.log(`A divisao de ${a} / ${b} = ${a / b}`)
}
function porcentagem(a,b){
    return console.log(`${a} % ${b} = ${(a * b) / 100}`)
}

opcao = input.question("Desejar jogar novamente(s/n)")
} while (opcao === 's')