var altura = 0
var largura = 0


/* Definir o tamanho da tela adequado */
function ajustGameSize(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}
ajustGameSize()

/* Randomizar o local das estrelas */
function randomPosition() {

    /* Remover estrela existente */
    if(document.getElementById(`starRandom`)) {
        document.getElementById(`starRandom`).remove()
    } 
    
    var posicaoX = Math.floor(Math.random() * largura) -90
    var posicaoY = Math.floor(Math.random() * altura) -90

    posicaoX - posicaoX < 0 ? 0 : posicaoX
    posicaoY - posicaoY < 0 ? 0 : posicaoY

    var star = document.createElement(`img`)
    star.src = `/style/img/yellow.png`
    star.className = randomSize()
    star.style.left = posicaoX + `px`
    star.style.top = posicaoY + `px`
    star.style.position = `absolute`
    star.id = `starRandom`
    star.onclick = function() {
        var pointCount = document.getElementById(`pointCount`)

        pointCount.innerHTML ++

        document.getElementById(`starRandom`).remove()
        return randomPosition()
    }

    document.body.appendChild(star)
}

/* Randomizar tamanho */
function randomSize() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return `star`
        case 1:
            return `star1`
        case 2:
            return `star2`
    }
}

/* Pontuação final */

function fPoint() {
    var pointCount = document.getElementById(`pointCount`)
    document.getElementById(`finalPoint`) = pointCount

    console.log(pointCount)
}
