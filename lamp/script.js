/**
 * Eventos de intervalo
 * @author Gabriel Yago
 */

function piscar() {
    let ligada = false
    // função nativa do javascript para gerar intervalos 
    // 1000 (1000ms = 1s)
    setInterval(() => {
        if (ligada === false) {
            document.getElementById('lamp').src = "img/on.jpg"
        } else {
            document.getElementById('lamp').src = "img/off.jpg"
        }
        ligada = !ligada // !NOT
    },1000)
}