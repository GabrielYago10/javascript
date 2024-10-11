/**
 * Valor do troco
 * @author Gabriel Yago
 */

const input = require('readline-sync')

let pago, compra, troco 

console.clear()
console.log("Valor do troco")

compra = Number(input.question("Digite o valor da compra: "))
pago = Number(input.question("Digite o valor pago: "))

troco = pago - compra

console.log(`Troco: ${troco}`)