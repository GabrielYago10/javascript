/**
 * Exemple de uso de metodo para gerear numeros aleatorios 
 * jogo do dado
 * @Author Gabriel Yago
 */

const input = require('readline-sync')

let face 

console.clear()
console.clear("Jogo do dado")
input.question("Pressione a tecla [Enter] para jogar o dado")

// Sorteio da face de um dado 
// Math classe matematica 
// floor() converso para numero inteiros 
// random() * (gerador de numeros aleatorios)

face = Math.floor(Math.random() * 6 ) // 0 1 2 3 4 5 
console.log(`Face do dado: ${face}`)