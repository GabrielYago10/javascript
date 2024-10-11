/**
 * Calculo do valor do desconto 
 * @author Gabriel Yago
 */

const input = require('readline-sync')

let totald, total,desconto

console.clear()
console.log("Calculo do valor do desconto")

//entrada
total = Number(input.question("Digite o valor da compra: "))
desconto = Number(input.question("Digite o valor do desconto em %: "))

//processamento
totald = total - (desconto * total / 100)

//saida
console.log(`total com  desconto ${totald.toFixed(2)}`)