/**
 * Slide show
 * @author Gabriel Yago 
 */

// array(vetor) de imagens
let slides = ["banner1.jpg","banner2.jpg","banner3.jpg"]
let intervalo = 3000 //(300ms = 3s (ls por imagem))
let indice = 0 // apoio a lógica (indica do array)



// Função para troca das imagens 
function show() {
    // capturar do id do banner 
    const slide = document.getElementById('slide')

    //Efeito de entrada 
    //A estrutura abaixo verifica de foi atribuida a classe (.slideOut') ao indentificador #slide 
    if(slide.classList.contains('slideOut')) {
        slide.classList.remove('slideOut')
    }
    slide.classList.add('slideIn')

    // Troca de imagem
        setTimeout(() => {
        indice++
        //se o ultimo slide do vetor for atingido, voltar pa o 0 
        
        if (indice >= slides.length) {
            indice = 0
        }
        // substituir a imagem no documento html pela próxima imagem do vetor (img/slides[0] img/slides[1] img/slides[2])
        slide.src = `img/${slides[indice]}`

        }, 1000) // Ajuste (sincronizar com o CSS)

        if(slide.classList.contains('slideIn')) {
            slide.classList.remove('slideIn')
        }
        slide.classList.add('slideOut')

        // Intervalo para próxima execução (loop infinito)
        setTimeout(show, intervalo)
}

// executar a função ao indicar o documentos js 
show()

