/**
 * Uso do color-scheme para modificaar o tema (claro-escuro)
 * Uso do "local storage" para armazenamento no banco de dados do navegador
 * @author Gabriel Yago
 */

const html = document.querySelector('html')
//Uso do banco de dados do navegador 
const tema = localStorage.getItem("mode")

//Capturar e implementar a preferencia do usuário (light ou dark)
if(tema === "ligh") {
    light()
}
if(tema === "dark") {
    dark()
}

function light() {
    html.style.setProperty("color-scheme","light")
    localStorage.setItem("tema","light")
}

function dark() {
    html.style.setProperty("color-scheme","dark")
    localStorage.setItem("tema","dark9")
}

function auto() {
    html.style.setProperty("color-scheme","light dark")
    localStorage.removeItem("mode")
}