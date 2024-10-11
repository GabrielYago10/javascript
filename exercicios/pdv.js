/**
 * PDV 
 * @author Gabriel Yago
 */

const input = require('readline-sync')

let total, Desconto, totalDesconto,valorDesconto, valorpago, troco

console.clear()

console.log(".------..------..------.")
console.log("|P.--. ||D.--. ||V.--. |")
console.log("| :/\\: || :/\\: || :(): |")
console.log("| (__) || (__) || ()() |")
console.log("| '--'P|| '--'D|| '--'V|")
console.log("`------'`------'`------'")

// entrada 1
total = Number(input.question("Digite o valor total da compra: "))
Desconto = Number(input.question("Digite o valor do desconto em % "))

// processsamento 1
valorDescontodesconto = (Desconto * total) / 100

// processamento 2
totalDesconto = total - valorDesconto

// entrada 2
valorpago = Number(input.question("Valor em dinheiro pago pelo cliente: "))

// processamento 3
troco = valorpago - totalDesconto

// saida 
console.log("")
console.log("----------------")
console.log(`Total: R$ ${total.toFixed(2)}`)
console.log(`desconto: ${Desconto.toFixed(2)}%`)
console.log(`Valor do desconto: R$ ${valorDesconto.toFixed(2)}`)
console.log(`Total com desconto: R$ ${totalDesconto.toFixed(2)}`)
console.log("")

//saida 2 
console.log("")
console.log("---------------")
console.log(`Valor pago em dinheiro: R$ ${valorpago.toFixed(2)}`)
console.log(`Troco: R$ ${troco.toFixed(2)}`)
