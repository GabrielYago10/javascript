/**
 * Estrutura de dados - objetos 
 * @author Gabriel Yago
 */

console.clear()

const funcionario1 = {}
console.log(typeof(funcionario1))
// adicionar dados a estrutura
funcionario1.nome = "Gabriel "
funcionario1.cargo = "auxiliar"
funcionario1.email = "gabril.yago@gmail.com"
funcionario1.salario = 1000
funcionario1.insta = "@gabrielyago"
//listar dados da istrutura 
console.log(funcionario1)
console.log(funcionario1.cargo)
// modificar os dados da estrutura 
funcionario1.nome = "gabriel yago"
console.log(funcionario1)
// excluir dados da estrutura
delete funcionario1.insta
console.log(funcionario1)

const funcionario2 = {
    nome: "Bruce Wayne",
    cargo: "CEO",
    email: "batman@gmail.com",
    salario: 400000,
}

console.log(funcionario2)

const endereco1 = {
    logradouro: "Bat Caverna",
    cidade: "Gothan City",
    estado: "Nova Jersey",
}

console.log(endereco1)

//... spread operator (união de 2 estrutura de dados )
const funcionario3 = {
    nome: "Alfred pennywort",
    cargo: "mordomo",
    email: "alfred@gmial.com",
    salario: 20000,
}

console.log(funcionario3)

const funcionario4 = {
    nome: "Dick Grayson",
    cargo: "acrobata",
    email: "robin@gmail.com",
    salario: 2000,
    ...endereco1
}

console.log(funcionario4)

const funcionario5 = {
    nome: "Tony Stark",
    cargo: "Engeinheiro",
    email: "ironman@gmail.com",
    salario: 375000,
    armadura: {
        versao: "Mark II",
        ano: 2010,
        reator: "Arc 01",
    },
    suitUp:() => {
        console.log("💀")
    }
}

console.log(funcionario5)
console.log(funcionario5.cargo)
console.log(funcionario5.armadura.versao)
funcionario5.suitUp() //execute a função interna da estrutura