/**
 * Assincronismo
 * Promese
 * @author Gabriel Yago 
 */

const input = require('readline-sync')

let senha, login

//estrutura ded dados (simular um banco de dados)
const database = {
    admin: {
        usuario: "Administrador",
        senha: "password"
    },
    prof: {
        usuario: "Leandro Ramos",
        senha: "123456"
    }
}

// Autenticação de usúario 
console.clear()
console.log("-------------------")
console.log("     USÚARIO ")
console.log("-------------------")
login = input.question("login: ")
senha = input.question("senha: ")
console.log("-------------------")

function logar(login, senha) {
    //uso de promise (acesso ao "banco de dados")
    return new Promise((resolv, reject) => {
        //simulação de delay no acesso ao banco
        setTimeout(() => {
            if (database.hasOwnProperty(login)) {
                // se a senha estiver correta
                if (database[login].senha === senha) {
                    resolv("Autenticação bem sucedida. Olá," + database[login].usuario)
                } else {
                    reject("Senha incorreta. Por favor tente novamente")
                }
            } else {
                reject("Usuario não encontrado, Por favor, verificar o login")
            }
        }, 2000)
    })
}

// executar a função logar 
//no uso do promise é necessário o .them
logar(login, senha) 
    .then((menssage) => {
        console.log(menssage)
    })
    .catch((error) => {
        console.log("Erro de autenticação. " + error)
    })
