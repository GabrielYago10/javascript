/**
 * Ano automatico 
 * @author Gabriel Yago 
 */

let ano = document.getElementById('copyrightYear')

// inserindo o anona tag <span>
let anoAtual = new Date().getFullYear()
ano.innerHTML = anoAtual
