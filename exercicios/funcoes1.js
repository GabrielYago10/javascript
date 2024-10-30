/**
 * Estudo das funções simples
 * @author Professor José de Assis
 */

hello()
function hello() {
    console.log("Hello function")
}
//função atribuada
//função atribuidas precisam ser criadas no inicio 
// do codigo (antes da chamada da função)
const hello2 = function() {
    console.log("Hello2 function")
}
hello2()
console.log(typeof(hello2))

const hello3 = () => {
    console.log("Hello function")
}
hello3()
console.log(typeof(hello3))

// Arrow function mais simplificada (nesta caso só é possivel executar uma linha de código)
const hello4 = _ => console.log("Hello4 function")
hello4()
console.log(typeof(hello4))